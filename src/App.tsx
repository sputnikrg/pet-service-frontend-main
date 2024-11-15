// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserPage from './pages/UserPage';
import PetPage from './pages/PetPage';
import ServicePage from './pages/ServicePage';
import ServiceCategoryPage from './pages/ServiceCategoryPage';
import Modal from './pages/ModalRegistration';
import LoginModal from './pages/ModalLogin';
import Contacts from './pages/Contacts';
import myImage from './asets/logo.jpg';



const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleOpenLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  return (
    <Router>
      <div>
        <div className="pt-3 text-center pb-5 grid grid-cols-3 bg-white">

          <div>
            <nav>
              <ul className="flex space-x-2 ml-2">
                <Link to="/user">
                  <li className="text-nowrap  cursor-pointer hover:text-white hover:bg-theme-blue px-2 py-1 rounded-sm">
                    Profile
                  </li>
                </Link>
                {/* <Link to="/pets">
                  <li className="text-nowrap bg-neutral-200 cursor-pointer hover:text-white hover:bg-red-500 px-2 py-1 rounded-sm">
                    Pet Information
                  </li>
                </Link> */}
                {/* <Link to="/services">
                  <li className="text-nowrap bg-neutral-200 cursor-pointer hover:text-white hover:bg-red-500 px-2 py-1 rounded-sm">
                    Available Services
                  </li>
                </Link> */}
                <Link to="/categories">
                  <li className="text-nowrap  cursor-pointer hover:text-white hover:bg-theme-blue px-2 py-1 rounded-sm">
                    Categories
                  </li>
                </Link>
                <Link to="/contacts">
                  <li className="text-nowrap cursor-pointer hover:text-white hover:bg-theme-blue px-2 py-1 rounded-sm">
                    Contacts
                  </li>
                </Link>
              </ul>
            </nav>
          </div>


          <div>
            <Link to="/" className=" grid place-items-center">
              <img src={myImage} alt="Logo" className="w-3/5" />
            </Link>
          </div>




          <div className="space-x-2">
            <button
              onClick={handleOpenModal}
              className="hover:text-white hover:bg-theme-blue px-2 py-1 rounded-sm"
            >
              Sign up
            </button>
            <button
              onClick={handleOpenLoginModal}
              className="hover:text-white hover:bg-theme-blue px-2 py-1 rounded-sm"
            >
              Log in
            </button>
          </div>
        </div>

        <Routes>
          <Route path="/user" element={<UserPage />} />
          <Route path="/pets" element={<PetPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/categories" element={<ServiceCategoryPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Modal show={showModal} onClose={handleCloseModal} />
        <LoginModal show={showLoginModal} onClose={handleCloseLoginModal} />
      </div>
    </Router>
  );
};

export default App;
