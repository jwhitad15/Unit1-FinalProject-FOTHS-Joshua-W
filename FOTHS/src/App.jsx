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
import Fetch from './components/fetch-component';
import StartFoths from './components/start-foths';

function App() {
 
  // I plug all of my main components into the App component
  // each route has a specific parameter ID
  // all routes are enveloped inside Routes & HashRouter tags for proper functionality
  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={ <Navigate to="/#/dashboard" replace/>} /> */}

          <Route index path="/start" element={ <StartFoths/>} />
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/foths" element={ <FOTHSMain/>} />
          <Route path="/game-mode" element={ <GameMode/>} />
          <Route path="/study" element={ <Study/>} />
          <Route path="/about" element={ <About/>} />
          <Route path="/under-construction" element={ <UnderConstruction/>} />
          <Route path="*" element={<ErrorPage/>} />

          <Route path="/fetch" element={ <Fetch/>} />

          <Route path="/login" element={ <LoginForm/>} />
          <Route path="/signup" element={ <SignupForm/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
