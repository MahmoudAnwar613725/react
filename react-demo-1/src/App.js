import {useState} from 'react'; 
import './App.css';
import Product from './components/Product/Product';
import Products from './containers/Products/Products';

function App() {

  const [productsState , setProductsState] = useState(
    [
      {id:1, name:"iPhone 13", price:1100},
      {id:2, name:"iPhone 12", price:1000},
      {id:3, name:"galaxy s20", price:1050}
    ]
  );


  return (
    <div className="App">
        <h1> Welcome WAA </h1>
        <Products products = {productsState} />
    </div>
  );
}

export default App;
