import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import { clearItem } from "../../redux/cart/cart.actions";

const CheckOutItem = ({ cartItems, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span>&#10096;</span>
        <span className="quantity">{quantity}</span>
        <span>&#10097;</span>
      </div>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItems)}>
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
