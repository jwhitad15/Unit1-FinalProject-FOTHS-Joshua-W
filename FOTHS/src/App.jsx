import './App.css'
import {Routes, Route } from 'react-router-dom'
import LoginForm from './components/login-form'
import SignupForm from './components/signup-form';
import Dashboard from './components/dashboard';

// import LoginButton from './components/Test'

function App() {
 
  return (
    <>
    
      <Routes>
        {/* <Route path="/" element={ <LoginForm/>} /> */}
        <Route path="/" element={ <Dashboard/>} />
        {/* <Route path="/signup" element={ <SignupForm/>} /> */}
      </Routes>
  
     {/* <SignupForm/> */}
    </>
  )
}

export default App;
