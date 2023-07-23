import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import New from './components/New';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>






      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/update/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
