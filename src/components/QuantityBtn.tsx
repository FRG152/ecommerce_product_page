import IconPlus from "../assets/images/icon-plus.svg";
import IconMinus from "../assets/images/icon-minus.svg";

const QuantityBtn = () => {
  return (
    <div className="container_quantity_btn">
      <button>
        <img width={15} height={15} src={IconMinus} alt="icon minus" />
      </button>
      <p>
        <strong>0</strong>
      </p>
      <button>
        <img width={15} height={15} src={IconPlus} alt="icon plus" />
      </button>
    </div>
  );
};

export default QuantityBtn;
