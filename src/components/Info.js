import photo from "../images/Rectangle 90.png";
import mail from "../images/Mail.svg";
import linkedin from "../images/linkedin.svg";

export default function Info() {
  return (
    <header className="card--info">
      <img className="card--image" src={photo} alt="Laura smith" />
      <h3 className="card--name">Laura Smith</h3>
      <h4 className="card--title">Frontend Developer</h4>
      <p className="card-web">laurasmith.website</p>
      <button>
        <img src={mail} alt="email icon" />
        Email
      </button>
      <button className="card--linkedin">
        <img src={linkedin} alt="linkedin icon" />
        Linkedin
      </button>
    </header>
  );
}
