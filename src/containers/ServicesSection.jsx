import { useState } from "react";
import "../styles/containers/ServicesSection.css";
import FormServices from "../components/FormServices";
import services_icon_1 from "../assets/servicios_icon_1.png"
import services_icon_2 from "../assets/servicios_icon_2.png"
import services_icon_3 from "../assets/servicios_icon_3.png"

const services_data = [
    {
        title_r: "ENTRENAMIENTO",
        title: "PRESENCIAL",
        content: "Entrena con nosotros en nuestras instalaciones con equipamiento profesional y supervisión constante.",
        image: services_icon_1,
    },
    {
        title_r: "ENTRENAMIENTO",
        title: "ONLINE",
        content: "Entrena desde casa con rutinas personalizadas y seguimiento virtual profesional.",
        image: services_icon_2,
    },
    {
        title_r: "ASESORÍA",
        title: "PERSONALIZADA",
        content: "Consultoría nutricional y de entrenamiento adaptada a tus objetivos específicos.",
        image: services_icon_3,
    },
]

const initialDataForm = {
    fullname:"",
    weight:null,
    patologies:"",
    injuries:"",
    stature:null,
    gym_time:null
}

const ServicesSection = () => {

    const [formData, setFormData] = useState(initialDataForm)

    const getInputData = (e) => {
        const label = e.target.name
        const value = e.target.value

        setFormData(prev => prev[label] = value)
    }

    return (
        <section id="services_section" className="services_section">
            <h2 className="services_section_title">
                NUESTROS <br /> <span>SERVICIOS</span>
            </h2>
            <div className="container_cards">
                {
                    services_data && services_data.map((data, key) => (
                        <FormServices key={key + data.title} data={data} />
                    ))
                }
            </div>
        </section>
    )
}

export default ServicesSection