import "../styles/containers/Testimonials.css"
import testimonial_1 from "../assets/testimonial_1.mp4"
import testimonial_2 from "../assets/testimonial_2.mp4"
import testimonial_3 from "../assets/testimonial_3.mp4"
import testimonial_4 from "../assets/testimonial_4.mp4"

const testimonial_data = [
    {
        nombre:"Alexandra G.",
        content:"Ahora me siento más segura de mi misma...",
        src:testimonial_1
    },
    {
        nombre:"Gisel T.",
        content:"Me siento bien al colocarme mi ropa y que no me apriete",
        src:testimonial_2
    },
    {
        nombre:"Karen N.",
        content:"Amo lo que veo en el espejo",
        src:testimonial_3
    },
    {
        nombre:"Patricia N.",
        content:"Los cambios han sido drasticos... Y quiero seguir en el gimnasio",
        src:testimonial_4
    },
] 

const TestimonialSection = () => {
    return (
        <section id="testimonial_section" className="testimonial_section">
            <h2 className="testimonial_section_title">
                <span>TESTIMONIOS</span> Y <br />RESULTADOS 
            </h2>
            <div className="container_cards_testimonial_section">
                {
                    testimonial_data && testimonial_data.map((data, key) => (
                        <div className="card_mini" key={key+data.nombre}>
                            <div className="header_card_mini">
                                <video src={data.src} controls className="header_video_card_mini"></video>
                                <h4 className="title_card_mini">
                                    <span>{data.nombre}</span>
                                </h4>
                                <p className="info_card_mini">
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