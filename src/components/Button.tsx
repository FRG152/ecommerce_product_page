interface Props {
  text: string;
  icon?: React.ReactElement;
  styles?: string;
}

const Button = ({ icon, text }: Props) => {
  return (
    <button className="container_button">
      {icon && icon}
      {text && <p className="font-bold text-black">Add to cart</p>}
    </button>
  );
};

export default Button;
