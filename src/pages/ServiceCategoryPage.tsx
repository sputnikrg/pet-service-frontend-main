import React from 'react';

const ServiceCategoryPage: React.FC = () => {
  return (
    <div>
      <h1 className='text-xxl text-center mb-8 mt-8'>Service Categories</h1>
      <div className="grid grid-cols-4 gap-4 text-center ">
        <div className="col-start-2 bg-stone-50 p-8 rounded shadow-md hover:shadow-lg  cursor-pointer">Cats</div>
        <div className=" bg-stone-50 p-8 rounded shadow-md hover:shadow-lg cursor-pointer">Dogs</div>
        <div className="col-start-2 bg-stone-50 p-8 rounded shadow-md hover:shadow-lg cursor-pointer">Birds</div>
        <div className=" bg-stone-50 p-8 rounded shadow-md hover:shadow-lg cursor-pointer">Rodents</div>
        
      </div>
    </div>
  );
};

export default ServiceCategoryPage;
