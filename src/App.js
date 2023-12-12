
import React from 'react';
import UserContextProvider from './context/UserContext';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

const App=()=>{
  return(
    <UserContextProvider>
    <Router>
      <Routes>
        <Route path="/result" element={<Result/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/" element={<Welcome/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
    </UserContextProvider>
  )}


export default App;
