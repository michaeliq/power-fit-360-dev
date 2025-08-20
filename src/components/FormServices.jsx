import { useState } from "react"
import "../styles/components/FormServices.css"

const initialDataForm = {
    fullname: "",
    weight: "",
    patologies: "",
    injuries: "",
    stature: "",
    gym_time: ""
}

const FormServices = ({data}) => {

    const [formData, setFormData] = useState(initialDataForm)

    const getInputData = (e) => {
        try {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        } catch (error) {
            console.error(error)
        }
    }

    const SendMessage = (e, data) => {
        e.preventDefault()
        const composeMessage = `Hola me llamo ${data?.fullname}, en este momento estoy pesando ${data?.weight} Kg. ¿Presento alguna patología? ${data.patologies}. ¿He tenido alguna lesión? ${data.injuries}. Tengo una estatura de ${data.stature}cm y he dedicado ${data.gym_time} al gimnasio.`
        const encodeMessage = encodeURIComponent(composeMessage)
        window.open(`https://wa.me/573152663068/?text=${encodeMessage}`,"_blank")
        setFormData(initialDataForm)
    }

    return (
        <div className="card">
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
                <input onChange={(e) => { getInputData(e) }} type="text" name="fullname" id="fullname" value={formData.fullname} placeholder="Nombre Completo" />
                <input onChange={(e) => { getInputData(e) }} type="number" name="weight" id="weight" value={formData.weight} placeholder="Peso (Kg)" />
                <input onChange={(e) => { getInputData(e) }} type="text" name="patologies" id="patologies" value={formData.patologies} placeholder="Patologías (si las hay)" />
                <input onChange={(e) => { getInputData(e) }} type="text" name="injuries" id="injuries" value={formData.injuries} placeholder="Lesiones" />
                <input onChange={(e) => { getInputData(e) }} type="number" name="stature" id="stature" value={formData.stature} placeholder="Estatura (cm)" />
                <input onChange={(e) => { getInputData(e) }} type="number" name="gym_time" id="gym_time" value={formData.gym_time} placeholder="Tiempo en el gimnasio" />
                <input onClick={(e)=>SendMessage(e,formData)} type="submit" value="ENVIAR A WHATSAPP" />
            </form>
        </div>
    )
}

export default FormServices