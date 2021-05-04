
import './index.css';
import './App.css';

import NavBar from './components/nav_bar';
import {Footer} from "./components/footer";
import { ServicesPage } from './pages/services_page/services_page';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {HomePage} from "./pages/home_page/home_page";
function App() {
    return (
      <Router>
   <Switch>
    <div className="App">
      <NavBar/>
      <Route path={'/'} exact>
       <HomePage/>
      </Route>
        <Route path={'/services'}>
       <ServicesPage/>
        </Route>
      <Footer/>
    </div>
   </Switch>
      </Router>
  );
}

export default App;
