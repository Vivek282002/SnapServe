import { useState } from "react";
import ItemCard from "../components/ItemCard";
import FoodFilters from "../components/FoodFilters";
import pizzahutImg from "../assets/pizzaHut.jpg";
import dominosImg from "../assets/dominos.jpg";
import biryaniImg from "../assets/biryani.jpg";
import burgerImg from "../assets/burger.jpg";
import rollImg from "../assets/roll.jpg";

export default function Food() {
  // Filter states
  const [filters, setFilters] = useState({ cuisine: "All", rating: "All" });

  // Food data
  const foods = [
    { title: "Pizza Hut Pizza", cuisine: "Italian", rating: 4.2, time: 30, price: 200, image: pizzahutImg },
    { title: "Domino’s Pizza", cuisine: "Italian", rating: 4.0, time: 25, price: 180, image: dominosImg },
    { title: "Thalairaj Biryani", cuisine: "Indian", rating: 3.6, time: 22, price: 220, image: biryaniImg },
    { title: "Burger", cuisine: "American", rating: 4.6, time: 17, price: 120, image: burgerImg },
    { title: "Kathi Roll", cuisine: "Indian", rating: 2.6, time: 55, price: 280, image: rollImg },
  ];

  // Apply filters
  const filteredFoods = foods.filter((food) => {
    const matchesCuisine = filters.cuisine === "All" || food.cuisine === filters.cuisine;
    const matchesRating =
      filters.rating === "All" ||
      (filters.rating === "4+" && food.rating >= 4) ||
      (filters.rating === "3+" && food.rating >= 3);
    return matchesCuisine && matchesRating;
  });

  return (
    <div className="container my-5">
      <h2 className="mb-4">Order Food</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <FoodFilters filters={filters} setFilters={setFilters} />
        </div>
        <div className="col-md-9">
          <div className="row g-4">
            {filteredFoods.map((food, idx) => (
              <div className={ filteredFoods.length === 1 ? "col-12 col-sm-8 col-md-8 col-lg-8 d-flex justify-content-center " : "col-md-6 col-lg-4"} key={idx}>
                <ItemCard
                  title={food.title}
                  rating={food.rating}
                  time={food.time}
                  price={food.price}
                  image={food.image}
                  buttonText="Add to Cart"
                  itemType="food"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

