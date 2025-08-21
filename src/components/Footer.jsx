import "../styles/components/Footer.css"
import logo from "../assets/logo_full.png"
import icon_1 from "../assets/footer_icon_1_mb.png"
import icon_2 from "../assets/footer_icon_2_mb.png"
import icon_3 from "../assets/footer_icon_3_mb.png"
const Footer = () => {

    return (
        <div className="footer">
            <img src={logo} alt="Logo Power Fit 360" className="logo_footer" />
            <div className="container_info_footer">
                <p className="info_contact_footer">
                    Power Fit 360 <br />
                    Jonathan Terreros <br />
                    <a href="">+57 315 2663068</a>
                </p>
                <div className="icon_contact_footer">
                    <a href=""><img src={icon_1} alt="Facebook icon" className="icon_sn" /></a>
                    <a href=""><img src={icon_2} alt="Twitter icon" className="icon_sn" /></a>
                    <a target="_blank" href="https://www.instagram.com/jonathan_terreros_?igsh=aWd0MG1vaGRtM3Zw">
                        <img src={icon_3} alt="Instagram icon" className="icon_sn" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer