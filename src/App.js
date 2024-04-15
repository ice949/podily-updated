import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Pitchforstudents from './pages/pitchforstudents/Pitchforstudents';
import Practicehub from './pages/practicehub/Practicehub';

function App() {

  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/pitch' element={<Pitchforstudents />} />
        <Route path='/practice' element={<Practicehub />} />
      </Routes>
    </Router>
  );
}

export default App;
