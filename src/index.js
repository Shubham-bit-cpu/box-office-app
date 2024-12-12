import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Test from './test';
import Home from './Home';
import Mainlayout from './components/Mainlayout';
import Starred from './pages/Starred';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route  element={<Mainlayout />}> 
         <Route index element={<Home />} />
           <Route path="starred" element={<Starred />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
          </Route>  
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
