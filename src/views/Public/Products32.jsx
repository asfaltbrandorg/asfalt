import Header3 from "../../components/Header3";
import Footer from "../../components/Footer";
import productsBackground from "../../assets/images/wallpaperflare.com_wallpaper (1).jpg";
import { Col, Row } from "react-bootstrap";
import Product2 from "../../components/productsPage/Product2";

const Products = () => {
  return (
    <div>
      <div style={{ height: "85px", zIndex: "1000" }} className="position-fixed w-100 drop-shadow">
        <Header3 />
      </div>
      <div style={{ height: "85px" }}></div>
      <Row style={{ padding: "10px 150px" }} className="m-0">
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={6} md={6} lg={4}>
          <Product2 />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Products;
