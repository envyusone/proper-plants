export default function CartItem({ item, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <span>{item.image} {item.name}</span>
        <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
      </div>
      
      <span className="quantity-display">{item.quantity}</span>
      
      <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
    </div>
  );
}