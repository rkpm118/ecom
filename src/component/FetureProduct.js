import React from "react";
import { useProductData } from "../context/product";
import Products from "./Products";

function FetureProduct() {
  let {loading,fetured_Data} = useProductData();
  
  if (loading) {
    return <h1>loading......</h1>;
  }
  return (
    <>
      <div className="container-fluid bg-light p-5" >
      <p className="text-primary">CHECK NOW</p>
          <h4>Our Feature Services</h4>
        <div className="row">
             { fetured_Data? fetured_Data.map((data)=>{
                return  <Products product={data} key={data.id}/>
              }):null}
        </div>
      </div>
    </>
  );
}

export default FetureProduct;
