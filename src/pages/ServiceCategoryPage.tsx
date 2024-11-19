// src/pages/ServiceCategoryPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCategoryPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-[18px] font-bold text-center mb-6  mt-8">Service Categories</h1>
      <div className="grid grid-cols-4 gap-4 mb-10 ">
        <Link to="/services/cats" className="col-start-2">
        <div className="bg-stone-50 p-3 rounded shadow-md hover:shadow-lg cursor-pointer grid place-items-center ">
          <img src='https://cdn-icons-png.flaticon.com/512/3906/3906579.png' alt="Icon cats" className="w-10 pb-2 "  />
            <b>Cats</b>
          </div>
        </Link>
        <Link to="/services/dogs">
          <div className="bg-stone-50 p-3 rounded shadow-md hover:shadow-lg cursor-pointer grid place-items-center ">
          <img src='https://cdn-icons-png.flaticon.com/512/2171/2171947.png' alt="Icon dogs" className="w-10 pb-2 "  />
            <b>Dogs</b>
          </div>
        </Link>
        <Link to="/services/birds" className="col-start-2">
        <div className="bg-stone-50 p-3 rounded shadow-md hover:shadow-lg cursor-pointer grid place-items-center ">
          <img src='https://cdn-icons-png.flaticon.com/512/347/347480.png' alt="Icon birds" className="w-10 pb-2 "  />
            <b>Birds</b>
          </div>
        </Link>
        <Link to="/services/rodents">
        <div className="bg-stone-50 p-3 rounded shadow-md hover:shadow-lg cursor-pointer grid place-items-center ">
          <img src='https://cdn-icons-png.flaticon.com/512/2794/2794651.png' alt="Icon rodients" className="w-10 pb-2 "  />
            <b>Rodents</b>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCategoryPage;
