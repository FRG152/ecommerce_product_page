import IconCart from "../../public/images/icon-cart.svg";
import IconMenu from "../../public/images/icon-menu.svg";
import IconClose from "../../public/images/icon-close.svg";
import ImageAvatar from "../../public/images/image-avatar.png";
import { useState } from "react";
import { navOptions } from "../constants";
import Cart from "./Cart";

interface Props {
  show?: boolean;
  handleShow: () => void;
}

const NavLeftContent = ({ show, handleShow }: Props) => {
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-4">
        <img
          src={IconMenu}
          alt="icon menu"
          onClick={handleShow}
          className="h-[18px] md:hidden"
        />
        <h1 className="nav-logo">sneakers</h1>
      </div>
      <NavOptions show={show} handleShow={handleShow} />
    </div>
  );
};

const NavRigthContent = () => {
  return (
    <div className="flex items-center gap-4">
      <img src={IconCart} alt="icon cart" />
      <img height={35} width={35} src={ImageAvatar} alt="avatar" />
    </div>
  );
};

const NavOptions = ({ show, handleShow }: Props) => {
  const showContent = show
    ? "left-0 md:inset-auto"
    : "-left-1000 md:inset-auto";

  return (
    <ul className={`nav-options ${showContent}`}>
      <img
        src={IconClose}
        alt="icon close"
        onClick={() => handleShow()}
        className="mb-10 md:hidden"
      />
      {navOptions.map((option) => (
        <li className="nav-option">{option}</li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <nav className="navbar">
      <NavLeftContent show={show} handleShow={handleShow} />
      <NavRigthContent />
      <Cart />
    </nav>
  );
};

export default Navbar;
