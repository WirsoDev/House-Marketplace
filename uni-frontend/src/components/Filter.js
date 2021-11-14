import { useState } from 'react'
import './styles/Filter.css'
import './styles/Modal.css'
import Modal from './Modal'


function Header() {

    const [allProp, setAllProp] = useState(true)
    const [modal, setModal] = useState(false)
    const [isSelected, setIsSelected] = useState(false)

    const AllpropHandler = () => {
        if (allProp) {
            // dont run state if allprop true
            return
        }
        setAllProp(true)
    }

    const addClick = () => {
        setModal(true)
    }


    const closeModal = (e) => {
        if (e.target.className == 'modal') {
            setModal(false)
        }
    }

    const selectHandler = (e)=>{
        console.log(e.target)
    }


    return (
        <div className="filter-cont">
            <div className="search-box">
                <div className={allProp ? "header-props header-all" : "header-props"} onClick={AllpropHandler}>
                    <h3>All Properties</h3>
                </div>
                <div className={isSelected ? "header-filter selected":"header-filter"} onClick={selectHandler}>
                    <p>1 bed room</p>
                </div>
                <div className={isSelected ? "header-filter selected":"header-filter"}>
                    <p>2 bed rooms</p>
                </div>
                <div className={isSelected ? "header-filter selected":"header-filter"}>
                    <p>3 bed rooms</p>
                </div>
            </div>
            <div className="search-box-add" onClick={addClick}>
                <div className="add">
                    <p>+</p>
                </div>
            </div>
            {modal ?
                <div className="modal" onClick={closeModal}>
                    <Modal />
                </div>
                : null
            }
        </div>
    )
}

export default Header