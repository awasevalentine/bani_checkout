import React from 'react';
import CheckoutDefaultLayout from './pages/checkout/checkoutLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="w-[100%] h-[100%]">
      <BrowserRouter>
      <Routes>
        <Route path='checkout/:page_ref' element={<CheckoutDefaultLayout />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
