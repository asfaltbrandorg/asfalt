import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import footerImage1 from "../assets/images/header-beton1.jpg";
import footerImage2 from "../assets/images/bg (3).jpg";

const footerStyles1 = {
  backgroundImage: `url("${footerImage1}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
};

const footerStyles2 = {
  backgroundImage: `url("${footerImage2}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const socialSizeStyle = {
  background: "radial-gradient(#0B8523 40%, #06371A)",
  marginLeft: "10px",
  height: "45px",
  border: "2px solid #42494F",
  margin: "7px",
};

const Footer = () => {
  return (
    <footer style={{ height: "75px" }} className="bg-dark text-center text-light shadow-lg">
      <div style={footerStyles1} className="d-flex justify-content-center align-items-center">
        <div style={socialSizeStyle} className="d-flex align-items-center">
          <div className="mx-1 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon className="m-4 cursor-pointer drop-white-shadow" icon={faEnvelope} size="2x" />
          </div>
          <div className="mx-1 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon className="m-4 cursor-pointer drop-white-shadow" icon={faInstagram} size="2x" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
