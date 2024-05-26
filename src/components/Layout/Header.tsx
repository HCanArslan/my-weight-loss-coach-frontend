import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
          <li><a href="/profile" className="hover:underline">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
