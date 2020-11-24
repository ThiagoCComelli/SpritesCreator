import React, {useRef, useEffect, useState} from 'react'
import Miniature from '../components/Miniature'

import '../style/App.css'

function App() {
  window.addEventListener('keyup', (e) => {
    if(e.keyCode === 68 && configs.actualSize !== 0) {
      console.log(configs)
    }
  })

  const [images,setImages] = useState([])
  const [isActive, setActive] = useState(false)
  const [pencil, changePencil] = useState({color:'#000000',lineCap:'round',lineWidth:5})
  const [configs,changeConfigs] = useState({actualMask:null,actualSize:0})
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  var it = 0

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = document.getElementById("canvas").clientWidth
    canvas.height = document.getElementById("canvas").clientHeight
    canvas.style.width = `100%`
    canvas.style.height = `100%`

    context.lineJoin = 'round'
    context.lineCap = pencil.lineCap
    context.strokeStyle = pencil.color
    context.lineWidth = pencil.lineWidth
    contextRef.current = context

    // eslint-disable-next-line
  },[])

  useEffect(() => {
    contextRef.current.strokeStyle = pencil.color
    contextRef.current.lineCap = pencil.lineCap
    contextRef.current.lineWidth = pencil.lineWidth
  },[pencil])

  const startDraw = ({nativeEvent}) => {
    const {offsetX,offsetY} = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX,offsetY)
    setActive(true)
  }

  const draw = ({nativeEvent}) => {
    if(!isActive){
      return
    }
    const {offsetX,offsetY} = nativeEvent
    contextRef.current.lineTo(offsetX,offsetY)
    contextRef.current.stroke()

  }

  const finishDraw = () => {
    contextRef.current.closePath()
    setActive(false)
  }

  const changeBackground = ([background,id]) => {
    var back = background
    if(background === configs.actualMask){
      document.getElementById("canvas").style.backgroundImage = "none"
      back = null
    } else {
      document.getElementById("canvas").style.backgroundImage = `url(${background})`
    }
    
    changeConfigs({...configs,actualMask:back})
  }

  const changeEdit = ([background,id]) => {
    document.getElementById("canvas").style.backgroundImage = "none"
    changeConfigs({...configs,actualMask:null})
    deleteMiniature([background,id])

    var backgroundImage = new Image()
    backgroundImage.src = background

    contextRef.current.drawImage(backgroundImage,0,0)


  }

  const deleteMiniature = ([miniature,id]) => {
    setImages(images.filter(item => item !== miniature))

    changeConfigs({...configs,actualSize:configs.actualSize-1})

    if(miniature === configs.actualMask){
      document.getElementById("canvas").style.backgroundImage = "none"
    }
  }

  return (
    <div className="App">
      <div className="canvasDiv" id="canvas">
        <canvas onMouseDown={startDraw} onMouseUp={finishDraw} onMouseMove={draw} ref={canvasRef}/>
      </div>
      <div className="canvasOptions">
        {images.map((image) => {
          it++
          return <Miniature mask={configs.actualMask === image ? true : false} changeEdit={changeEdit} deleteMiniature={deleteMiniature} changeBackground={changeBackground} key={it} id={it} image={image} width={canvasRef.current.width} height={canvasRef.current.height}/>
        })}
      </div>
      <div className="canvasOptions">
        <div className="canvasColorPicker canvasOptionsBox">
          <input id="colorInput" type="color" onChange={(e) => {changePencil({...pencil,color:e.target.value})}}></input>
          <strong onClick={() => {
            navigator.clipboard.writeText(pencil.color)
            alert(`Color copied: ${pencil.color}`)
          }}>{pencil.color}</strong>
        </div>
        <div className="canvasStrokePicker canvasOptionsBox">
          <label htmlFor="lineCap">LineCap:</label>
          <select name="lineCap" id="lineCap" defaultValue="round" onChange={(e) => {changePencil({...pencil,lineCap:e.target.value})}}>
            <option value="butt">Butt</option>
            <option value="square">Square</option>
            <option value="round">Round</option>
          </select>
        </div>
        <div className="canvasLineWidth canvasOptionsBox">
          <label>Line Width:</label>
          <input type="number" defaultValue="5" min='1' onChange={(e) => {changePencil({...pencil,lineWidth:e.target.value})}}></input>
        </div>
        <div className="canvasNewLayer canvasOptionsBox">
          <button onClick={() => {
            var dataUrl = canvasRef.current.toDataURL()

            setImages(images => [...images,dataUrl])
            changeConfigs({...configs,actualMask:dataUrl,actualSize:configs.actualSize+1})

            document.getElementById("canvas").style.backgroundImage = `url(${dataUrl})`
            contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)
            }}>New Layer</button>
        </div>
        <div className="canvasClear canvasOptionsBox">
          <button onClick={() => {
            contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)
            }}>Clear</button>
        </div>
        <div className="canvasReset canvasOptionsBox">
          <button onClick={() => {
            setImages([])

            document.getElementById("canvas").style.backgroundImage = "none"
            contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)
            }}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
