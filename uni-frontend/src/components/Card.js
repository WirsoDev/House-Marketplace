import { useState } from 'react/cjs/react.development'
import './styles/Card.css'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'

function Card(props) {

    const [isFuncs, setIsFuncs] = useState(false)

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


    return (
        <div key={props.id} className="card-cont" onMouseEnter={() => { setIsFuncs(true) }} onMouseLeave={() => { setIsFuncs(false) }}>
            <div className={isFuncs ? "funcs" : "hiden"}>
                <div className="trash-cont" id={props.id} onClick={deletehandler}>
                    <span><FaRegTrashAlt className="trash" /></span>
                </div>
                <div className="edit-cont">
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
    )
}

export default Card