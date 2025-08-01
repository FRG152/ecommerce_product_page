import IconCart from "../assets/images/icon-cart.svg";
import Button from "./Button";
// import Review from "./Review";
import QuantityBtn from "./QuantityBtn";

const ProductInfo = () => {
  return (
    <div className="container_product_content">
      <h5 className="product_content_title">SNEAKER COMPANY</h5>
      <h1 className="product_content_subtitle">
        Fall Limited Edition Sneakers
      </h1>
      <p className="product_content_desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they`all withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-row items-center justify-between my-5 md:flex-col md:items-start">
        <div className="flex items-center gap-5">
          <p className="font-bold text-3xl text-black">$125.00</p>
          <span className="bg-black text-white font-semibold rounded-md px-2">
            50%
          </span>
        </div>
        <p className="text-gray-500 font-semibold">$250. 00</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        <QuantityBtn />
        <Button
          icon={<img src={IconCart} />}
          text="Add to card"
          styles="md:max-w-[60%]"
        />
      </div>
      {/* <Review /> */}
    </div>
  );
};

export default ProductInfo;
