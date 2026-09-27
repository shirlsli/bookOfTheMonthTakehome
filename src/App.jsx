import { useState } from 'react';
import { CheckoutPage } from './components/checkoutPage';
import { PostCheckoutComponent } from './components/postCheckoutComponent';
import userInfo from './json/userInfo.json';
import book1Data from './json/book1.json';
import book2Data from './json/book2.json';
import book3Data from './json/book3.json';
import { placeOrder } from './utils/placeOrder';

const book1 = {
  id: Number(book1Data.id),
  title: book1Data.title,
  author: book1Data.author,
  coverImgPath: book1Data.coverImgPath,
  price: Number(book1Data.price)
}

const book2 = {
  id: Number(book2Data.id),
  title: book2Data.title,
  author: book2Data.author,
  coverImgPath: book2Data.coverImgPath,
  price: Number(book2Data.price)
}

const book3 = {
  id: Number(book3Data.id),
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
  const [visibleComponent, switchComponent] = useState(null);

  const handlePlaceOrder = async (cart) => {
    const response = await placeOrder(cart);
    switchComponent(response);
  }

  return (
    <>
      {visibleComponent === null ? 
      <CheckoutPage cart={cart} placeOrder={handlePlaceOrder} /> : <PostCheckoutComponent response={visibleComponent} onBack={()=> switchComponent(null)} />}
    </>
  )
}

export default App
