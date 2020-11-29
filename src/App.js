import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/Shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser : null
    }
  }


  unsubscibeFromAuth = null

componentDidMount(){
  this.unsubscibeFromAuth = auth.onAuthStateChanged(user => {  
    this.setState({currentUser: user})

    console.log(user)
  })
}

componentWillUnmount(){
  this.unsubscibeFromAuth()
}



  render() { 
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
