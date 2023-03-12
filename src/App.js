import { Route, Routes } from 'react-router-dom';
import Main from './container/main';
import Information from './pages/information';
var tokken = localStorage.getItem('tokken');
console.log(tokken);
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/information/" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
