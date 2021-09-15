import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/Home"
import About from"./components/About"
import Contact from "./components/Contact"
import Header from "./Layout/Header"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from "./components/NotFound"
import AddUser from "./Users/AddUser"
import EditUser from "./Users/EditUser"
import ViewUser from "./Users/ViewUser"



function App() {
  return (
    <>
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/user/add" component={AddUser}/>
      <Route exact path="/user/edit/:id" component={EditUser}/>
      <Route exact path="/user/:id" component={ViewUser}/>

      <Route component={NotFound}/>   
    </Switch>
  
    </Router>

    </>
  );
}

export default App;
