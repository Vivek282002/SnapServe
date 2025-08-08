import { useState } from 'react';
import ItemCard from '../components/ItemCard';
import miniCarImg from "../assets/miniCar.png";
import sedanImg from "../assets/sedan.png";
import suvImg from "../assets/suv.png";

export default function Ride() {
  const [showRides, setShowRides] = useState(false);

  const rides = [
    {
      title: "Mini",
      price: 120,
      time: "15",
      image: miniCarImg,
    },
    {
      title: "Sedan",
      price: 180,
      time: "12",
      image: sedanImg,
    },
    {
      title: "SUV",
      price: 250,
      time: "10",
      image: suvImg,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">Book Your Ride</h2>

      <div className="mb-3">
        <input type="text" className="form-control mb-2" placeholder="Pickup Location" />
        <input type="text" className="form-control mb-3" placeholder="Drop Location" />
        <button className="btn btn-primary" onClick={() => setShowRides(true)}>Search Rides</button>
      </div>

      {showRides && (
        <div className="row g-4 mt-3">
          {rides.map((ride, idx) => (
            <div className="col-md-4" key={idx}>
              <ItemCard
                title={ride.title}
                price={ride.price}
                time={ride.time}
                image={ride.image}
                buttonText="Book Ride"
                itemType="ride"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
