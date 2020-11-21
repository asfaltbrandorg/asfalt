import { Row as BootstrapRow, Col } from "react-bootstrap";

import Product from "./Product";
import RowImage1 from "../../assets/images/h2-slider-background-img-1.jpg";

const RightRow = () => {
  return (
    <BootstrapRow className="m-0 p-0">
      <Col className="p-0 m-0" xs={12} lg={4} className="d-flex justify-content-center align-items-center">
        <Product />
      </Col>
      <Col className="p-0 m-0" xs={12} lg={8}>
        <img className="w-100" src={RowImage1} alt="Asfalt Brand" />
      </Col>
    </BootstrapRow>
  );
};

export default RightRow;
