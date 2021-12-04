import HomePage from "./pages/homepage/homepage.components";

import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in and sign-up/sign-in-and-sign-up.styles";
function App() {
  return (
    <div>
     
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
