import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container my-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item, idx) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
                <img src={item.image} alt={item.title} width="60" className="me-3 rounded" />
                <div className="flex-grow-1">
                  <h6>{item.title}</h6>
                   <p className="mb-1">
                    {item.type === 'ride' ? '🚗 Ride Booking' : '🛒 Order'}
                   </p>
                  <p className="mb-0">Qty: {item.quantity}</p>
                </div>
                <span>₹{item.price * item.quantity}</span>
                <button className="btn btn-sm btn-danger ms-3" onClick={() => removeFromCart(item.title)}>Remove</button>
              </li>
            ))}
          </ul>
          <h4>Total: ₹{total}</h4>
          
          <button className="btn btn-success" onClick={clearCart}>Place Order</button>
          
        </>
      )}
    </div>
  );
}

