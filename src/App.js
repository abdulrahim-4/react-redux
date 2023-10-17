import Header from './containers/Header';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing/>} />
          <Route path='/product/:productId' element={<ProductDetails/>} />
          <Route>404 not found</Route>
          </Routes>
      </Router>
    </div>


  );
}

export default App;
