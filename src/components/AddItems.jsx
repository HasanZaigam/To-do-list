// // import React from 'react';
// // import { FaPlus } from 'react-icons/fa';

// // const AddItems = () => {
// //   return (
// //     <div className='mt-4'>
// //       <form className='flex items-center space-x-4'>
// //         <label htmlFor='addItem' className='text-lg font-semibold'>
// //           Add Items
// //         </label>
// //         <input 
// //           autoFocus
// //           id='addItem'
// //           type='text'
// //           placeholder='Add Items'
// //           required
// //           className='border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
// //         />
// //         <button
// //           type='submit'
// //           aria-label='add Item'
// //           className='bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
// //         >
// //           <FaPlus />
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddItems;

// import React, { useState } from 'react';
// import { FaPlus } from 'react-icons/fa';

// const AddItems = () => {
//   const [isInputVisible, setIsInputVisible] = useState(false);
//   const [newItem, setNewItem] = useState('');

//   const handleAddClick = () => {
//     setIsInputVisible(true);
//   };

//   const handleInputChange = (e) => {
//     setNewItem(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newItem) {
//       // Add the new item to the list (logic to be added)
//       console.log('New Item:', newItem);
//       setNewItem('');
//       setIsInputVisible(false); // Close input box after adding
//     }
//   };

//   return (
//     <div className='mt-4'>
//       {!isInputVisible ? (
//         <button
//           onClick={handleAddClick}
//           className='bg-orange-500 text-white p-2 items-center justify-items-center hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500'
//           aria-label='add Item'
//         >
//           <FaPlus />
//         </button>
//       ) : (
//         <form onSubmit={handleSubmit} className='flex items-center space-x-4'>
//           <input
//             autoFocus
//             type='text'
//             value={newItem}
//             onChange={handleInputChange}
//             placeholder='Add Item'
//             className='border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500'
//             required
//           />
//           <button
//             type='submit'
//             className='bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500'
//             aria-label='submit Item'
//           >
//             <FaPlus />
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default AddItems;

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItems = ({ addNewItem }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newItem, setNewItem] = useState('');

  const handleAddClick = () => {
    setIsInputVisible(true);
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      addNewItem(newItem); // Adds new item to the list via the parent component
      setNewItem('');
      setIsInputVisible(false); // Close input box after adding
    }
  };

  return (
    <div className="mt-4 flex justify-center">
      {!isInputVisible ? (
        <button
          onClick={handleAddClick}
          className="bg-orange-500 text-white p-3 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full"
          aria-label="add Item"
        >
          <FaPlus />
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center w-full space-x-4">
          <input
            autoFocus
            type="text"
            value={newItem}
            onChange={handleInputChange}
            placeholder="Add Item"
            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="submit Item"
          >
            <FaPlus />
          </button>
        </form>
      )}
    </div>
  );
};

export default AddItems;

