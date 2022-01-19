import { useState } from "react";
import "./card.css";

function Card(props) {
  const data = props.data;
  const [cart, setCart] = useState([]);
  const [cartItem, setCartItems] = useState(0);

  const onSelectedBookHandler = (book) => {
    props.selectedBook(book);
  };

  const addToCart = (book) => {
    onSelectedBookHandler(book);
  };

  return (
    <div className="card">
      <div className="image">
        <img src={data.cover} />
      </div>
      <div className="title">{data.title}</div>
      <div className="price">{data.price} €</div>
      <div className="price"></div>
      <button onClick={() => addToCart(data)}> Achetez</button>
    </div>
  );
}

export default Card;
