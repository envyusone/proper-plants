import PlantCard from './Plant';

export default function PlantList({ plants, onAddToCart }) {
  return (
    <section className="plant-list-grid">
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
}
