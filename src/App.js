import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from "./HomePage.jsx"
import ReactQueryPage from "./ReactQueryPage.jsx"
import NormalPage from './NormalPage.jsx';

function App() {
  return (
    <div className='App'>
      <nav style={{ backgroundColor: "beige", padding: "20px" }}>
        <Link to="/" style={{ marginRight: "10px"}}>
        HomePage
        </Link>
        <Link to="/normal" style={{ marginRight: "10px"}}>Normal Fetch</Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/normal" element={<NormalPage />}/>
        <Route path='/react-query' element={<ReactQueryPage />}/>
      </Routes>
    </div>
  );
}

export default App;
