import { useState } from "react"
import "../styles/components/FormServices.css"
import Swal from "sweetalert2"

const initialDataForm = {
    fullname: "",
    weight: "",
    patologies: "",
    injuries: "",
    stature: "",
    gym_time: ""
}

const FormServices = ({ data }) => {

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
        Swal.fire({
            title: "¿Estás seguro de enviar la información?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Enviar",
            denyButtonText: `Cancelar`
        }).then((result) => {
            if (result.isConfirmed) {
                const composeMessage = `Hola me llamo ${data?.fullname}, en este momento estoy pesando ${data?.weight} Kg. ¿Presento alguna patología? ${data.patologies}. ¿He tenido alguna lesión? ${data.injuries}. Tengo una estatura de ${data.stature}cm y he dedicado ${data.gym_time} al gimnasio.`
                const encodeMessage = encodeURIComponent(composeMessage)
                window.open(`https://wa.me/573152663068/?text=${encodeMessage}`, "_blank")
                setFormData(initialDataForm)
                Swal.fire("Enviado!", "", "Has enviado tus datos exitosamente");
            } else if (result.isDenied) {

            }
        });

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
                <select name="gym_time" className="select_input_card_form" value={formData.gym_time} onChange={(e) => { getInputData(e) }}>
                    <option value={null}>Tiempo dedicado al gimnasio</option>
                    <option value="1 semana o menos">1 semana o menos</option>
                    <option value="1 mes o menos">1 mes o menos</option>
                    <option value="6 meses o menos">6 meses o menos</option>
                    <option value="1 año o menos">1 año o menos</option>
                    <option value="más de 1 año">más de 1 año</option>
                </select>
                <input onClick={(e) => SendMessage(e, formData)} type="submit" value="ENVIAR A WHATSAPP" />
            </form>
        </div>
    )
}

export default FormServices