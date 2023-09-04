import React from "react";
import { useCart } from "../context/cartContext";
import { AiOutlineDelete } from 'react-icons/ai'

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

    </div>
  );
}

export default Cart;
