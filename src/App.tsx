import React from 'react';
import './App.css';
import InputField from './components/InputField';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Ques from './components/Ques';
import Result from './components/Result';

function App() {
  return (
  <div className="App">
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<InputField />} />
    <Route path="ques" element={<Ques />} />
    <Route path="result" element={<Result />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App; 
