import './App.css'
import {Routes, Route, HashRouter } from 'react-router-dom'
import Dashboard from './components/dashboard';
import FOTHSMain from './components/foths/foths-main-page';
import GameMode from './components/foths/game-mode';
import About from './components/footer/about';
import Study from './components/foths/study';
import UnderConstruction from './components/Miscellaneous/under-construction';
import Fetch from './components/fetch-folder/fetch-component';
import StartFoths from './components/Miscellaneous/start-foths';
import ErrorPage from './components/error-page';
import LoginForm from './components/Miscellaneous/LI/SU/login-form';
import MC from './components/multichoice.jsx/multichoice.json';
// import FillInTheBlank from './components/foths/recall.jsx'
// import LoadQuestion from './components/foths/multiple-choice.jsx';

function App() {
 
  // I plug all of my main components into the App component
  // each route has a specific parameter ID
  // all routes are enveloped inside Routes & HashRouter tags for proper functionality
  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={ <Navigate to="/#/dashboard" replace/>} /> */}

          <Route index path="/" element={ <StartFoths/>} />
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/foths" element={ <FOTHSMain/>} />
          <Route path="/game-mode" element={ <GameMode/>} />
          <Route path="/study" element={ <Study/>} />
          <Route path="/about" element={ <About/>} />
          <Route path="/under-construction" element={ <UnderConstruction/>} />
          <Route path="*" element={<ErrorPage/>} />
          <Route path="/login" element={ <LoginForm/>}/>
          <Route path="/fetch" element={ <Fetch/>} />
          <Route path="/mc" element={ <MC/>} />
          {/* <Route path="/admin" element={ <LoadQuestion/>} />
          <Route path="/recall" element={ <FillInTheBlank/>} /> */}
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
