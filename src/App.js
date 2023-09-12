import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Articles from "./components/Articles/Articles";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCardHandler = () => {
    setCartShown(true);
  }
  const hideCardHandler = () => {
    setCartShown(false);
  }
  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardHandler}/>
      <main>
        <Articles />
      </main>
    </CartProvider>
  );
}

export default App;
