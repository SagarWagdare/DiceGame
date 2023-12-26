import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from "./components/MainPage/MainPage";
import GamePage from './components/GamePage/GamePage';
function App() {

  return (
    
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/game-page" element={<GamePage/>}/>
    </Routes>
     
    
  )
}

export default App
