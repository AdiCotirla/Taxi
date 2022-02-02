import './App.css';
import Header from './Components/Header/header';
import {BrowserRouter as Router} from "react-router-dom";
import Car from './Components/CarContent/car';
import Driver from './Components/Driver/driver';
import King from './Components/King/king';
import Footer from './Components/Footer/footer';
import City from './Components/City/city';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Car/>
      <King/>
      <City/>
      <Driver/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
