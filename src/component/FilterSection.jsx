
import { useFilterContext } from "../context/filtercontext";
import "./FilterSection.css";

function FilterSection() {
  let {
    filter: { text, category },
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
  let companyDataArray = getValueArray(all_products, 'company')
  console.log(companyDataArray)
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
          return <option key={i} value={data}>{data}</option>
        })}

      </select>
    </>
  );
}

export default FilterSection;
