import { useState } from 'react'
import './styles/Card.css'
import './styles/Modal.css'
import isImageURL from 'valid-image-url'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { MdOutlineLiving } from 'react-icons/md'
import { MdKitchen } from 'react-icons/md'
import { MdOutlineBathroom } from 'react-icons/md'



function Modal() {

    const [name, setName] = useState('')
    const [units, setUnits] = useState('')
    const [img, setImg] = useState('')
    const [isValid, setIsvalid] = useState(false)
    const [unitsQnt, setUnitsQnts] = useState({
        "bedroom":0,
        "livingroom":0,
        "kitchen":0,
        "bathroom":0,
    })

    const imgHandler = (e) => {
        setImg(e.target.value)
        validUrl(img)
    }

    const validUrl = (img) => {
        isImageURL(img).then((x)=>{
            if(x){
                setIsvalid(true)
                console.log(x)
            }
        })
    }

    const unitHandler = (e)=>{
        var id = e.target.id
        console.log(e.target)
        if(id){
            setUnitsQnts({...unitsQnt, [id]: unitsQnt[id] + 1})
        }
    }


    return (
        <div className="modal-master">
            <div className="modal-cont">
                <div className="modal-img">
                    <input type="text" placeholder="Img Url" value={img} onChange={imgHandler} />
                    {isValid ? <img src={img} alt="" /> : null}
                </div>
                <div className="modal-data">
                    <input type="text" placeholder="propertie name" className="input-name"/>
                    <div className="units" onClick={unitHandler}>
                        <div className="room">
                            <MdOutlineBedroomParent className="room-icon" id="bedroom"/>
                            <p>Bedroom</p>
                            <p>{unitsQnt['bedroom']}x</p>
                        </div>
                        <div className="room">
                            <MdOutlineLiving className="room-icon" id="livingroom"/>
                            <p>Livingroom</p>
                            <p>{unitsQnt['livingroom']}x</p>
                        </div>
                        <div className="room">
                            <MdKitchen className="room-icon" id="kitchen"/>
                            <p>Kitchen</p>
                            <p>{unitsQnt['kitchen']}x</p>
                        </div>
                        <div className="room">
                            <MdOutlineBathroom className="room-icon" id="bathroom"/>
                            <p>Bathroom</p>
                            <p>{unitsQnt['bathroom']}x</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-add">
                <div className="modal-btn">Add</div>
            </div>
        </div>
    )
}

export default Modal