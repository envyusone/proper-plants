import React, { useState } from 'react';
import plantsData from './data'; 
import PlantList from './components/Plants/PlantList';
import Cart from './components/Cart/Cart';

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (plant) => {
    const existingItem = cart.find(item => item.id === plant.id);
    
    if (existingItem) {

      setCart(cart.map(item => 
        item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

 const updateQuantity = (id, change) => {
  setCart(prevCart => {
    const updated = prevCart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + change } : item
    );
    return updated.filter(item => item.quantity > 0);
  });
};

  return (
    <div className="app-container">
      <header>
        <h1>Proper Plants</h1>
        <p>Your local nursery for all things green.</p>
      </header>
      
      <main>
        <PlantList plants={plantsData} onAddToCart={addToCart} />
        
        <aside>
          <Cart 
            items={cart} 
            onRemove={removeFromCart} 
            onUpdateQuantity={updateQuantity} 
          />
        </aside>
      </main>
    </div>
  );
}
