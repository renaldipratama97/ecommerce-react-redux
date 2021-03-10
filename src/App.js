import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import DetailProduct from './views/DetailProduct'
import Cart from './views/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/detail-product/:id' component={DetailProduct} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
