import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContextProvider'
import "../Css/Bag.css";
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
function Bag() {
 

  const { bag, setBag,HandleChange,handlePrice,price } = useContext(CartContext)


  const handleRemove = (id) => {
    const arr = bag.filter((item) => item.id !== id);
    setBag(arr);
    handlePrice()

  };
  


  useEffect(() => {
    handlePrice();
    
  },);

  return (
    <article>
      {bag.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
          <div className='Price_button'>
            <button
              name="plus" onClick={() => HandleChange(item,1)
              }>+</button>
            <button>{item.amount}</button>
            <button
              name="minus"
              disabled={item.amount == 1} onClick={() => HandleChange(item,-1)}>-</button>
          </div>
          <div>
            <span>₹{item.offerPrice*item.amount}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs: {price}/-</span>
      </div>
      {bag.length != 0 ? <Link to="/checkout"><button className='checkout'>Proceed to Checkout</button></Link> : <Heading color={'pink.900'}>Cart is Empty</Heading>}

    </article>
  )
}

export default Bag