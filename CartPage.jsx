import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../features/cart/cartSlice";
import Header from "../components/Header";
import "../styles/Cart.css";
import { Link } from "react-router-dom";

function CartPage() {
  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2>Total Items: {totalQuantity}</h2>
        <h3>Total Price: ₹{totalPrice}</h3>

        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} width="100" />
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>
              <button onClick={() => dispatch(removeItem(item.id))}>
                Delete
              </button>
            </div>
          </div>
        ))}

        <button onClick={() => alert("Coming Soon")}>
          Checkout
        </button>

        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </>
  );
}

export default CartPage;