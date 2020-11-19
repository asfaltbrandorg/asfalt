import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bodyBackground from "../../assets/images/h2-slider-background-img-1.jpg";

const mainStyles = {
  backgroundImage: `url("${bodyBackground}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Landing = () => {
  return (
    <div>
      <div className="vh-100 d-flex flex-column justify-content-between">
        <Header />
        <div className="h-100" style={mainStyles}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
