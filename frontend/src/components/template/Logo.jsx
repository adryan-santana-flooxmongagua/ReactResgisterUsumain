import './Logo.css'
import logo from '../../assets/imgs/logo.jpeg'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>
