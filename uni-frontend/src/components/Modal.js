import './styles/Card.css'
import './styles/Modal.css'

function Modal(){
    return(
        <div className="modal-cont">
            <div className="modal-load">
                <input type="file" />
            </div>
            <div className="modal-data">
                <h3>name</h3>
                <p>Units</p>
            </div>
        </div>
    )
}

export default Modal