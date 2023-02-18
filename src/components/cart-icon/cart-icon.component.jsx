import { useContext } from "react";
import { ReactComponent as ShoppinIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/card.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCardOpen = () => {
    console.log(isCartOpen);
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCardOpen}>
      <ShoppinIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
