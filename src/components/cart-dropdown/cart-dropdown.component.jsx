import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CardItem from '../cart-item/cart-item.component';
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => <CardItem cartItem={item} key={item.id}/>)}
      </div>
      <Link to="checkout">
      <Button>Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
