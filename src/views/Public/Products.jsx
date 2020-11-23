import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LeftRow from "../../components/productsPage/LeftRow";
import RightRow from "../../components/productsPage/RightRow";
import productsBackground from "../../assets/images/wallpaperflare.com_wallpaper (1).jpg";

const backgroundStyles = {
  backgroundImage: `url("${productsBackground}")`,
  backgroundSize: "contain",
};

const Products = () => {
  return (
    <div style={backgroundStyles}>
      <div style={{ height: "85px", zIndex: "1000" }} className="position-fixed w-100 drop-shadow">
        <Header />
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
