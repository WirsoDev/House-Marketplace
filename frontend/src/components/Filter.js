import { useState } from 'react'
import './styles/Filter.css'
import './styles/Modal.css'
import Modal from './Modal'


function Header(props) {

    const [allProp, setAllProp] = useState(true)
    const [modal, setModal] = useState(false)
    const [isTwoSelected, setIsTwoSelected] = useState(false)
    const [isThreeSelected, setIsThreeSelected] = useState(false)

    const AllpropHandler = (e) => {
        if (allProp) {
            // dont run state if allprop true
            return
        }
        setAllProp(true)
        setIsTwoSelected(false)
        setIsThreeSelected(false)
        props.filterHandler(e.currentTarget.id)
    }

    const addClick = (e) => {
        setModal(true)
        props.titlehandler(e)
    }


    const closeModal = (e) => {
        if (e.target.className === 'modal') {
            setModal(false)
            props.titlehandler(e)
        }
    }

    const selectHandler = (e) => {
        let id = e.currentTarget.id
        // Ignore default case
        // eslint-disable-next-line
        switch (id) {
            case "2":
                setIsTwoSelected(true)
                setIsThreeSelected(false)
                break;
            case "3":
                setIsTwoSelected(false)
                setIsThreeSelected(true)
                break;
        }
        setAllProp(false)
        props.filterHandler(e.currentTarget.id)
    }


    return (
        <div className="filter-cont">
            <div className="search-box">
                <div className={allProp ? "header-props header-all" : "header-props"} onClick={AllpropHandler} id="all">
                    <h3>All Properties</h3>
                </div>
                <div className={isTwoSelected ? "header-filter selected" : "header-filter"} onClick={selectHandler} id="2">
                    <p>2 bedrooms</p>
                </div>
                <div className={isThreeSelected ? "header-filter selected" : "header-filter"} onClick={selectHandler} id="3">
                    <p>3 bedrooms</p>
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