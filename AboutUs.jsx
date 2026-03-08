
import Header from "../components/Header";
import "../styles/About.css";

function AboutUs() {
  return (
    <>
      <Header />

      <div className="about-container">
        <h1>🌿 About Paradise Nursery</h1>

        <p>
          Paradise Nursery is your trusted destination for beautiful and healthy
          houseplants. We believe that plants bring life, freshness, and peace
          into every home.
        </p>

        <p>
          Our mission is to provide high-quality indoor and outdoor plants at
          affordable prices. Whether you are a beginner or a plant lover, we
          have the perfect green companion for you.
        </p>

        <p>
          At Paradise Nursery, customer satisfaction and plant care are our
          top priorities. We carefully select and nurture every plant to ensure
          it reaches you in the best condition.
        </p>

        <h3>🌱 Why Choose Us?</h3>
        <ul>
          <li>Wide variety of indoor and outdoor plants</li>
          <li>Affordable prices</li>
          <li>Healthy and well-maintained plants</li>
          <li>Easy online ordering</li>
        </ul>
      </div>
    </>
  );
}

export default AboutUs;
