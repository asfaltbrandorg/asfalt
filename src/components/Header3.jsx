import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import headerBackground from "../assets/images/header-beton1.jpg";
import logoWhite from "../assets/images/logo-white.png";

const headerStyles = {
  background: "linear-gradient(to left, #000000 80%, #212121)",
  height: "85px",
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
      <div className="d-flex align-items-center drop-shadow h-100">
        <div className="mx-2 d-flex justify-content-center align-items-center h-100 text-gray border-bottom-hover">
          <FontAwesomeIcon className="mx-2 cursor-pointer" icon={faUser} size="lg" />
        </div>
        <div className="mx-2 d-flex justify-content-center align-items-center h-100 text-gray border-bottom-hover">
          <FontAwesomeIcon className="mx-2 cursor-pointer" icon={faShoppingCart} size="lg" />
        </div>
      </div>
      <div className="position-absolute left-50" style={logoStyles}>
        <img className="drop-shadow" style={logoImgageStyles} src={logoWhite} alt="Asfalt logo" />
      </div>
      <div className="d-flex h-100">
        <div className="d-flex align-items-center h-100">
          <div className="d-flex list-unstyled align-items-center h-100">
            <li className="drop-shadow h-100 mx-2">
              <Link className="h4 d-flex justify-content-center align-items-center h-100 text-gray border-bottom-hover" to="/customers">
                مشتریان
              </Link>
            </li>
            <li className="drop-shadow h-100 mx-2">
              <Link className="h4 d-flex justify-content-center align-items-center h-100 text-gray border-bottom-hover" to="/products">
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
