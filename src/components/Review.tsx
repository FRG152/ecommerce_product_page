import IconNext from "../assets/images/icon-next.svg";
import IconPrev from "../assets/images/icon-previous.svg";

import ImageSelect from "./ImageSelect";
import ArrowButton from "./ArrowButton";
import ImageProduct from "../assets/images/image-product-1.jpg";

const Review = () => {
  return (
    <div className="contianer_review">
      <div className="w-[500px] z-20">
        <div className="flex flex-col gap-5">
          <div className="relative">
            <ArrowButton
              icon={
                <img
                  height={12}
                  width={12}
                  src={IconPrev}
                  alt="icon previous"
                />
              }
              styles="-left-4"
              eventFunction={() => {}}
            />
            <img src={ImageProduct} alt="product" className="rounded-lg" />
            <ArrowButton
              icon={
                <img
                  height={12}
                  width={12}
                  src={IconNext}
                  alt="icon previous"
                />
              }
              styles="-right-4"
              eventFunction={() => {}}
            />
          </div>
          <ImageSelect />
        </div>
      </div>
    </div>
  );
};

export default Review;
