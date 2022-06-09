import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CardItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => navigate("/checkout");
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CardItem cartItem={item} key={item.id} />
        ))}
      </div>

      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
