
import {BrowserRouter as  Router,Route} from "react-router-dom";
import MainPage from "./components/Main-Page.component.js";

function App() {
  return (
    <Router>
        <Route path="/" exact component={MainPage} />
    </Router>
  );
}

export default App;
