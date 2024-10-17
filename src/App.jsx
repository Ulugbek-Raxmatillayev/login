// src/App.js
import 'react-toastify/dist/ReactToastify.css';
import Notfound from './notfound';
import { Route, Routes } from 'react-router-dom';
import Home from './home';

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
