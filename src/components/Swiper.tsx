import { useState } from "react";
import { products } from "../constants";

import IconNext from "../assets/images/icon-next.svg";
import IconPrev from "../assets/images/icon-previous.svg";

import ImageSelect from "./ImageSelect";
import ArrowButton from "./ArrowButton";

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
      <ArrowButton
        icon={<img height={12} width={12} src={IconPrev} alt="icon previous" />}
        styles="left-2 md:hidden"
        eventFunction={handlePrev}
      />
      <div className="flex flex-col gap-5 md:w-[500px]">
        <img src={products[position]} alt="product" className="md:rounded-md" />
        <ImageSelect styles="hidden md:flex" />
      </div>
      <ArrowButton
        icon={<img height={12} width={12} src={IconNext} alt="icon next" />}
        styles="right-2 md:hidden"
        eventFunction={handleNext}
      />
    </div>
  );
};

export default Swiper;
