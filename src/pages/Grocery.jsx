import ItemCard from '../components/ItemCard';

import tomatoImg from "../assets/tomato.jpg";
import milkImg from "../assets/milk.jpg";
import wheatFlourImg from "../assets/wheatFlour.jpg";
import onionImg from "../assets/onion.jpg";
import ladyfingerImg from "../assets/ladyfinger.jpg";
import mangoImg from "../assets/mango.jpg";


export default function Grocery() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Shop Daily Essentials</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <ItemCard
            title="Tomatoes"
            rating="4.5"
            time="Instant"
            price="40"
            image={tomatoImg}
            buttonText="Add to Cart" itemType="food"
          />
        </div>
        <div className="col-md-4">
          <ItemCard
            title="Milk (1L)"
            rating="4.2"
            time="Instant"
            price="50"
            image={milkImg}
            buttonText="Add to Cart" itemType="food"
          />
        </div>
        <div className="col-md-4">
          <ItemCard
            title="Wheat Flour (5kg)"
            rating="4.0"
            time="Instant"
            price="250"
            image={wheatFlourImg}
            buttonText="Add to Cart" itemType="food"
          />
        </div>
        <div className="col-md-4">
          <ItemCard
            title="Onion (1kg)"
            rating="4.0"
            time="Instant"
            price="80"
            image={onionImg}
            buttonText="Add to Cart" itemType="food"
          />
        </div>
        <div className="col-md-4">
          <ItemCard
            title="Lady Finger(500gram)"
            rating="4.6"
            time="Instant"
            price="25"
            image={ladyfingerImg}
            buttonText="Add to Cart" itemType="food"
          />
        </div>
        <div className="col-md-4">
          <ItemCard
            title="Mango (1pc)"
            rating="4.8"
            time="Instant"
            price="50"
            image={mangoImg}
            buttonText="Add to Cart" itemType="food"
          />
        </div>
        </div>
      </div>
    
  );
}

