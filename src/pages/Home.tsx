// src/pages/Home.tsx
import React from 'react';
import backgroundImage from '../asets/images/main.jpg';
import ServiceCategoryPage from './ServiceCategoryPage'; // Импортируем компонент категорий

const Home: React.FC = () => {
  return (
    <div>
      {/* Блок с фоновым изображением и заголовком */}
      <div
        className="relative bg-cover bg-center h-64"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.8,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl font-bold text-center mb-2 mt-2 text-white">
            Welcome to Pet Service
          </h1>
          <p className="text-lg text-center text-white">
            Here you can find the best pet sitters for your pets!
          </p>
        </div>
      </div>

      {/* Добавляем компонент категорий */}
      <ServiceCategoryPage />
    </div>
  );
};

export default Home;
