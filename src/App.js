import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
//Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
      <Routes>
        <Route path ='/products/:id' element = {<ProductDetails/>} />
        <Route path ='/products' element = {<Store/>} />
        <Route path = '/*' element = {<Navigate to = '/products'/>} />
      </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
