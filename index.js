import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Footer from './Footer';
import Product from './Product';
import Contact from './Contact';
import Offer from './Offer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Order from './Order';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
        <Home/>


        <Routes>
        {/* <Route path='/Home' element={<Home/>}/> */}
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Offer' element={<Offer/>}/>
        <Route path='/Order' element={<Order/>}/>




        </Routes>
        
    
        <Footer/>
          
        </BrowserRouter>
      

    
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
