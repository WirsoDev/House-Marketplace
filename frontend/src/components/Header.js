import './styles/Header.css'

function Header(props){
    return(
        <div className="header-cont">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header



