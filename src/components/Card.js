// import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card({img, name, price}) {
    // console.log(props)
    return (
        <section>
            <div className="card">
                <img className="card--image" src={img} alt="katie zaferes" />

                <div className="rating">
                    <img className="card--star" src={star} alt="star icon" /> 
                    <p>5.0</p> 
                    <span className="gray">(6) . USA</span>
                </div>
                <p>Life lessons with {name}</p>
                <p><strong>From ${price}</strong> / person</p>
            </div>
        </section>
    )
}