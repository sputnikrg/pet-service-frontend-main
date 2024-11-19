// Home.tsx
import React from 'react';
import Categories from './ServiceCategoryPage';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-xxl text-center mb-8 mt-8">Welcome to Pet Service</h1>
      <p className="text-center">
            <Categories />
      </p>
    </div>
  );
};

export default Home;
