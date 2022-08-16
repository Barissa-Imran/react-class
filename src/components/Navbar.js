import airbnbLogo from "../images/airbnb-logo.svg"
export default function Nav() {
    return (
        <nav>
            <img className="nav--logo" src={airbnbLogo} alt="airbnb Logo" />
        </nav>
    )
}