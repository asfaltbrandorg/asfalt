import { Row as BootstrapRow, Col } from "react-bootstrap";

import Product3 from "./Product3";
import RowImage1 from "../../assets/images/port-img-12-550x813 (2).jpg";

const LeftRow = () => {
  return (
    <BootstrapRow className="m-0 p-0">
      <Col className="p-0 m-0" xs={12} lg={4}>
        <img className="w-100" src={RowImage1} alt="Asfalt Brand" />
      </Col>
      <Col className="p-0 m-0" xs={12} lg={8} className="d-flex justify-content-center align-items-center">
        <Product3 />
        <Product3 />
      </Col>
    </BootstrapRow>
  );
};

export default LeftRow;
