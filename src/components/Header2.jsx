import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import headerBackground from "../assets/images/header-beton1.jpg";
import logoWhite from "../assets/images/logo-white.png";

const headerStyles = {
  backgroundImage: `url("${headerBackground}")`,
  backgroundRepeat: "no-repeat",
  height: "85px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const logoStyles = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const logoImgageStyles = {
  width: "140px",
};

const Header = () => {
  return (
    <header style={headerStyles} className="position-relative d-flex justify-content-between align-items-center text-light">
      <div
        className="d-flex align-items-center drop-shadow"
        style={{ background: "radial-gradient(#0B8523 40%, #06371A)", marginLeft: "10px", height: "45px", border: "2px solid #42494F" }}
      >
        <div className="mx-2 d-flex justify-content-center">
          <FontAwesomeIcon className="mx-2 cursor-pointer drop-white-shadow" icon={faUser} size="lg" />
        </div>
        <div className="mx-2 d-flex justify-content-center">
          <FontAwesomeIcon className="mx-2 cursor-pointer drop-white-shadow" icon={faShoppingCart} size="lg" />
        </div>
      </div>
      <div className="position-absolute left-50" style={logoStyles}>
        <img className="drop-shadow" style={logoImgageStyles} src={logoWhite} alt="Asfalt logo" />
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center">
          <div className="d-flex list-unstyled align-items-center">
            <li
              className="drop-shadow p-2"
              style={{ background: "radial-gradient(#0B8523 30%, #06371A)", marginRight: "10px", height: "45px", border: "2px solid #42494F" }}
            >
              <Link className="text-white h4 drop-white-shadow" to="/customers">
                مشتریان
              </Link>
            </li>
            <li
              className="drop-shadow p-2"
              style={{ background: "radial-gradient(#0B8523 30%, #06371A)", marginRight: "10px", height: "45px", border: "2px solid #42494F" }}
            >
              <Link className="text-white h4 drop-white-shadow" to="/products">
                محصولات
              </Link>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
