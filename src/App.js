import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Roots from './components/Roots';
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Roots/>

</Router>
     
    </div>
  );
}

export default App;
