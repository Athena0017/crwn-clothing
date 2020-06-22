import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import { clearItem, addItem, removeItem } from "../../redux/cart/cart.actions";

const CheckOutItem = ({ cartItems, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
              <div className='increament' onClick={() => removeItem(cartItems)}>&#10096;</div>
        <span className='number'>{quantity}</span>
              <div className='increament' onClick={()=>addItem(cartItems)}>&#10097;</div>
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
    addItem: item => dispatch(addItem(item)),
    removeItem:item=>dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
