import PlantCard from "./PlantCard";

function CategorySection({ title, plants }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="plant-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;