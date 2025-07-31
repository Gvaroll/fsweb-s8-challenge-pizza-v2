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
  const history = useHistory();
  const [siparisBoyutu, setSiparisBoyutu] = useState('');
  const [hamurTipi, setHamurTipi] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [error, setError] = useState({});


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          path="/orderpizza"
          render={(props) => (
            <OrderPizza
              {...props}
              selectedIngredients={selectedIngredients}
              setSelectedIngredients={setSelectedIngredients}
              siparisBoyutu={siparisBoyutu}
              setSiparisBoyutu={setSiparisBoyutu}
              hamurTipi={hamurTipi}
              setHamurTipi={setHamurTipi}
              error={error}
              setError={setError}
            />
  )}
/>

        <Route path="/home" component={Home} />
        <Route 
        path="/success" 
          render={(props) => (
          <Success
            {...props}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
            siparisBoyutu={siparisBoyutu}
            setSiparisBoyutu={setSiparisBoyutu}
            hamurTipi={hamurTipi}
            setHamurTipi={setHamurTipi}
            error={error}
            setError={setError}/>
        )}
        />

      </Switch>
    </Router>
  );
}

export default App;
