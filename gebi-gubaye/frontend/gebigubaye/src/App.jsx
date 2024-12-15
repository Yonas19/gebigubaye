import React from "react";
import Header from "./pages/Home/Header";
import { BrowserRouter as Router,Link} from "react-router-dom";
import Hero from "./pages/Home/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
