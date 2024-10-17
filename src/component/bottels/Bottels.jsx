import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './bottles.css'
import { addToLS } from "../../utilityes/LocalStorage";
const Bottels = () => {

    const [bottles,setBottles] = useState([]);
    const [cart,setcart]=useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    //  ADD to cart
    const handelCart=(bottle)=>{
      const newCart = [...cart,bottle];
      setcart(newCart);
      addToLS(bottle.id)
    }
    return (
      <div>
        <h2>Total Bottels : {bottles.length}</h2>
        <h2>Your Cart : {cart.length}</h2>
        <div className="container">
          {bottles.map((bottle) => (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handelCart={handelCart}
            ></Bottle>
          ))}
        </div>
      </div>
    );
};

export default Bottels;