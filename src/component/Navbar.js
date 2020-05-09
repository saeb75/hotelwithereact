import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <div className="logo">
                <NavLink className="mylogo" to="/">Ecsape Travel.</NavLink>
                </div>
                <div className="nav-list">
                    <ul>
                        <li><NavLink className="mylink" to="/">home</NavLink></li>
                        <li><NavLink  className="mylink" to="/rooms">rooms</NavLink></li>
                        <li><NavLink  className="mylink" to="/about">about</NavLink></li>
                    </ul>
                </div>
            </nav>
            
        </div>
    )
}
