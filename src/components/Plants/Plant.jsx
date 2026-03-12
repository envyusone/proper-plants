export default function Plant({ plant, onAddToCart }) {
  return (
    <div className="plant-card">
      <span style={{ fontSize: '4rem' }}>{plant.image}</span>
      <h3>{plant.name}</h3>
      <button onClick={() => onAddToCart(plant)}>Add to cart</button>
    </div>
  );
}
