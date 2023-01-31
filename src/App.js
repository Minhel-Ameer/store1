import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          
          <Route path='/' exact element={<ProductListing/>}/>
          <Route path='/product/:productId' exact element={<ProductDetail/>}/>
          <Route>404 not found</Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
