import React from 'react'
import { createContext, useState } from 'react'
import { useToast } from "@chakra-ui/react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [bag, setBag] = useState([])
  const [price, setPrice] = useState(0);
  const [user, setUser] = useState({});
  const [ auth, setAuth]=useState(false)
  const toast = useToast();
 
  
  console.log(auth)

  // console.log("Context", user)
  const handlePrice = () => {
    let ans = 0;
    bag.map((item) => (ans += +item.offerPrice * +item.amount));
    setPrice(ans);
  };
  const HandleAddToBag = (item) => {
    // bag.push(item)
    // console.log(bag)
    if (bag.indexOf(item) !== -1){
      toast({
        title: "Already Added",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    } else{
      toast({
        title: "Added To Bag",
        description: "",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setBag([...bag, item])
    }
   
    

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
    <CartContext.Provider value={{ HandleAddToBag, bag, setBag ,HandleChange,handlePrice,price,user,setUser,auth,setAuth}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider