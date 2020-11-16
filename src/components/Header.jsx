import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark d-flex justify-content-between align-items-center text-light">
      <div>
        <span>یوزر</span>
        <span>سبد</span>
      </div>
      <div>لوگو</div>
      <div className="d-flex">
        <nav>
          <ul className="d-flex list-unstyled">
            <li>
              <Link to="/products">محصولات</Link>
            </li>
            <li>
              <Link to="costumers">مشتریان</Link>
            </li>
          </ul>
        </nav>
        <div>hamburgur</div>
      </div>
    </header>
  );
};

export default Header;
