import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import RegPage from './pages/RegPage/RegPage';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/register' element={<RegPage/>}/>
        <Route path='/login' element={<MainPage/>}/>
        <Route path='/account' element={<></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
