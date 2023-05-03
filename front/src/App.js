import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/account' element={<></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
