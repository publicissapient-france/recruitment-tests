import "./books-shelf.css";
import Card from "../card/card";
import { apiCalls, getLocalStorageCart } from "../../utils/api-calls";
import { useState } from "react";

function BooksShelf(props) {
  const [books, setBooks] = useState([]);

  (async () => {
    await getBooks().then((data) => {
      if (data && data.length) setBooks(data);
    });
    getLocalStorageCart(null, props);
  })();

  const getBooksHandler = (book) => {
    getLocalStorageCart(book, props);
  };

  return (
    <div className="books-shelf">
      {books.map((item, i) => (
        <Card key={i} selectedBook={getBooksHandler} data={item}></Card>
      ))}
    </div>
  );
}

async function getBooks() {
  const response = await apiCalls("/books");
  return response;
}

export default BooksShelf;
