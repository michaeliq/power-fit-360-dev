import "../styles/containers/GallerySection.css"
import comp_img_1 from "../assets/component_img_1.png"
import comp_img_2 from "../assets/component_img_2.png"
import comp_img_3 from "../assets/component_img_3.png"
import comp_img_4 from "../assets/component_img_4.png"

const gallery_data = [
    {
        title:"Foto de entrenamiento",
        image:comp_img_1
    },
    {
        title:"Antes y después",
        image:comp_img_2
    },
    {
        title:"Sesión de cardio",
        image:comp_img_3
    },
    {
        title:"Objetivos logrados",
        image:comp_img_4
    },
]

const GallerySection = () => {
    return(
        <section id="gallery_section" className="gallery_section">
            <div className="component_cards_container">
                {gallery_data && gallery_data.map((data,key)=>(
                    <div className="component_card">
                        <img src={data.image} alt={data.title} className="img_component_card" />
                        <h4 className="title_component_card">
                            {data.title}
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GallerySection