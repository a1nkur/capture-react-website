import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import AboutPage from "./Pages/AboutPage";
import OurWorkPage from "./Pages/OurWorkPage";
import ContactUsPage from "./Pages/ContactUsPage";
import MovieDetail from "./Components/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route to="/" exact>
          <AboutPage />
        </Route>
        <Route to="/work" >
          <OurWorkPage />
        </Route>
        <Route to="/contact">
          <ContactUsPage />
        </Route>
      </Switch> 
      {/* <MovieDetail /> */}
    </div>
  );
}

export default App;
