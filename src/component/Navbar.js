import { NavLink } from "react-router-dom";
 
import { BsCart} from "react-icons/bs"
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
      <div className="navbar-nav  flex-grow-1 justify-content-end ">
        <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
        <NavLink className="nav-link" to="/">Features</NavLink>
        <NavLink className="nav-link" to="/">Pricing</NavLink>
        <NavLink><BsCart/></NavLink>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;