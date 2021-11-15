import { useEffect, useState } from 'react'
import './styles/Card.css'
import './styles/Modal.css'
import isImageURL from 'valid-image-url'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { MdOutlineLiving } from 'react-icons/md'
import { MdKitchen } from 'react-icons/md'
import { MdOutlineBathroom } from 'react-icons/md'



function Modal() {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [isValid, setIsvalid] = useState(false)
    const [unitsQnt, setUnitsQnts] = useState({
        "bedroom": 0,
        "livingroom": 0,
        "kitchen": 0,
        "bathroom": 0,
    })


    useEffect(() => {
        // trigger for display image on paste url
        if (img.length > 0) {
            setIsvalid(true)
        } else {
            setIsvalid(false)
        }
    }, [img])


    const imgHandler = (e) => {
        setImg(e.target.value)
        validUrl(img)
        setImg(e.target.value)
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const validUrl = (img) => {
        isImageURL(img).then((x) => {
            if (x) {
                setIsvalid(true)
            }
        })
    }

    const unitHandler = (e) => {
        var id = e.target.id
        if (id) {
            setUnitsQnts({ ...unitsQnt, [id]: unitsQnt[id] + 1 })
        }
    }

    const resetHandler = () => {
        setUnitsQnts({
            "bedroom": 0,
            "livingroom": 0,
            "kitchen": 0,
            "bathroom": 0,
        })
        setImg('')
        setIsvalid(false)
        setName('')
    }

    const addNewPropertie = () => {
        // add new properties -- send to server
        if (name.length > 0) {
            let defaultImage = img
            if (img.length <= 0 || isValid === false) {
                defaultImage = 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'

            }
            let units = ObjectToStr(unitsQnt)
            let data = {
                "name": name,
                "units": units,
                "img": defaultImage,
            }
            console.log(data)
            // send

            fetch('http://localhost:3000/add', {
                method: 'post',
                headers: {
                    'Content-Type':'application/json'
                  },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(
                    (result) => {
                        console.log(result)
                    },
                    (error) => {
                        console.log(error);
                    }
                )
            window.location.reload(true)
        }
    }


    const ObjectToStr = (obj) => {
        let buck = []
        var key, prop = obj
        for (key in prop) {
            if (prop[key] > 1) {
                buck.push(`${key} ${prop[key]}x`)
            }
            if(prop[key] === 1){
                buck.push(`${key}`)
            }
        }
        return buck.join(', ')
    }


    return (
        <div className="modal-master">
            <div className="modal-cont">
                <div className="modal-img">
                    <input type="text" placeholder="Paste image url" value={img} onChange={imgHandler} />
                    {isValid ? <img src={img} alt="" /> : null}
                </div>
                <div className="modal-data">
                    <input type="text" placeholder="propertie name" className="input-name" value={name} onChange={nameHandler} />
                    <div className="units" onClick={unitHandler}>
                        <div className="room">
                            <MdOutlineBedroomParent className="room-icon" id="bedroom" />
                            <p>Bedroom</p>
                            <p>{unitsQnt['bedroom']}x</p>
                        </div>
                        <div className="room">
                            <MdOutlineLiving className="room-icon" id="livingroom" />
                            <p>Livingroom</p>
                            <p>{unitsQnt['livingroom']}x</p>
                        </div>
                        <div className="room">
                            <MdKitchen className="room-icon" id="kitchen" />
                            <p>Kitchen</p>
                            <p>{unitsQnt['kitchen']}x</p>
                        </div>
                        <div className="room">
                            <MdOutlineBathroom className="room-icon" id="bathroom" />
                            <p>Bathroom</p>
                            <p>{unitsQnt['bathroom']}x</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-add">
                <div className="modal-btn" onClick={addNewPropertie}>Add</div>
                <div className="modal-btn" id="reset" onClick={resetHandler}>Reset</div>
            </div>
        </div>
    )
}

export default Modal