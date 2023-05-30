// import React from "react"
import Header from "./Components/common/Heading/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Hero from "./Components/home/hero/Hero";
import Home from "./Components/home/Home";
import About from "./Components/about/About";



const App = () => {
  return (
    <>
    <Router>
      <Header/>
     <Routes>
        <Route path ='/' exact Component={Home}/>
        <Route path ='/about' exact Component={About}/>

        

     </Routes>
    </Router>
    </>
  );
};

export default App;
