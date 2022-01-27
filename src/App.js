import './App.css';
import Sidebar from './Components/Sidebar/sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Car from './Components/CarContent/car';

function App() {
  return (
    <Router>
    <div className="App">
      <Sidebar/>
      <Car/>
    </div>
    </Router>
  );
}

export default App;
