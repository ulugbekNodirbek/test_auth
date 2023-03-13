import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Main from './container/main';
import Information from './pages/information';
function App() {
const tokken = useSelector(s => s.token)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        {
          tokken == 111111 ? <Route path="/information" element={<Information />} /> : null
        }
      </Routes>
    </div>
  );
}

export default App;
