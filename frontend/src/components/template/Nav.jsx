import React from "react";
import './Nav.css'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <a href="#/">
                <i className="fa fa-home"> Inicio</i>
            </a>
            <a href="#/users">
                <i className="fa fa-users"> Friends</i>
            </a>
        </nav>
    </aside>
