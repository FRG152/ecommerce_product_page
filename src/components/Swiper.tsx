import { useState } from "react";
import { products, selectProducts } from "../constants";

import IconNext from "../assets/images/icon-next.svg";
import IconPrevious from "../assets/images/icon-previous.svg";

const ImagesSelect = ({ styles }: { styles?: string }) => (
  <div className={`w-full flex items-center justify-between ${styles}`}>
    {selectProducts.map((img) => (
      <img
        src={img}
        width={100}
        height={100}
        className="swiper_select_images"
      />
    ))}
  </div>
);

const Swiper = () => {
  const [position, setPosition] = useState(0);

  const handleNext = () => {
    if (position < 2) {
      setPosition(position + 1);
    }
  };

  const handlePrev = () => {
    if (position != 0) {
      setPosition(position - 1);
    }
  };

  return (
    <div className="relative md:px-5">
      <div className="swiper_content_btn_prev">
        <button onClick={() => handlePrev()} className="swiper_btn_prev">
          <img height={12} width={12} src={IconPrevious} alt="icon previous" />
        </button>
      </div>
      <div className="flex flex-col gap-5 md:w-[500px]">
        <img src={products[position]} alt="product" className="md:rounded-md" />
        <ImagesSelect styles="hidden md:flex" />
      </div>
      <div className="swiper_content_btn_next">
        <button onClick={() => handleNext()} className="swiper_btn_next">
          <img height={12} width={12} src={IconNext} alt="icon next" />
        </button>
      </div>
    </div>
  );
};

export default Swiper;
