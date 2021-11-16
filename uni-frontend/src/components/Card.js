import { useState } from 'react/cjs/react.development'
import './styles/Card.css'

import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import ModalUpdate from './ModalUpdate'

function Card(props) {

    const [isFuncs, setIsFuncs] = useState(false)
    const [modal, setModal] = useState(false)

    const deletehandler = (e) => {
        let id = e.currentTarget.id
        if (id) {
            fetch('http://localhost:3000/delete', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "id": id })
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

    const editHandler = (e)=>{
        setModal(true)
        console.log(e.currentTarget.id)
    }

    const closeModal = (e) => {
        if (e.target.className === 'modalupdate') {
            setModal(false)
        }
    }


    return (
        <>
        <div key={props.id} className="card-cont" onMouseEnter={() => { setIsFuncs(true) }} onMouseLeave={() => { setIsFuncs(false) }}>
            <div className={isFuncs ? "funcs" : "hiden"}>
                <div className="trash-cont" id={props.id} onClick={deletehandler}>
                    <span><FaRegTrashAlt className="trash" /></span>
                </div>
                <div className="edit-cont" id={props.id} onClick={editHandler}>
                    <span><FaRegEdit className="edit" /></span>
                </div>
            </div>
            <div className="image">
                <img src={props.img} alt="back-img" />
            </div>
            <div className="card-data">
                <h3>{props.name}</h3>
                <p>{props.units}</p>
            </div>
        </div>
        {modal ?
            <ModalUpdate
                id={props.id}
                name={props.name}
                units={props.units}
                img={props.img}
                close={closeModal}
            />:
            null
            }
        </>
    )
}

export default Card