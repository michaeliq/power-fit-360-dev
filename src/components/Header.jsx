import { useState } from "react"
import "../styles/components/Header.css"
import logo from "../assets/logo_full.png"

const Header = () => {

    const [menuState,setMenuVisibility] = useState(false)

    const changeV = () => {
        setMenuVisibility(prev => !prev)
    }

    return(
        <div className="header">
            <div className="container_logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className={menuState?"container_nav active":"container_nav"}>
                <a onClick={()=>{changeV}} href="/"><img src={logo} alt="Logo" className="logo_menu_header_mb" /></a>
                <a onClick={()=>{changeV()}} href="#services_section"><li className="item_nav">SERVICIOS</li></a>
                <a onClick={()=>{changeV()}} href="#testimonial_section"><li className="item_nav">TESTIMONIOS</li></a>
                <a onClick={()=>{changeV()}} href="#gallery_section"><li className="item_nav">GALERIA</li></a>
            </ul>
            <div className="container_buttons_mb">
                <img src="/images/hamburguer_icon.png" onClick={(e)=>{changeV()}} alt="boton cerrar/abrir menú" className={
                    menuState ? "header_btn active":"header_btn"
                } />
            </div>
        </div>
    )
}

export default Header