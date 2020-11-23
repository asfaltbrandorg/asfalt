import HoodieImage from "../../assets/images/backtire.png";

const Product = () => {
  return (
    <div style={{ width: "250px" }} className="m-3">
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
};

export default Product;
