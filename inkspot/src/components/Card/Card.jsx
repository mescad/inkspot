
import './Card.css'
import { useState } from "react";

function Card(props) {

const [count,setCount]=useState(0)

function increment(){
    setCount(count=>count+1)
}

function decrement(){
    setCount(count=>count-1)
}


  return (
    <>
      <section className="card" onClick={props.onClick} style={{ cursor: "pointer" }}>
        <h2>{props.name}</h2>
        <img alt="product-img" src={props.imgsrc} />
       
        


        

      </section>
    </>
  );
}

export default Card;
