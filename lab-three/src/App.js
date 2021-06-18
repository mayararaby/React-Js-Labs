import logo from './logo.svg';
import './App.css';
import ProductNav from './Component/ProductNav/ProductNav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Product from './pages/Products/Product';
import NotFound from  './pages/NotFount/NotFound';
import Counter from './pages/Counter/Counter';




function App() {
  return (
    <>
      
      <Router>
      <ProductNav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product-details/:id" exact component={ProductDetails} />
            <Route path="/products" exact component={Product} />
            <Route path="/Counter" component={Counter}/>
            <Route path="*" component={NotFound}/>
          </Switch>
          
      </Router>
    </>
  );
}

export default App;
