import React, { useState } from "react";
import "./AddToCart.css";
import { FaCheck } from "react-icons/fa";

function AddToCart({ product }) {
  const { id, colors, stock } = product;
  //for active
  let [color, setColor] = useState(colors[0]);
  return (
    <div>
      <p>
        colors:
        {colors.map((data, i) => {
          return (
            <button
              style={{ backgroundColor: data, margin: "8px", opacity: 0.5 }}
              className={
                color === data ? "add_cart_btn btn_active" : "add_cart_btn"
              }
              key={i}
              onClick={() => {
                setColor(data);
              }}
            >
              {color === data ? <FaCheck className="btn_check" /> : null}
            </button>
          );
        })}
      </p>
    </div>
  );
}

export default AddToCart;
