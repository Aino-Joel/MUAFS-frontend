import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Entry from './components/Entry';
import Services from './components/Services';
import Ratings from './components/Ratings';


import Hostels from './components/Hostels';

function App() {
  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Entry />}/>
        <Route path='/hostels' element={< Hostels />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/ratings' element={< Ratings />}/>
        
      </Routes>
      
     
    </div>
  );
}

export default App;
