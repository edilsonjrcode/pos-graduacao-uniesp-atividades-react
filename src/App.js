import './App.css';
import Atividade1 from './pages/Atividade1';
import Atividade2 from './pages/Atividade2';
import Atividade21 from './pages/Atividade2.1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Atividade1/>}/>
      <Route path='/atividade1' element={<Atividade1/>}/>
      <Route path='/atividade2' element={<Atividade2/>}/>
      <Route path='/atividade2_1' element={<Atividade21/>}/>
      </Routes>
    </Router>
    // <Atividade1/>
    // <Atividade2/>
    // <Atividade2_1/>
  );
}

export default App;
