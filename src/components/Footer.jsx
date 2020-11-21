import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const socialSizeStyle = {
  width: "40px",
  height: "40px",
};

const Footer = () => {
  return (
    <footer style={{ height: "75px" }} className="bg-dark text-center text-light shadow-lg">
      <div className="bg-black p-2 h-100">
        <div className="d-flex justify-content-center align-items-center">
          <div style={socialSizeStyle} className="bg-black p-2 mx-2 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon className="m-2 cursor-pointer" icon={faEnvelope} size="2x" />
          </div>
          <div style={socialSizeStyle} className="bg-black p-2 mx-2 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon className="m-2 cursor-pointer" icon={faInstagram} size="2x" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
