import React from "react"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

//import ButtonLink from "./components/ButtonLink"
import Button from "../Button"

import "./menu.css"


function Menu() {
    return (
        <nav className="Menu">
            <Link to='/'>
                <img className="Logo" src={logo} alt="logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;