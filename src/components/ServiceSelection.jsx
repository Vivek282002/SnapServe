import { useNavigate } from "react-router-dom"; 
import ServiceCard from './ServiceCard';
import { FaPizzaSlice, FaShoppingBasket, FaTaxi } from 'react-icons/fa';

export default function ServiceSelection() {
    const navigate = useNavigate();

    function handleFoodClick(){
        navigate("/food");
    }

    function handleGroceryClick(){
        navigate("/grocery");
    }

    function handleRideClick(){
        navigate("/ride");
    }
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What do you need today?</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <ServiceCard icon={<FaPizzaSlice />} title="Food Delivery" buttonText="Order Now" onClick={handleFoodClick} />
        </div>
        <div className="col-md-4">
          <ServiceCard icon={<FaShoppingBasket />} title="Grocery Delivery" buttonText="Shop Now" onClick={handleGroceryClick} />
        </div>
        <div className="col-md-4">
          <ServiceCard icon={<FaTaxi />} title="Book a Ride" buttonText="Book Now" onClick={handleRideClick} />
        </div>
      </div>
    </div>
  );
  }
