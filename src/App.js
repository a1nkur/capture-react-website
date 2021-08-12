import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import AboutPage from "./Pages/AboutPage";
import OurWorkPage from "./Pages/OurWorkPage";
import ContactUsPage from "./Pages/ContactUsPage";
import MovieDetail from "./Components/MovieDetail";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route path="/" exact>
            <AboutPage />
          </Route>
          <Route path="/work" exact>
            <OurWorkPage />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUsPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
