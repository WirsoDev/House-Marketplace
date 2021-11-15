import Card from './Card'
import './styles/Cardlist.css'

function Cardlist(props) {
    return (
        <div className="cardlist-cont">
        {
        props.data.map((x) => {
            return (
                    <Card
                        name={x.name}
                        units={x.units}
                        img={x.img}
                    />
            )
        })}
        </div>
    )
}

/*
function Cardlist(props) {
    return (
        props.properties.map((data) => {
            <div className="cardlist-cont">
                <Card
                    name={data.name}
                    units="Casa de banho, Cozinha"
                    img="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                />
            </div>
        })
    )
}
*/

export default Cardlist