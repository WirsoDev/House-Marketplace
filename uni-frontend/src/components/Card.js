import { useState } from 'react/cjs/react.development'
import './styles/Card.css'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'

function Card(props){

    const [isFuncs, setIsFuncs] = useState(false)

    const funcs = ()=>{
        console.log('hooover')
        setIsFuncs(isFuncs)
    }

    return(
        <div className="card-cont" onMouseEnter={()=>{setIsFuncs(true)}} onMouseLeave={()=>{setIsFuncs(false)}}>
            <div className={isFuncs?"funcs":"hiden"}>
                <FaRegTrashAlt className="trash"/>
                <FaRegEdit className="edit"/>
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