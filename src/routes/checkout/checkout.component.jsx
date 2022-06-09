import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkouk-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
      })}
      <span className="total">Total: ${totalAmount}</span>
    </div>
  );
};

export default Checkout;
