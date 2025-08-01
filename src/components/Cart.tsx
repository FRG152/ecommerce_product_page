import iconDelete from "../assets/images/icon-delete.svg";
import imageProduct from "../assets/images/image-product-1.jpg";
import Button from "./Button";

const Product = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-row justify-start gap-3 py-2">
        <img
          src={imageProduct}
          alt="product"
          width={50}
          height={50}
          className="rounded-lg"
        />
        <div className="flex flex-col">
          <p className="text-gray-500">Fall Limited Edition Sneakers</p>
          <p className="flex items-center text-gray-500 gap-2">
            $125.00 x 3 <strong className="text-black">$375.00</strong>
          </p>
        </div>
      </div>
      <img src={iconDelete} alt="" />
    </div>
  );
};

const Cart = () => {
  return (
    <div className="container_cart">
      <h3 className="font-bold text-left px-5 py-5">Cart</h3>
      <hr className=" text-gray-300 pb-4" />
      {true ? (
        <div className="min-h-30 flex flex-col gap-5 px-5">
          <Product />
          <Button text="Checkout" />
        </div>
      ) : (
        <div className="min-h-30 flex items-center justify-center px-5">
          <p className="font-bold text-gray-500">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
