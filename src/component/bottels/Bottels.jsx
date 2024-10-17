import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
const Bottels = () => {

    const [bottles,setBottles] = useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    return (
        <div>
            <h2>Total Bottels : {bottles.length}</h2>
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} ></Bottle>)
            }
        </div>
    );
};

export default Bottels;