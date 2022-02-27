import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


//importing components
import { Footer } from './components/Footer';
import { Inicio } from './components/Inicio';
import { Navbar } from './components/Navbar';
import { Simulacro } from './components/Simulacro';
import { Estudiantes} from './components/Estudiantes';
import {About} from './components/About';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/simulacro' element={<Simulacro/>}/>
        <Route path='/estudiantes' element={<Estudiantes/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
