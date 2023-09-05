import React from "react";
import { useCart } from "../context/cartContext";
import { AiOutlineDelete } from 'react-icons/ai'
import CartList from "./CartList";

function Cart() {
  let { cart } = useCart();
  console.log('hii i am cart component', cart)
  return (
    <div className="container mt-3 ">
      <div className="row d-flex justify-content-center">
        {/* //col */}
        <div className="col-2">
          <p>ITEM</p>
        </div>
        {/* //col */}
        <div className="col-2">

          <p>PRICE</p>
        </div>
        {/* //col */}
        <div className="col-2">

          <p>QUANTITY</p>
        </div>
        {/* //col */}
        <div className="col-2">

          <p>SUBTOTAL</p>
        </div>
        {/* //col */}
        <div className="col-2">

          <p>REMOVE</p>
        </div>
        <hr />
      </div>
      {cart.length === 0 && <h1>no data in cart</h1>}
      {cart.map((data) => {
        return <CartList   {...data} />
      })}

    </div>
  );
}

export default Cart;
