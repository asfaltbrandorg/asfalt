import Header from "../../components/Header";
import Footer from "../../components/Footer";
import productsBackground from "../../assets/images/wallpaperflare.com_wallpaper (1).jpg";
import { Col, Row } from "react-bootstrap";
import Product2 from "../../components/productsPage/Product2";

const backgroundStyles = {
  backgroundImage: `url("${productsBackground}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

const Products = () => {
  return (
    <div style={backgroundStyles}>
      <div style={{ height: "85px", zIndex: "1000" }} className="position-fixed w-100 drop-shadow">
        <Header />
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
