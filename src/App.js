import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { NavbarComp } from './components/NavbarComp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
