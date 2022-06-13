import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {CheckoutItemContainer, ImageContainer, BaseSpan, Quantity,
Arrow, Value, RemoveButton} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItemHandler = () => removeItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemFromCartHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan className="name">{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={clearItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan className="price">{price}</BaseSpan>
      <RemoveButton onClick={removeItemFromCartHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
