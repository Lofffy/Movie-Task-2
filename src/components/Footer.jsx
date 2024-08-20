import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="bg-[#1A1919] text-white py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">PROFILE</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">FAQ's</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Pricing plans</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Order tracking</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">RECENT POSTS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Touch of uniqueness</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Offices you won't forget</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Cicilan</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">CUSTOMER</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Help & contact us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Return</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Online stores</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms & condition</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">CONTACT</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-500">© 2014 Nizami cinema. All Rights Reserved</p>
      </div>
    </footer>
  );
}
