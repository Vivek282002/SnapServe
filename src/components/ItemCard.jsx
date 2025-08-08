import { useCart } from "../context/CartContext";

export default function ItemCard({ title, rating, price, time, image, buttonText, itemType }) {
  const { addToCart } = useCart();

  function handleAddClick() {
    addToCart({ title, price, image, type: itemType || 'unknown' });
  }

  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top img-fluid" style={{ height: '180px', objectFit: 'cover' }} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {rating && <p className="card-text">⭐ {rating} • {time} mins</p>}
        {!rating && time && <p className="card-text">ETA: {time} mins</p>}
        <p className="card-text fw-bold">₹{price}</p>
        <button className="btn btn-sm btn-primary" onClick={handleAddClick}>{buttonText}</button>
      </div>
    </div>
  );
}
