
export function apiCalls(params) {
  const API_URL = "https://henri-potier.techx.fr" + params;
  return fetch(API_URL)
    .then((res) => res.json())
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
}

export function getLocalStorageCart(book, props) {
  // localStorage.clear()
  let selectedbookTitle;
  // read local stroage
  let cart = JSON.parse(localStorage.getItem("cart") || "[]") || [];
  if (book) {
    const isExistBook = cart.find((item) => item.id === book.isbn);
    if (isExistBook === undefined) {
      cart.push({ id: book.isbn, title: book.title, price: book.price });
      selectedbookTitle = book.title;
    }
  }

  // update local storage
  localStorage.removeItem("cart");
  localStorage.setItem("cart", JSON.stringify(cart));

  // update cart count

  props.cartItemsInput(selectedbookTitle, cart);
}
