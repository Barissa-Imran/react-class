import "./index.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Card from "./components/Card";
import katie from "./images/katie-zaferes.png"
import grid from "./images/photo-grid.png"

export default function App() {
    // const date = new Date()
    // const hours = date.getHours()
    // let timeOfDay

    // if (hours < 12) {
    //     timeOfDay = "morning"
    // } else if (hours >= 12 && hours < 17) {
    //     timeOfDay = "afternoon"
    // } else {
    //     timeOfDay = "night"
    // }


    return (
        <div>
            {/* <h1>Good {timeOfDay}!</h1> */}
            <Navbar />
            <Hero />
            <Card img={katie} name="Katie Zaferes" price="136" />
            <Card img={grid} name="Julius Yego" price="100" />
            <Card img={katie} name="imran dhidha" price="20" />
            <Card img={grid} name="Barry jnr" price="70" />
        </div>
    );
}
