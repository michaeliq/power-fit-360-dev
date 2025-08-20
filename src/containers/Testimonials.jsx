

const testimonial_data = [
    {
        nombre:"María González",
        content:"Perdí 15kg en 6 meses con POWER FIT 360. El entrenamiento personalizado cambió mi vida...",
    },
    {
        nombre:"Ana Rodríguez",
        content:"El entrenamiento online me permitió mantenerme en forma desde casa. Resultados increíbles.",
    },
] 

const TestimonialSection = () => {
    return (
        <section className="testimonial_section">
            <h2 className="testimonial_section_title">
                NUESTROS <br /> <span>SERVICIOS</span>
            </h2>
            <div className="container_cards_testimonial_section">
                {
                    testimonial_data && testimonial_data.map((data, key) => (
                        <div className="card" key={key+data.nombre}>
                            <div className="header_card">
                                <video src="" className="header_video_card"></video>
                                <h4 className="title_card">
                                    <span>{data.nombre}</span>
                                </h4>
                                <p className="info_card">
                                    {data.content}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TestimonialSection