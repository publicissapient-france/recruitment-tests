import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import BooksShelf from "./components/books-shelf/books-shelf";
import { useState } from "react";
import CartDetails from "./components/cart-details/cart-details";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedBook, setSelectedBook] = useState("");

  const cartItemHandler = (selectedbookTitle, cartItems) => {
    if (selectedbookTitle != undefined) {
      setShowNotification(true);
      setSelectedBook(selectedbookTitle);

      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
    setCartCount(cartItems.length);
  };

  const cart = JSON.parse(localStorage.getItem("cart") || {});

  const pathname = window.location.pathname;

  return (
    <div className="App">
      <div className={showNotification ? "notification show" : "notification "}>
        Le livre {selectedBook} a été bien ajouté dans votre panier
      </div>
      <header className="App-header">
        <div> La bibliothèque d'Henri Potier</div>

        <div className="cart">
          <a href="/cart-details">Mon panier</a>
          <div className="cart-count">{cartCount}</div>
        </div>
      </header>
      <div className="book-shop">
        <div className="breadcrumbs">
          <a href="/">Bibliothèque</a>
          <span> / </span>
          <a
            className={pathname !== "/" ? "item active" : "item"}
            href="/cart-details"
          >
            Mon Panier
          </a>
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/cart-details"
              element={<CartDetails cartItemsInput={cartItemHandler} />}
            />
            <Route
              path="/"
              element={<BooksShelf cartItemsInput={cartItemHandler} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
