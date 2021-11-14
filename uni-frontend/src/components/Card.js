import './styles/Card.css'

function Card(props){
    return(
        <div className="card-cont">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="back-img" />
            </div>
            <div className="card-data">
                <h3>Casa Porto</h3>
                <p>Quarto, Sala</p>
            </div>
        </div>
    )
}

export default Card