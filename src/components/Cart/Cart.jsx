import CartItem from './CartItem';

export default function Cart({ items, onUpdateQuantity }) {
  const total = items.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    return acc + (price * item.quantity);
  }, 0);

  return (
    <aside className="cart-container">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onUpdateQuantity={onUpdateQuantity} 
            />
          ))}
          {total > 0 && <h3 style={{ marginTop: '20px' }}>Total: ${total}</h3>}
        </>
      )}
    </aside>
  );
}