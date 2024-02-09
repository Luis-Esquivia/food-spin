export default function Navbar() {
  return (
    <nav>
      <div className="nav__logo">
        <a href="#" className="nav__icon" aria-label="Go to home page">
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="FoodSpin logo"
          >
            <path
              d="M6 8C6 6.34315 3 0.5 3 0.5C3 0.5 0 6.34315 0 8C0 9.65685 1.34315 11 3 11C4.65685 11 6 9.65685 6 8Z"
              fill="white"
            />
          </svg>
        </a>
        <h1 className="nav__title">FoodSpin</h1>
      </div>
      <ul className="nav__links">
        <li className="nav__link">
          <a href="#" aria-label="Go to see Breakfast">
            Breakfast
          </a>
        </li>
        <li className="nav__link">
          <a href="#" aria-label="Go to see Lunch">
            Lunch
          </a>
        </li>
        <li className="nav__link">
          <a href="#" aria-label="Go to see Dinner">
            Dinner
          </a>
        </li>
      </ul>
      <div className="nav__shopper">
        <a href="#" aria-label="See shopper">
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7V5C4 3.67392 4.52678 2.40215 5.46447 1.46447C6.40215 0.526784 7.67392 0 9 0C10.3261 0 11.5979 0.526784 12.5355 1.46447C13.4732 2.40215 14 3.67392 14 5V7H17C17.2652 7 17.5196 7.10536 17.7071 7.29289C17.8946 7.48043 18 7.73478 18 8V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H1C0.734784 21 0.48043 20.8946 0.292893 20.7071C0.105357 20.5196 0 20.2652 0 20V8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H4ZM4 9H2V19H16V9H14V11H12V9H6V11H4V9ZM6 7H12V5C12 4.20435 11.6839 3.44129 11.1213 2.87868C10.5587 2.31607 9.79565 2 9 2C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5V7Z"
              fill="#090909"
            />
          </svg>
        </a>
        <span className="nav__shopper__badge"></span>
      </div>
    </nav>
  );
}
