import { useState } from 'react';
import { CheckoutPage } from './components/checkoutPage';
import userInfo from './json/userInfo.json';
import book1Data from './json/book1.json';
import book2Data from './json/book2.json';
import book3Data from './json/book3.json';
import { placeOrder } from './utils/placeOrder';

const book1 = {
  title: book1Data.title,
  author: book1Data.author,
  coverImgPath: book1Data.coverImgPath,
  price: Number(book1Data.price)
}

const book2 = {
  title: book2Data.title,
  author: book2Data.author,
  coverImgPath: book2Data.coverImgPath,
  price: Number(book2Data.price)
}

const book3 = {
  title: book3Data.title,
  author: book3Data.author,
  coverImgPath: book3Data.coverImgPath,
  price: Number(book3Data.price)
}

function App() {
  const [cart, setCart] = useState({
    user: userInfo,
    books: [book1, book2, book3],
    total: book1.price
  });

  return (
    <>
      <CheckoutPage cart={cart} placeOrder={placeOrder} />
    </>
  )
}

export default App
