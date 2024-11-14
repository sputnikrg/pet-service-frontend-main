import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserPage from './pages/UserPage';
import PetPage from './pages/PetPage';
import ServicePage from './pages/ServicePage';
import ServiceCategoryPage from './pages/ServiceCategoryPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>


        {/* Навигация */}
        <div className="mt-3 text-center pb-5 grid   grid-cols-3">
          <nav >
            <ul className="  flex space-x-2 ml-2  ">
              <Link to="/user"><li className=" text-nowrap bg-neutral-200  cursor-pointer hover:text-white hover:bg-red-500 px-2 py-1 rounded-sm" >User Profile</li></Link>
              <Link to="/pets"><li className="text-nowrap bg-neutral-200  cursor-pointer hover:text-white hover:bg-red-500 px-2 py-1 rounded-sm">Pet Information</li></Link>
              <Link to="/services"><li className="text-nowrap bg-neutral-200  cursor-pointer hover:text-white hover:bg-red-500 px-2 py-1 rounded-sm">Available Services</li></Link>
              <Link to="/categories"><li className="text-nowrap bg-neutral-200  cursor-pointer hover:text-white hover:bg-red-500 px-2 py-1 rounded-sm">Service Categories</li></Link>
            </ul>
          </nav>

          <Link to="/" className="text-center space-x-4 justify-center">
            <h1>Welcome to Pet Сare</h1>
            <p className="text-sm ">Love and care for your pet</p>
          </Link>

          <div className=" space-x-2 ">
            <a href="#" className='hover:text-white hover:bg-red-500 px-2 py-1 rounded-sm'>Sign up</a>
            <a href="#" className='hover:text-white hover:bg-red-500 px-2 py-1 rounded-sm'>Log in</a>
          </div>


        </div>

        {/* Маршруты */}
        <Routes>
          <Route path="/user" element={<UserPage />} />
          <Route path="/pets" element={<PetPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/categories" element={<ServiceCategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
