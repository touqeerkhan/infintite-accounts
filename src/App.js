
import './index.css';
import './App.css';

import NavBar from './components/nav_bar';
import {Footer} from "./components/footer";
import { ServicesPage } from './pages/services_page/services_page';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {HomePage} from "./pages/home_page/home_page";
import {ServePage} from "./pages/serve_page/serve_page";
import { CloudPage } from './pages/cloud_page/cloud_page';
import {OfficesPage} from "./pages/offices_page/offices_page";
import {AboutUsPage} from "./pages/about_us_page/about_us_page";
import { ContactUsPage } from './pages/contact';
function App() {
    return (
      <Router>
        <Switch>
          <div className='App'>
            <NavBar />
            <Route path={'/'} exact>
              <HomePage />
            </Route>
            <Route path={'/services'}>
              <ServicesPage />
            </Route>
            <Route path={'/cloud'}>
              <CloudPage />
            </Route>
            <Route path={'/who-we-serve'}>
              <ServePage />
            </Route>
            <Route path={'/offices'}>
              <OfficesPage />
            </Route>
            <Route path={'/aboutUs'}>
              <AboutUsPage />
            </Route>
            <Route path={'/contact-us'}>
              <ContactUsPage />
            </Route>
            <Footer />
          </div>
        </Switch>
      </Router>
    );
}

export default App;
