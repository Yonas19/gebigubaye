import React from "react";
import Header from "./pages/Home/Header";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signuper from "./pages/Home/registration/signup";
import Loginer from "./pages/Home/registration/login";
import { Container } from "react-bootstrap";
import { Authprovider } from "./pages/Home/registration/context/authcontext";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./pages/Home/Hero";

function App() {
  return (
    <div>
      
        <Router>
        <Authprovider> {/*dont forget to rap it with the function that has the context provider xml or return*/}
       
          <Routes>
          <Route path="/signup" Component={Signuper}/>
          <Route path ="/login" Component={Loginer}/>
          <Route  path="/"  element ={<> <Header />  <Hero /> </> }  />          
          </Routes>
        </Authprovider>
        </Router>
      

      
    </div>
  );
}

export default App;
