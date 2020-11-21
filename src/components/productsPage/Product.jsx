import { Component } from "react";
import sr from "../../ScrollReveal";

import HoodieImage from "../../assets/images/hoodies/HOODIE.jpg";

class Product extends Component {
  componentDidMount = () => {
    const config = {
      origin: "bottom",
      duration: 1000,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };

    sr.reveal(this.refs.box1, config);
  };

  render() {
    return (
      <div className="product" ref="box1" data-aos-delay="2000" data-aos-duration="2000" style={{ width: "250px" }} className="m-3">
        <img className="w-100" src={HoodieImage} alt="Asfalt brand hoodie" />
        <div className="d-flex flex-column align-items-center h5 text-center mt-4">
          <span className="font-lato text-white">asfalt - zed hoodie</span>
          <div className="d-flex text-white mt-2">
            <span className="mr-1 font-weight-bold h6">تومان</span>
            <span className="font-weight-bold h6">۴۹۹،۰۰۰</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
