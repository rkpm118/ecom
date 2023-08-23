import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filtercontext";

function Sort() {
  let active = {
    backgroundColor: "black",
    color: "white",
  };

  let { grid_view, setListView, setGridView, filter_products, sorting } =
    useFilterContext();
  return (
    <div className="row justify-content-between m-4">
      <div className="col ">
        <button style={grid_view ? active : null} onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button
          className="ms-3"
          style={!grid_view ? active : null}
          onClick={setListView}
        >
          {" "}
          <BsList />
        </button>
      </div>
      <div className="col">
        <p>
          <b>{filter_products.length}</b> Products Available
        </p>
      </div>
      <div className="col">
        <select onClick={sorting} id="sort">
          <option value="lowest">Price(lowest)</option>
          <option value="#" disabled></option>
          <option value="highest">Price(highest)</option>
          <option value="#" disabled></option>
          <option value="A-Z">Price(A-Z)</option>
          <option value="#" disabled></option>
          <option value="Z-A">Price(Z-A)</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
