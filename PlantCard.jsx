import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useState } from "react";

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart(plant));
    setDisabled(true);
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} width="150" />
      <h3>{plant.name}</h3>
      <p>₹{plant.price}</p>
      <button onClick={handleAdd} disabled={disabled}>
        {disabled ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default PlantCard;