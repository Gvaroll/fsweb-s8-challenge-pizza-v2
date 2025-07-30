import { useState } from 'react';
import reactLogo from './assets/react.svg';
import workintech from '/workintech.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import OrderPizza from './components/Order/OrderPizza';
import Home from './components/Home';
import Success from './components/Success';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [count, setCount] = useState(0);
  const history = useHistory();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/orderpizza" component={OrderPizza} />
        <Route path="/home" component={Home} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
}

export default App;
