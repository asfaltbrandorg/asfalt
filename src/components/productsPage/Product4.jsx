import HoodieImage from "../../assets/images/hoodies/HOODIE.jpg";

const Product = () => {
  return (
    <div className="m-3">
      <img className="w-100" src={HoodieImage} alt="Asfalt brand hoodie" />
      <div className="d-flex flex-column align-items-center h5 text-center mt-4">
        <span className="font-lato">asfalt - zed hoodie</span>
        <div className="d-flex mt-2">
          <span className="mr-1 font-weight-bold h6">تومان</span>
          <span className="font-weight-bold h6">۴۹۹،۰۰۰</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
