import Header3 from "../../components/Header3";
import Footer from "../../components/Footer";
import LeftRow from "../../components/productsPage/LeftRow";
import RightRow from "../../components/productsPage/RightRow";
import productsBackground from "../../assets/images/1507_V-1.jpg";

const Products = () => {
  return (
    <div>
      <div style={{ height: "85px", zIndex: "1000" }} className="position-fixed w-100 drop-shadow">
        <Header3 />
      </div>
      <div style={{ height: "85px" }}></div>
      <div>
        <LeftRow />
        <RightRow />
        <LeftRow />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
