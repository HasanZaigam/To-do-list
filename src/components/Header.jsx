import React from 'react'
import { FaClipboardList } from 'react-icons/fa';

const Header = ({title}) => (
  <header className="bg-orange-600 text-white p-4 border-red-800 border-b-8 flex items-center rounded-2xl ml-2 mr-2 mt-2 justify-center">
    <h1 className="text-4xl font-bold">{title}</h1>
    <FaClipboardList className="mr-10 pl-2 text-3xl" /> {/* Adds margin and icon size */}
  </header>
);

Header.defaultProps = {
  title : "To-Do List"
}

export default Header;
