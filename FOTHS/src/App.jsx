import './App.css'
import {Routes, Route, HashRouter } from 'react-router-dom'
import Dashboard from './components/dashboard';
import FOTHSMain from './components/foths/foths-main-page';
import GameMode from './components/foths/game-mode';
import About from './components/footer/about';
import Study from './components/foths/study';
import Fetch from './components/fetch-folder/fetch-component';
import StartFoths from './components/Miscellaneous/start-foths';
import ErrorPage from './components/error-page';
import LoginForm from './components/Miscellaneous/LI/SU/login-form';
import Multichoice from './components/multichoice/multichoice';
import Recall from './components/recall/recall';

// I plug all of my main components into the App component
// each route has a specific parameter ID
// all routes are enveloped inside Routes & HashRouter tags for proper functionality
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index path="/" element={ <StartFoths/>} />
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/foths" element={ <FOTHSMain/>} />
          <Route path="/game-mode" element={ <GameMode/>} />
          <Route path="/study" element={ <Study/>} />
          <Route path="/recall" element={ <Recall/>} />
          <Route path="/multichoice" element={ <Multichoice/>} />
          <Route path="/about" element={ <About/>} />
          <Route path="*" element={<ErrorPage/>} />
          <Route path="/login" element={ <LoginForm/>}/>
          <Route path="/fetch" element={ <Fetch/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
