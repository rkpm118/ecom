import { useFilterContext } from "../context/filtercontext";
import "./FilterSection.css";
import './AddToCart'

function FilterSection() {
  let {
    filter: { text, category ,color},
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
  let companyDataArray = getValueArray(all_products, "company");
  let colorDataArray = getValueArray(all_products, "colors").flat();
  let uniqueColorDataArray = [...new Set(colorDataArray)];
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
      <nav className="nav flex-column">
        {categoryDataArray.map((data, i) => {
          return (
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                color: "black",
                width: "30px",
              }}
              key={i}
              name="category"
              value={data}
              onClick={updateHandler}
            >
              {data}
            </button>
          );
        })}
      </nav>
      <br />
      <h4>company</h4>
      <select onClick={updateHandler} name="company">
        {companyDataArray.map((data, i) => {
          return (
            <option key={i} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <br />
      <br/>
      <h4>colors</h4>
      {
          uniqueColorDataArray.map((data,i)=>{
            return   <button
            style={{ backgroundColor: data, opacity: 0.5 }}
            className={
              color === data ? "add_cart_btn btn_active" : "add_cart_btn"
            }
            key={i}
          >{data}</button>
          })
      }
      
    </>
  );
}

export default FilterSection;
