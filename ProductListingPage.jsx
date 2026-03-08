import plants from "../data/plantsData";
import Header from "../components/Header";
import CategorySection from "../components/CategorySection";
import "../styles/Product.css";

function ProductListingPage() {
  const indoor = plants.filter((p) => p.category === "Indoor");
  const succulent = plants.filter((p) => p.category === "Succulent");
  const outdoor = plants.filter((p) => p.category === "Outdoor");

  return (
    <>
      <Header />
      <div className="container">
        <CategorySection title="Indoor Plants" plants={indoor} />
        <CategorySection title="Succulents" plants={succulent} />
        <CategorySection title="Outdoor Plants" plants={outdoor} />
      </div>
    </>
  );
}

export default ProductListingPage;