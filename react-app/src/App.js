
import {BrowserRouter as  Router,Route, Switch} from "react-router-dom";
import MainPage from "./components/Main-Page.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <Router>
      <Nav /> 
      <Switch>

      <Route path="/" exact component={MainPage} />

      </Switch>
    </Router>
  );
}

export default App;
