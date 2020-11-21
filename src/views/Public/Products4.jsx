import Header2 from "../../components/Header2";
import Footer2 from "../../components/Footer2";
import LeftRow from "../../components/productsPage/LeftRow";
import RightRow from "../../components/productsPage/RightRow";
import productsBackground from "../../assets/images/bg (3).jpg";

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
        <Header2 />
      </div>
      <div style={{ height: "85px" }}></div>
      <div>
        <LeftRow />
        <RightRow />
        <LeftRow />
      </div>
      <Footer2 />
    </div>
  );
};

export default Products;
