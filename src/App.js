import { Route, Routes } from 'react-router-dom';
import Main from './container/main';
import Information from './pages/information';
var tokken = localStorage.getItem('tokken');
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        {
          tokken === '111111' ? <Route path="/information" element={<Information />} /> : null
        }
      </Routes>
    </div>
  );
}

export default App;
