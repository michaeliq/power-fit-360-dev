import { useState } from "react"
import "../styles/components/Header.css"

const Header = () => {

    const [menuState,setMenuVisibility] = useState(false)

    const changeV = () => {
        setMenuVisibility(prev => !prev)
    }

    return(
        <div className="header">
            <div className="container_logo">
                <img src="/images/logo_full.png" alt="Logo" className="logo" />
            </div>
            <ul className={menuState?"container_nav active":"container_nav"}>
                <img src="/images/logo_full.png" alt="Logo" className="logo_menu_header_mb" />
                <li className="item_nav">SERVICIOS</li>
                <li className="item_nav">TESTIMONIOS</li>
                <li className="item_nav">GALERIA</li>
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