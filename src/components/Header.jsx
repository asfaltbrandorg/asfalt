import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import headerBackground from "../assets/images/Untitled-1.jpg";
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
      <div>
        <span>
          <FontAwesomeIcon className="mx-2 cursor-pointer drop-shadow" icon={faUser} size="lg" />
        </span>
        <span>
          <FontAwesomeIcon className="mx-2 cursor-pointer drop-shadow" icon={faShoppingCart} size="lg" />
        </span>
      </div>
      <div className="position-absolute left-50" style={logoStyles}>
        <img className="drop-shadow" style={logoImgageStyles} src={logoWhite} alt="Asfalt logo" />
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center">
          <div className="d-flex list-unstyled">
            <li>
              <Link className="text-white mx-2 drop-shadow h4" to="/customers">
                مشتریان
              </Link>
            </li>
            <li>
              <Link className="text-white mx-2 drop-shadow h4" to="/products">
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
