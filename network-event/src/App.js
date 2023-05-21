import Card from './component/Card';
import { Route, Routes } from 'react-router-dom';
import CardDetails from './component/CardDetails';
import './App.css';

function App() {
  return (
    
    <Routes>
      <Route path='/' element = {<Card />} />
      <Route path='/:id' element = {<CardDetails />} />
    </Routes>
  );
}

export default App;

