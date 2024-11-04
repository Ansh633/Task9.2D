import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './Pricing'; 
import Payment from './Payment'; 
import HomePage from './Webpage';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('it-can-contain-any-thing');

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<Pricing />} />
        
        {}
        <Route 
          path="/payment" 
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
