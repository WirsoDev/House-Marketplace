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
                        id={x.ID}
                    />
            )
        })}
        </div>
    )
}


export default Cardlist