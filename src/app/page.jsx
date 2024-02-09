"use client";
import { useEffect } from "react";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import DishDescrip from "./components/DishDescrip";
import Spinner from "./components/Spinner";

export default function Home() {
  const [price, setwPrice] = useState([]);
  const [name, setName] = useState([]);
  const [description, setdescription] = useState([]);
  const [orderNow, setorderNow] = useState([]);
  const dishList = [
    {
      image: "/img/e9df498957f2d3c23586a9edad79c926-fotor-2024020713573.png",
      price: "$32",
      name: "Green Goddess Chicken Salad",
      description:
        "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. ",
    },
    {
      image: "/img/dish_2.webp",
      price: "$35",
      name: "Asian Cucumber Salad",
      description:
        "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
    },
    {
      image: "/img/f08e4621060884a4a5a8e93244577851.png",
      price: "$32",
      name: "Green Goddess Chicken Saladd",
      description:
        "It is a non-vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
    },
  ];
  const [activeDish, setActiveDish] = useState(dishList[0]);

  useEffect(() => {
    if (document) {
      const priceCap = document.querySelector(".js-dish-price");
      setwPrice(priceCap);

      const nameCap = document.querySelector(".js-dish-name");
      setName(nameCap);

      const descriptionCap = document.querySelector(".js-dish-description");
      setdescription(descriptionCap);

      const orderNowCap = document.querySelector(".js-dish-btn");
      setorderNow(orderNowCap);
    }
  }, []);

  return (
    <main>
      <div className="container">
        <Navbar />
        <div className="content">
          <DishDescrip
            dishPrice={activeDish.price}
            dishName={activeDish.name}
            dishDescription={activeDish.description}
            dishButtonLabel="Order Now"
          />
          <Spinner
            price={price}
            name={name}
            description={description}
            orderNow={orderNow}
            activeDish={activeDish}
            dishList={dishList}
          />
        </div>
      </div>
    </main>
  );
}
