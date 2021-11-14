import './styles/Filter.css'

function Header() {
    return (
        <div className="filter-cont">
            <div className="search-box">
                <div className="header-props">
                    <h3>All Properties</h3>
                </div>
                <div className="header-filter">
                    <p>Filter by rooms</p>
                </div>
            </div>
            <div className="search-box-add">
                <div className="add">
                    <p>+</p>
                </div>
            </div>
            

        </div>
    )
}

export default Header