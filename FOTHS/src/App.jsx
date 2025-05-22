import './App.css'
import {Routes, Route } from 'react-router-dom'
import LoginForm from './components/login-form'
import SignupForm from './components/signup-form';
import Dashboard from './components/dashboard';
import FOTHSMain from './components/foths-main-page';
import GameMode from './components/game-mode';
import About from './components/about';
import Study from './components/study';

// import LoginButton from './components/Test'

function App() {
 
  return (
    <>
    
      <Routes>
        {/* <Route path="/" element={ <LoginForm/>} /> */}
         {/* <Route path="/" element={ <SignupForm/>} /> */}
        {/* <Route path="/" element={ <Dashboard/>} /> */}
        {/* <Route path="/" element={ <FOTHSMain/>} /> */}
        {/* <Route path="/" element={ <GameMode/>} /> */}
        {/* <Route path="/" element={ <Study/>} /> */}
        {/* <Route path="/" element={ <About/>} /> */}
      </Routes>
  
     {/* <SignupForm/> */}
    </>
  )
}

export default App;
