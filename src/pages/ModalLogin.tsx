// LoginModal.tsx
import React from 'react';

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-80">
      <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2  bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
        >
          &#x2715;
        </button>
        <h2 className="text-xl font-semibold mb-4">Log In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input type="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input type="password" className="w-full p-2 border rounded" required />
          </div>
          <div className='mt-4'>
                        <input type="checkbox" id="remember" name="remember" />
                        <label className='text-sm'> Remember</label>
                    </div>
                    <a href="#">Forgot your password?</a>
          <button
            type="submit"
            className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 mt-4 rounded w-full"
          >
            Log In
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default LoginModal;
