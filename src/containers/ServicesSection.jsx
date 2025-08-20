import "../styles/containers/ServicesSection.css";

const services_data = [
    {
        title_r: "ENTRENAMIENTO",
        title: "PRESENCIAL",
        content: "Entrena con nosotros en nuestras instalaciones con equipamiento profesional y supervisión constante.",
        image: "/images/servicios_icon_1.png",
    },
    {
        title_r: "ENTRENAMIENTO",
        title: "ONLINE",
        content: "Entrena desde casa con rutinas personalizadas y seguimiento virtual profesional.",
        image: "/images/servicios_icon_2.png",
    },
    {
        title_r: "ASESORÍA",
        title: "PERSONALIZADA",
        content: "Consultoría nutricional y de entrenamiento adaptada a tus objetivos específicos.",
        image: "/images/servicios_icon_3.png",
    },
]

const ServicesSection = () => {
    return (
        <section className="services_section">
            <h2 className="services_section_title">
                NUESTROS <br /> <span>SERVICIOS</span>
            </h2>
            <div className="container_cards">
                {
                    services_data && services_data.map((data, key) => (
                        <div className="card" key={key+data.title}>
                            <div className="header_card">
                                <img src={data.image} alt={data.title_r + " " + data.title} className="img_card" />
                                <h4 className="title_card">
                                    <span>{data.title_r}</span> <br />{data.title}
                                </h4>
                                <p className="info_card">
                                    {data.content}
                                </p>
                            </div>
                            <form action="#" className="form_card">
                                <input type="text" name="fullname" id="fullname" placeholder="Nombre Completo" />
                                <input type="number" name="weight" id="weight" value={""} placeholder="Peso (Kg)" />
                                <input type="text" name="patologies" id="patologies" value={""} placeholder="Patologías (si las hay)" />
                                <input type="text" name="injuries" id="injuries" value={""} placeholder="Lesiones" />
                                <input type="text" name="stature" id="stature" value={""} placeholder="Estatura" />
                                <input type="number" name="gym_time" id="gym_time" value={""} placeholder="Tiempo en el gimnasio" />
                                <input type="submit" value="ENVIAR A WHATSAPP" />
                            </form>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ServicesSection