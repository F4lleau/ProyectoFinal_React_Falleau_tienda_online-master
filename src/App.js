import './App.css';

//components
import Header from './components/Header/Header';
import ResponsiveNavigation from './components/ResponsiveNavigation/ResponsiveNavigation';

//REACT
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {RopaUsadaProvider} from "./context/RopaContext";


//pages
import HomePage from "./pages/Home/HomePage"
import ContactPage from './pages/Conctact/ContactPage';
import AboutPage from './pages/About/AboutPage';
import ProductoDetail from './pages/ProductoDetail/ProductoDetail';
import CategoriaRopa from './pages/CategoriaRopa/CategoriaRopa'
import  {CartContextProvider} from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';




const App = () => {

  return (
    <RopaUsadaProvider>
        <Router>
          <div className="App">
          <CartContextProvider>
            <Header/> 
            <ResponsiveNavigation/>
            <Routes>
            <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/producto-detail/:id" element={<ProductoDetail/>} />
              <Route path="/categoria/:categoria" element={<CategoriaRopa/>} />
              <Route path="/carrito" element={<CartContainer/>} />
            </Routes> 
            </CartContextProvider>  
          </div>
        </Router>

    </RopaUsadaProvider>
  );
};

export default App;
