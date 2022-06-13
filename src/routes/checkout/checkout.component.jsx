import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkouk-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
      })}
      <Total>Total: ${totalAmount}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
