import Image from "next/image";
import { useEffect, useState } from "react";

export default function Spinner({
  price,
  name,
  description,
  orderNow,
  dishList,
}) {
  const [dishes, setDishes] = useState([]);
  const [shiftRight, setshiftRight] = useState([]);
  const [shiftLeft, setshiftLeft] = useState([]);
  const [container, setcontainer] = useState([]);
  const [wheel, setwheel] = useState([]);

  useEffect(() => {
    const dishesList = document.querySelectorAll(".js-spinner-dish");
    setDishes(dishesList);

    const shiftRightCap = document.querySelector(".js-shift__right");
    setshiftRight(shiftRightCap);

    const shiftLeftCap = document.querySelector(".js-shift__left");
    setshiftLeft(shiftLeftCap);

    const containerCap = document.querySelector(".js-spinner-container");
    setcontainer(containerCap);

    const wheelCap = document.querySelector(".js-spinner-wheel");
    setwheel(wheelCap);
  }, [setDishes]);

  let contentSelector = 0;
  let isOrange = true;
  let newX = 0.0;
  let newY = 0.0;
  let initialSpin = 0.0;
  const addDishesBackground = (dish, i) => {
    const images = [
      "url('/img/e9df498957f2d3c23586a9edad79c926-fotor-2024020713573.png')",
      "url('/img/dish_2.webp')",
      "url('/img/f08e4621060884a4a5a8e93244577851.png')",
    ];
    switch (i) {
      case 0:
      case 3:
      case 6:
        dish.style.backgroundImage = images[1];
        break;
      case 1:
      case 4:
      case 7:
        dish.style.backgroundImage = images[2];
        break;
      case 2:
      case 5:
      case 8:
        dish.style.backgroundImage = images[0];
        break;
    }
  };

  dishes.forEach((dish, i) => {
    const angle = (2 * Math.PI * i) / dishes.length;
    const spinRadius = 250.0;

    newX = Math.cos(angle) * spinRadius;
    newY = -1.0 * Math.sin(angle) * spinRadius;

    dish.style.left = `50%`;
    dish.style.top = `50%`;
    dish.style.transform = `translate(-50%, -50%) translate(${newX}px, ${newY}px)`;

    addDishesBackground(dish, i);
  });

  const shiftRightBtn = () => {
    contentSelector++;
    if (contentSelector === dishes.length) contentSelector = 0;

    spin("right");
    changeContent(contentSelector);
    animateContent();
    changeColors();
  };

  const shiftLeftBtn = () => {
    if (contentSelector !== 0) contentSelector--;
    else {
      contentSelector = dishes.length - 1;
    }
    spin("left");
    animateContent();
    changeContent(contentSelector);
    changeColors();
  };

  const spin = (direction) => {
    const slice = 45 * (direction === "left" ? -1 : 1);
    initialSpin += slice;
    wheel.style.transform = `translate(-50%, -50%) rotate(${initialSpin}deg)`;
  };

  const changeColors = () => {
    if (isOrange == true) {
      container.classList.add("bg--green");
      shiftRight.classList.add("btn--green");
      shiftLeft.classList.add("btn--green");
      price.style.color = "#54bf29";
      orderNow.classList.add("btn--green");
      isOrange = false;
    } else {
      container.classList.remove("bg--green");
      shiftRight.classList.remove("btn--green");
      shiftLeft.classList.remove("btn--green");
      price.style.color = "#ff922c";
      orderNow.classList.remove("btn--green");
      isOrange = true;
    }
  };

  const changeContent = (contentSelector) => {
    selectedDishImg.style.right = "calc(30px + 560px / 2)";
    selectedDishImg.style.top = "calc(100px + 560px / 2)";
    
    switch (contentSelector) {
      case 0:
      case 3:
        price.innerHTML = dishList[0].price;
        name.innerHTML = dishList[0].name;
        description.innerHTML = dishList[0].description;
        selectedDishImg.srcset = dishList[0].image;
        selectedDishImg.alt = dishList[0].name;
        break;
      case 1:
      case 4:
      case 6:
        price.innerHTML = dishList[1].price;
        name.innerHTML = dishList[1].name;
        description.innerHTML = dishList[1].description;
        selectedDishImg.srcset = dishList[1].image;
        selectedDishImg.alt = dishList[1].name;
        break;
      case 2:
      case 5:
      case 7:
      case 8:
        price.innerHTML = dishList[2].price;
        name.innerHTML = dishList[2].name;
        description.innerHTML = dishList[2].description;
        selectedDishImg.srcset = dishList[2].image;
        selectedDishImg.alt = dishList[2].name;
        break;
    }
  };

  function animateContent() {
    let dishAnimate = [
      { transform: "rotate(-45deg)" },
      { transform: "scale(0.5)" },
      { transform: "scale(1)" },
    ];

    let textAnimate = [
      { transform: "scale(1, 1)" },
      { transform: "scale(0.8, 0.8)" },
      { transform: "scale(0.5, 0.5)" },
      { transform: "scale(0.2, 0.5)" },
      { transform: "scale(0, 0)" },
      { transform: "scale(0.2, 0.5)" },
      { transform: "scale(0.5, 0.5)" },
      { transform: "scale(0.8, 0.8)" },
      { transform: "scale(1, 1)" },
    ];

    selectedDishImg.animate(dishAnimate, 300);
    price.animate(textAnimate, 500);
    name.animate(textAnimate, 500);
    description.animate(textAnimate, 500);
    orderNow.animate(textAnimate, 500);
  }

  return (
    <div className="spinner">
      <div className="spinner__container js-spinner-container">
        <div className="spinner__wheel js-spinner-wheel">
          <div className="spinner__dish js-spinner-dish"></div>
          <div className="spinner__dish js-spinner-dish"></div>
          <div className="spinner__dish js-spinner-dish"></div>
          <div className="spinner__dish js-spinner-dish"></div>
          <div className="spinner__dish js-spinner-dish"></div>
          <div className="spinner__dish js-spinner-dish"></div>
          <div className="spinner__dish js-spinner-dish"></div>
          <div className="spinner__dish js-spinner-dish"></div>
        </div>
      </div>
      <img
        className="selected__dish__image"
        name="selectedDishImg"
        src="/img/e9df498957f2d3c23586a9edad79c926-fotor-2024020713573.png"
        alt="Green Goddess Chicken Salad"
        width="300"
      />

      <div className="arrow__buttons">
        <button
          className="js-shift__left"
          onClick={shiftLeftBtn}
          aria-label="Shift Left"
          type="button"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L13 7M7 13L1 7M7 13V1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          className="js-shift__right"
          onClick={shiftRightBtn}
          aria-label="Shift Right"
          type="button"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L13 7M7 13L1 7M7 13V1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
