import React from "react";
import { useFilterContext } from "../context/filtercontext";
import { NavLink } from "react-router-dom";

function FilterSection() {
  let {
    filter: { text },
    updateHandler,
    all_products,
  } = useFilterContext();
  let getValueArray = (data, property) => {
    let newData = data.map((item) => {
      return item[property];
    });
    newData = ["All", ...new Set(newData)];
    return newData;
  };
  let categoryDataArray = getValueArray(all_products, "category");
  //let colorsDataArray=getValueArray(all_products,'colors')
  console.log(categoryDataArray);
  function wordHandler(data)
  {
    console.log('fjksdkjfjskl',data)
  }

  return (
    <>
      <input
        type="text"
        name="text"
        value={text}
        onChange={updateHandler}
        placeholder="SEARCH"
      />
      {/* This is for the creating dynamic category */}
      <h4>Category</h4>
      {categoryDataArray.map((data) => {
        return (
          <nav className="nav flex-column">
            <NavLink class="nav-link"  onClick={()=>{
              wordHandler(data)
            }}>
              {data}
            </NavLink>
          </nav>
        );
      })}
    </>
  );
}

export default FilterSection;
