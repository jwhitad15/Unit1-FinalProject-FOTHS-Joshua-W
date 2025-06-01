import './App.css'
import {Routes, Route, HashRouter } from 'react-router-dom'
import LoginForm from './components/login-form'
import SignupForm from './components/signup-form';
import Dashboard from './components/dashboard';
import FOTHSMain from './components/foths-main-page';
import GameMode from './components/game-mode';
import About from './components/about';
import Study from './components/study';
import UnderConstruction from './components/under-construction';
import ErrorPage from './components/error-page'
import AppQ from './components/fetch-component';
import StartFoths from './components/start-foths';

function App() {
 
  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={ <Navigate to="/#/dashboard" replace/>} /> */}

          <Route path="/login" element={ <LoginForm/>} />
          <Route path="/signup" element={ <SignupForm/>} />
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/foths" element={ <FOTHSMain/>} />
          <Route path="/game-mode" element={ <GameMode/>} />
          <Route path="/study" element={ <Study/>} />
          <Route path="/about" element={ <About/>} />
          <Route path="/under-construction" element={ <UnderConstruction/>} />
          <Route path="/fetch" element={ <AppQ/>} />
          <Route path="/start" element={ <StartFoths/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
