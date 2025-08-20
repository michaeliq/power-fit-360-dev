import "../styles/containers/HeroSection.css";

const HeroSection = () => {
    return (
        <section className="hero_banner">
            <img src="/images/logo_full.png" alt="Logo Power Fit 360" className="logo_hero" />
            <div className="content_hero">
                <h1 className="subtitle_hero">
                    Transforma tu cuerpo, <br />transforma tu vida
                </h1>
                <button className="cta_hero">
                    COMIENZA AHORA
                </button>
            </div>
        </section>
    )
}

export default HeroSection