import { NavLink } from "react-router-dom";
 
import { BsCart} from "react-icons/bs"
import Button from "./CommonTemplate/Button";
function Navbar()
{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav  flex-grow-1 justify-content-end  align-items-center">
        <NavLink className="nav-link active" aria-current="page" href="#">HOME</NavLink>
        <NavLink className="nav-link" to="/">ABOUT</NavLink>
        <NavLink className="nav-link" to="/">PRODUCTS</NavLink>
        <NavLink className="nav-link" to="/">CONTACT</NavLink>
        <NavLink className="nav-link" to="/"><Button btnName="LOG IN"/></NavLink>
        <NavLink className="position-relative me-2"><BsCart  style={{fontSize:"25px"}} />   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span></NavLink>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;