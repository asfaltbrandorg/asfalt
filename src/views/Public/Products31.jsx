import Header3 from "../../components/Header3";
import Footer from "../../components/Footer";
import LeftRow2 from "../../components/productsPage/LeftRow2";
import RightRow2 from "../../components/productsPage/RightRow2";

const Products = () => {
  return (
    <div>
      <div style={{ height: "85px", zIndex: "1000" }} className="position-fixed w-100 drop-shadow">
        <Header3 />
      </div>
      <div style={{ height: "85px" }}></div>
      <div>
        <LeftRow2 />
        <RightRow2 />
        <LeftRow2 />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
