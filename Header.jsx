import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Header.css";

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <h2>🌿 Green Paradise</h2>

      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
}

export default Header;