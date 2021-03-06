import Header3 from "../../components/Header3";
import Footer from "../../components/Footer";
import { Col, Row } from "react-bootstrap";
import Product4 from "../../components/productsPage/Product4";
import rowImage1 from "../../assets/images/row (1).jpg";
import rowImage2 from "../../assets/images/row (2).jpg";

const Products = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div style={{ height: "85px", zIndex: "1000" }} className="position-fixed w-100 drop-shadow">
        <Header3 />
      </div>
      <div style={{ height: "85px" }}></div>
      <div style={{ border: "3px solid black", width: "900px" }} className="my-2">
        <Row className="m-0">
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border p-0" xs={12}>
            <img src={rowImage1} className="w-100" />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border p-0" xs={12}>
            <img src={rowImage2} className="w-100" />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
          <Col className="d-flex justify-content-center align-items-center border" xs={12} sm={6} md={6} lg={4}>
            <Product4 />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
