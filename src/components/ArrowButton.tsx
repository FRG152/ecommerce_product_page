interface Props {
  icon: React.ReactElement;
  styles?: string;
  eventFunction: () => void;
}

const ArrowButton = ({ icon, styles, eventFunction }: Props) => {
  return (
    <div className={`container_arrow ${styles}`}>
      <button onClick={() => eventFunction()} className="arrow_btn">
        {icon && icon}
      </button>
    </div>
  );
};

export default ArrowButton;
