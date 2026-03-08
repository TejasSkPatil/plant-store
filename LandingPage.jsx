import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="landing"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      <div className="overlay">
        <h1>🌿 Green Paradise</h1>
        <p>
          We provide beautiful and healthy houseplants to make your home fresh,
          green, and peaceful.
        </p>
        <button onClick={() => navigate("/products")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;