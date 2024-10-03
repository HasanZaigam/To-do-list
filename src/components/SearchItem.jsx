// // // // // import React from 'react';
// // // // // import { BiSearchAlt } from 'react-icons/bi';

// // // // // const SearchItem = ({ searchQuery, handleSearch }) => {
// // // // //   return (
// // // // //     <div className="flex items-center mb-4">
// // // // //       <input
// // // // //         autoFocus
// // // // //         type='text'
// // // // //         value={searchQuery}
// // // // //         onChange={handleSearch}
// // // // //         required
// // // // //         placeholder='Search Items'
// // // // //         className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
// // // // //       />
// // // // //       <button>
// // // // //         <BiSearchAlt />
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SearchItem;

// // // // import React, { useState } from 'react';
// // // // import { BiSearchAlt } from 'react-icons/bi';

// // // // const SearchItem = ({ searchQuery, handleSearch }) => {
// // // //   const [isSearchVisible, setIsSearchVisible] = useState(false);

// // // //   const toggleSearch = () => {
// // // //     setIsSearchVisible(!isSearchVisible);
// // // //   };

// // // //   return (
// // // //     <div className="relative">
// // // //       <button
// // // //         onClick={toggleSearch}
// // // //         className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 focus:outline-none transition"
// // // //         aria-label="Search Items"
// // // //       >
// // // //         <BiSearchAlt size={24} />
// // // //       </button>
// // // //       {isSearchVisible && (
// // // //         <div className="absolute top-0 left-0 w-full h-full bg-white z-10 flex items-center justify-center">
// // // //           <input
// // // //             autoFocus
// // // //             type="text"
// // // //             value={searchQuery}
// // // //             onChange={handleSearch}
// // // //             required
// // // //             placeholder="Search Items"
// // // //             className="border border-gray-300 p-3 rounded-md w-2/3 focus:outline-none focus:ring-2 focus:ring-orange-500"
// // // //           />
// // // //           <button
// // // //             onClick={toggleSearch}
// // // //             className="bg-red-500 text-white p-2 ml-2 rounded-full hover:bg-red-600 focus:outline-none transition"
// // // //           >
// // // //             Close
// // // //           </button>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SearchItem;


// // // import React, { useState, useEffect } from 'react';
// // // import { BiSearchAlt } from 'react-icons/bi';

// // // const SearchItem = ({ searchQuery, handleSearch }) => {
// // //   const [isSearchVisible, setIsSearchVisible] = useState(false);

// // //   const toggleSearch = () => {
// // //     setIsSearchVisible(true);
// // //   };

// // //   const handleBlur = () => {
// // //     setIsSearchVisible(false);
// // //   };

// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (isSearchVisible && !event.target.closest('.search-container')) {
// // //         setIsSearchVisible(false);
// // //       }
// // //     };
// // //     document.addEventListener('mousedown', handleClickOutside);
// // //     return () => {
// // //       document.removeEventListener('mousedown', handleClickOutside);
// // //     };
// // //   }, [isSearchVisible]);

// // //   return (
// // //     <div className="relative search-container">
// // //       <button
// // //         onClick={toggleSearch}
// // //         className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 focus:outline-none transition"
// // //         aria-label="Search Items"
// // //       >
// // //         <BiSearchAlt size={24} />
// // //       </button>
// // //       {isSearchVisible && (
// // //         <div className="absolute top-0 left-0 w-full h-full bg-white z-10 flex items-center justify-center">
// // //           <input
// // //             autoFocus
// // //             type="text"
// // //             value={searchQuery}
// // //             onChange={handleSearch}
// // //             required
// // //             placeholder="Search Items"
// // //             className="border border-gray-300 p-3 rounded-md w-2/3 focus:outline-none focus:ring-2 focus:ring-orange-500"
// // //             onBlur={handleBlur}
// // //           />
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default SearchItem;


// // import React, { useState, useEffect } from 'react';
// // import { BiSearchAlt } from 'react-icons/bi';

// // const SearchItem = ({ searchQuery, handleSearch }) => {
// //   const [isSearchVisible, setIsSearchVisible] = useState(false);

// //   const toggleSearch = () => {
// //     setIsSearchVisible(true);
// //   };

// //   const handleBlur = () => {
// //     setIsSearchVisible(false);
// //   };

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (isSearchVisible && !event.target.closest('.search-container')) {
// //         setIsSearchVisible(false);
// //       }
// //     };
// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, [isSearchVisible]);

// //   return (
// //     <div className="relative search-container">
// //       <button
// //         onClick={toggleSearch}
// //         className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 focus:outline-none transition"
// //         aria-label="Search Items"
// //       >
// //         <BiSearchAlt size={24} />
// //       </button>
// //       {isSearchVisible && (
// //         <div className="absolute top-0 left-0 w-full h-full bg-white z-10 flex items-center justify-center p-4">
// //           <input
// //             autoFocus
// //             type="text"
// //             value={searchQuery}
// //             onChange={handleSearch}
// //             required
// //             placeholder="Search Items"
// //             className="border border-gray-300 p-3 rounded-md w-2/3 focus:outline-none focus:ring-2 focus:ring-orange-500"
// //             onBlur={handleBlur}
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SearchItem;

// import React, { useState, useEffect } from 'react';
// import { BiSearchAlt } from 'react-icons/bi';

// const SearchItem = ({ searchQuery, handleSearch }) => {
//   const [isSearchVisible, setIsSearchVisible] = useState(false);

//   const toggleSearch = () => {
//     setIsSearchVisible(true);
//   };

//   const handleBlur = () => {
//     setIsSearchVisible(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isSearchVisible && !event.target.closest('.search-container')) {
//         setIsSearchVisible(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isSearchVisible]);

//   return (
//     <div className="relative search-container">
//       <button
//         onClick={toggleSearch}
//         className="bg-orange-500 text-black p-2 rounded-full hover:bg-orange-600 focus:outline-none transition"
//         aria-label="Search Items"
//       >
//         <BiSearchAlt size={24} />
//       </button>
//       {isSearchVisible && (
//         <div className="absolute top-0 left-0 w-full h-full text-black bg-white z-10 flex items-center justify-center p-4">
//           <input
//             autoFocus
//             type="text"
//             value={searchQuery}
//             onChange={handleSearch}
//             required
//             placeholder="Search Items"
//             className="border border-gray-300 p-3 rounded-md w-2/3 focus:outline-none focus:ring-2 focus:ring-orange-500"
//             onBlur={handleBlur}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchItem;

import React, { useState, useEffect, useRef } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const SearchItem = ({ searchQuery, handleSearch, isSearchActive, setIsSearchActive }) => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchActive) {
      searchInputRef.current.focus();
    }
  }, [isSearchActive]);

  const handleBlur = () => {
    setIsSearchActive(false);
  };

  return (
    <div className="relative flex items-center w-full justify-end">
      {!isSearchActive && (
        <button
          onClick={() => setIsSearchActive(true)}
          className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 focus:outline-none transition"
        >
          <BiSearchAlt size={24} />
        </button>
      )}
      {isSearchActive && (
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          onBlur={handleBlur}
          placeholder="Search Items"
          className="border border-gray-300 p-3 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
          style={{ color: 'black' }} // ensuring text is black
        />
      )}
    </div>
  );
};

export default SearchItem;
