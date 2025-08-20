import "../styles/components/Footer.css"

const Footer = () => {

    return(
        <div className="footer">
            <img src="/images/logo_full.png" alt="Logo Power Fit 360" className="logo_footer" />
            <div className="container_info_footer">
                <p className="info_contact_footer">
                    Power Fit 360 <br />
                    Jonathan Terreros <br />
                    <a href="">+57 315 2663068</a>
                </p>
                <div className="icon_contact_footer">
                    <img src="/images/footer_icon_1_mb.png" alt="Facebook icon" className="icon_sn" />
                    <img src="/images/footer_icon_2_mb.png" alt="Twitter icon" className="icon_sn" />
                    <img src="/images/footer_icon_3_mb.png" alt="Instagram icon" className="icon_sn" />
                </div>
            </div>
        </div>
    )
}

export default Footer