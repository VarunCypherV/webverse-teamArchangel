import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Pages bd component imports
import Homepage from './Pages/Homepage';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/enterpath" element={<EnterComponent />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
