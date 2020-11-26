import React from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {FaMask,FaDownload} from 'react-icons/fa'

import '../style/Miniature.css'

function Miniature(props) {
    const width = (90*props.width)/props.height
    const style = {
        minWidth: width,
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover"
    }

    const download = () => {
        var download_ = document.createElement('a')
        download_.href = props.image
        download_.target = '_blank'
        download_.download = `SpritesCreator-${props.id}.png`

        download_.click()
    }

    return(
        <>
        <div className="miniatureIcons">
            <AiFillEdit className="miniIcons" onClick={() => {props.changeEdit([props.image,props.id])}} size={20} />
            <FaMask style={{color: `${props.mask ? "green" : "black"}`}} className="miniIcons" size={20} />
            <FaDownload onClick={download} className="miniIcons" size={20} />
            <AiFillDelete className="miniIcons" onClick={() => {props.deleteMiniature([props.image,props.id])}} size={20} />
        </div>
        <div onClick={() => {props.changeBackground([props.image,props.id])}} className={`miniature ${props.mask ? "miniatureMask" : "null"}`} style={style}>
            <label>{props.id}</label>
        </div>
        </>
    )
}

export default Miniature
