import { useState } from "react";
import { apiCalls, getLocalStorageCart } from "../../utils/api-calls";
import "./cart-details.css";

function CartDetails(props) {
  const [bestOffer, setBestOffer] = useState(0);
  getLocalStorageCart(null, props);
  const cart = JSON.parse(localStorage.getItem("cart") || {});

  //meilleur promo
  getBestOffer(cart).then((res) => {
    console.log(res);
    setBestOffer(res);
  });

  const getTotal = () => {
    let s = 0;
    for (let item of cart) {
      s += item.price;
    }
    console.log(s);
    return s;
  };

  return (
    <div className="cart-details-body">
      <h1>récapitule le panier</h1>
      <div className="cart-details">
        {cart.map((item) => (
          <div className="book-desc">
            <div>{item.title}</div>
            <div>{item.price} €</div>
          </div>
        ))}
        <div className="card-footer">
          <h2> TOTAL</h2>
          <div className="promo">Promotion:- {bestOffer} €</div>
          <div className="old-total"> {getTotal()} €</div>
          <div className="new-total">{getTotal() - bestOffer} €</div>
        </div>
      </div>
    </div>
  );
}

async function getBestOffer(cart) {
  let bestOffer;
  const pathname = () => {
    let params = "";
    if (cart) {
      console.log(cart);
      cart.forEach((element) => {
        params = element.id + "," + params;
      });
    }
    return params.substring(0, params.length - 1);
  };
  // commercial Offers api call
  const response = await apiCalls("/books/" + pathname() + "/commercialOffers");

  return new Promise((resolve, rejecte) => {
    if (response && response.offers && response.offers.length > 0) {
      resolve(
        Math.max.apply(
          Math,
          response.offers.map((o) => o.value)
        )
      );
    } else rejecte("ERR");
  });
}

export default CartDetails;
