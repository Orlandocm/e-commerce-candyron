import React from 'react'
import { Sun, ShoppingCart} from 'lucide-react';

export default function Header(){
  
  return (
    <nav className="fixed left-0 right-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-pink-500">Candyron</h1>
          </div >
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              <li><a href="#" className="text-gray-700 dark:text-gray-200 hover:text-pink-500 px-3 py-2">Home</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-200 hover:text-pink-500 px-3 py-2">Shop</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-200 hover:text-pink-500 px-3 py-2">About</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-200 hover:text-pink-500 px-3 py-2">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><Sun className="w-5 h-5"></Sun></button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><ShoppingCart className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </nav>
 );
};

