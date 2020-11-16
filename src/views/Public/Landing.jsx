import Header from "../../components/Header";
import Footer from "../../components/Footer";

const mainStyles = {
  backgroundImage: `url("https://images.unsplash.com/photo-1512400930990-e0bc0bd809df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Landing = () => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-between">
      <Header />
      <div className="h-100" style={mainStyles}></div>
      <Footer />
    </div>
  );
};

export default Landing;
