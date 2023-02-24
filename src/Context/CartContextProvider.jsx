import React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [bag, setBag] = useState([])
  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    bag.map((item) => (ans += +item.offerPrice * +item.amount));
    setPrice(ans);
  };
  const HandleAddToBag = (item) => {
    // bag.push(item)
    console.log(bag)
    if (bag.indexOf(item) !== -1) return;
    setBag([...bag, item])
    

  }
  const HandleChange = (item, d) => {
    const ind = bag.indexOf(item);
    const arr = bag;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount
      = 1;
    setBag([...arr])
  }



  return (
    <CartContext.Provider value={{ HandleAddToBag, bag, setBag ,HandleChange,handlePrice,price}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider