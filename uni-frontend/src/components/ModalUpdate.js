import { useState } from 'react/cjs/react.development'
import './styles/ModalUpdate.css'

function ModelUpdate(props) {

    const [newName, setNewName] = useState('')
    const [newUnits, setNewUnits] = useState('')
    const [newImg, setNewImg] = useState('')

    useState(() => {
        setNewName(props.name)
        setNewUnits(props.units)
        setNewImg(props.img)
    }, [])


    const updateData = () => {

        let data = {
            "id":props.id,
            "name":newName,
            "units":newUnits,
            "img":newImg
        }

        fetch('http://localhost:3000/update', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
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
    

    return (
        <div className="modalupdate" onClick={props.close}>
            <div className="modalupdate-cont">
                <input type="text" value={newName} onChange={(e) => { setNewName(e.target.value) }} />
                <input type="text" value={newUnits} onChange={(e) => { setNewUnits(e.target.value) }} />
                <input type="text" value={newImg} onChange={(e) => { setNewImg(e.target.value) }} />
                <div className="btn" onClick={updateData}>Update propertie</div>
            </div>
        </div>
    )
}


export default ModelUpdate