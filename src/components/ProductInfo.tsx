import IconCart from "../assets/images/icon-cart.svg";
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
        <button className="w-full h-[60px] flex items-center justify-center rounded-md bg-orange-400 gap-5 md:w-[70%]">
          <img src={IconCart} />
          <p className="font-bold text-black">Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
