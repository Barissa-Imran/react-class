import photoGrid from "../images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero--photogrid" src={photoGrid} alt="photogrid"/>
            <div>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </section>
    )
}