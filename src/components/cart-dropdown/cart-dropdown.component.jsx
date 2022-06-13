import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItem,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component.jsx";
import CardItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => navigate("/checkout");
  return (
    <CartDropDownContainer>
      {cartItems.length ? (
        <CartItem>
          {cartItems.map((item) => (
            <CardItem cartItem={item} key={item.id} />
          ))}
        </CartItem>
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
