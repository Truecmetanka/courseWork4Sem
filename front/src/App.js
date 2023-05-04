import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import RegPage from './pages/RegPage/RegPage';
import LogPage from './pages/LogPage/LogPage';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/register' element={<RegPage/>}/>
        <Route path='/login' element={<LogPage/>}/>
        <Route path='/account' element={<></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
