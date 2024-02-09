export default function DishDescrip(props) {
  return (
    <div className="dish__info">
      <p className="dish-price js-dish-price">{props.dishPrice}</p>
      <h2 className="js-dish-name">{props.dishName}</h2>
      <p className="js-dish-description">
        {props.dishDescription}
      </p>
      <button className="js-dish-btn" aria-label={props.dishButtonLabel}>Order Now</button>
    </div>
  );
}
