import { selectProducts } from "../constants";

const ImageSelect = ({ styles }: { styles?: string }) => (
  <div className={`container_image_select ${styles}`}>
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

export default ImageSelect;
