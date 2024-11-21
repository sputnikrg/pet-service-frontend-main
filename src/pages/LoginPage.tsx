// src/pages/LoginPage.tsx
import React from 'react';

const LoginPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add login handling logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="remember" name="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-sm">Remember me</label>
                    </div>
                    <div className="mb-4">
                        <a href="#" className="text-blue-500 text-sm">Forgot your password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-sky-600 hover:bg-theme-blue text-white font-bold py-2 px-4 rounded"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
