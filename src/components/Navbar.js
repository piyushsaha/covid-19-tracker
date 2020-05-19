import React from "react"
import { NavLink, } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <nav className="my-nav">
                <h2>Covid-19 Tracker</h2>
                <div className="navlinks">
                        <div className="navlink"> <NavLink exact path to="/">Home</NavLink> </div>
                        <div className="navlink"> <NavLink path to="/statewise">Statewise Data</NavLink> </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar