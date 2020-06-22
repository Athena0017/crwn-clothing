import React from 'react'
import {connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import CartItemComponent from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

import {withRouter } from  'react-router-dom'

import './cart-dropdown.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({
        cartItems,
        history,
        toggleCartHidden
    }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?(cartItems.map(cartItem =>  
                    <CartItemComponent key={cartItem.id} item={cartItem} />
                )) :<span className='empty-cart'>Your cart is empty</span>
                    
            } 
        </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleCartHidden();
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));