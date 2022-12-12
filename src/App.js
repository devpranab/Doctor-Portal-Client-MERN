import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/HomePage/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/appointment" element={<Appointment/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;