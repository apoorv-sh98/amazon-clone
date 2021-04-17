import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Header from "./Header"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <h1>Checkout page</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/">
            <Header/>
            <h1>HOME PAGE!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{/*we need a react-router*/}
      {/* {localhost:3000} */}
      {/* localhost:3000/checkout */}
      {/* localhost:3000/login */}
