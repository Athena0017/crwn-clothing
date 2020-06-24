import React from "react";

import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const checkOut = ({ cartItrems, cartTotal }) => {
  return (
    <div className="checkout-page">
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
          {cartItrems.map((cartItem) => <CheckOutItem key={cartItem.id} cartItems={cartItem}/>)}
      <span className="total">TOTAL : ${cartTotal}</span>
      <div className='credit-card-info'>
        <span>*Please use the following test credit card for payments*</span>
        <span>4242 4242 4242 4242 -Exp:01/21-CVV:123</span>
      </div>
        <StripeCheckoutButton price={cartTotal}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItrems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(checkOut);
