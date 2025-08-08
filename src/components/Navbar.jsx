import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from "../context/CartContext";


export default function Navbar() {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">SnapServe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/food">Food</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/grocery">Grocery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ride">Ride</Link></li>
          </ul>
          <div className="d-flex position-relative">
          <Link to="/cart" className="btn btn-outline-dark position-relative">
          <FaShoppingCart size={20} />
          {totalItems > 0 && (
          <span
           className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.65rem" }}
           > {totalItems} </span> 
           )}
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
