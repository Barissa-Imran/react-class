import twitter from "../images/Twitter Icon.svg"
import facebook from "../images/Facebook Icon.svg"
import instagram from "../images/Instagram Icon.svg"
import GitHub from "../images/GitHub Icon.svg"

export default function Footer() {
    return (
        <footer>
            <img src={twitter} alt="twitter icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={GitHub} alt="GitHub icon" />
        </footer>
    )
}