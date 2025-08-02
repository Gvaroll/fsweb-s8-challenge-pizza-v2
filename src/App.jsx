import { useState } from 'react';
import reactLogo from './assets/react.svg';
import workintech from '/workintech.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import OrderPizza from './components/Order/OrderPizza';
import Home from './components/Home';
import Success from './components/Success';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function App() {
  const history = useHistory();
  const [siparisBoyutu, setSiparisBoyutu] = useState('');
  const [hamurTipi, setHamurTipi] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [siparisAdeti, setSiparisAdeti] = useState(0);
  const [error, setError] = useState({});

  const  handleOrderSubmit =  (e) => {
    e.preventDefault();
    const orderData = {
      siparisBoyutu,
      hamurTipi,
      selectedIngredients,
      siparisAdeti
    };
    axios.post("https://reqres.in/api/pizza", data)
    .then((response) => {
      console.log("Gelen yanıt:", response.data);
    })
    .catch((error) => {
      console.error("Bir hata oluştu:", error);
    });


  }


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
              siparisAdeti={siparisAdeti}
              setSiparisAdeti={setSiparisAdeti}
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
            siparisAdeti={siparisAdeti}
            setSiparisAdeti={setSiparisAdeti}
            error={error}
            setError={setError}

            />
        )}
        />

      </Switch>
    </Router>
  );
}

export default App;
