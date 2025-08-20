import "../styles/containers/GallerySection.css"

const gallery_data = [
    {
        title:"Foto de entrenamiento",
        image:"/images/component_img_1.png"
    },
    {
        title:"Antes y después",
        image:"/images/component_img_2.png"
    },
    {
        title:"Sesión de cardio",
        image:"/images/component_img_3.png"
    },
    {
        title:"Objetivos logrados",
        image:"/images/component_img_4.png"
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