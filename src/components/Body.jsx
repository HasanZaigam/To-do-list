// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { MdDelete } from 'react-icons/md';
// // // // // // // // // import AddItems from './AddItems';

// // // // // // // // // const Body = () => {
// // // // // // // // //   const [Items, setItems] = useState([
// // // // // // // // //     {
// // // // // // // // //       id: 1,
// // // // // // // // //       checked: true,
// // // // // // // // //       item: 'Doing web Development',
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       id: 2,
// // // // // // // // //       checked: false,
// // // // // // // // //       item: 'Doing Intern Work',
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       id: 3,
// // // // // // // // //       checked: false,
// // // // // // // // //       item: 'Preparing yourself for the Placements',
// // // // // // // // //     },
// // // // // // // // //   ]);

// // // // // // // // //   const handleCheck = (id) => {
// // // // // // // // //     const listItems = Items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
// // // // // // // // //     setItems(listItems);
// // // // // // // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // // // // // // //   };
  
// // // // // // // // //   const handleDelete = (id) => {
// // // // // // // // //     const listItems = Items.filter((item) => item.id !== id);
// // // // // // // // //     setItems(listItems);
// // // // // // // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // // // // // // //   };

// // // // // // // // //   const length = Items.length;
// // // // // // // // //   return (
    
// // // // // // // // //     <>
// // // // // // // // //       {/* Flex container to make footer stick at the bottom */}
// // // // // // // // //       <div className="flex flex-col min-h-min border-black border-x-4 border-y-4 p-4 max-w-xl mx-auto mt-5 mb-5">
// // // // // // // // //         <div className="flex-grow">
// // // // // // // // //           <main>
// // // // // // // // //             <div>
// // // // // // // // //             {Items.length ? (
// // // // // // // // //               <ul className="space-y-4">
// // // // // // // // //                 {Items.map((item) => (
// // // // // // // // //                   <li
// // // // // // // // //                     key={item.id}
// // // // // // // // //                     className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-md"
// // // // // // // // //                   >
// // // // // // // // //                     <div className="flex items-center space-x-2">
// // // // // // // // //                       <input
// // // // // // // // //                         type="checkbox"
// // // // // // // // //                         checked={item.checked}
// // // // // // // // //                         onClick={() => handleCheck(item.id)}
// // // // // // // // //                         className="h-5 w-5 accent-blue-500"
// // // // // // // // //                       />
// // // // // // // // //                       <label
// // // // // // // // //                         onClick={() => handleCheck(item.id)}
// // // // // // // // //                         className={`text-lg font-medium ${item.checked ? 'line-through' : ''}`}
// // // // // // // // //                       >
// // // // // // // // //                         {item.item}
// // // // // // // // //                       </label>
// // // // // // // // //                     </div>
// // // // // // // // //                     <MdDelete
// // // // // // // // //                       onClick={() => handleDelete(item.id)}
// // // // // // // // //                       role="button"
// // // // // // // // //                       className="hover:text-3xl hover:text-orange-700 text-orange-500 text-2xl"
// // // // // // // // //                     />
// // // // // // // // //                   </li>
// // // // // // // // //                 ))}
// // // // // // // // //               </ul>
// // // // // // // // //             ) : (
// // // // // // // // //               <p className="text-4xl items-center justify-center mt-60 font-serif">
// // // // // // // // //                 Your List is Empty!😔
// // // // // // // // //               </p>
// // // // // // // // //             )}
// // // // // // // // //           </div>
// // // // // // // // //           <AddItems />
// // // // // // // // //         </main>    
// // // // // // // // //       </div>
// // // // // // // // //       <div className="mt-auto">
// // // // // // // // //           <div className='bg-orange-600 border-black border-2 text-white flex items-center justify-center'>
// // // // // // // // //             <h4 className='text-2xl font-bold'> {length} List {length === 1 ? "item" : "items"} </h4>
// // // // // // // // //           </div>
// // // // // // // // //         </div>  
// // // // // // // // //       </div>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Body;


// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { MdDelete } from 'react-icons/md';
// // // // // // // // import AddItems from './AddItems';

// // // // // // // // const Body = () => {
// // // // // // // //   const [Items, setItems] = useState([
// // // // // // // //     {
// // // // // // // //       id: 1,
// // // // // // // //       checked: true,
// // // // // // // //       item: 'Doing web Development',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 2,
// // // // // // // //       checked: false,
// // // // // // // //       item: 'Doing Intern Work',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 3,
// // // // // // // //       checked: false,
// // // // // // // //       item: 'Preparing yourself for the Placements',
// // // // // // // //     },
// // // // // // // //   ]);

// // // // // // // //   const handleCheck = (id) => {
// // // // // // // //     const listItems = Items.map((item) =>
// // // // // // // //       item.id === id ? { ...item, checked: !item.checked } : item
// // // // // // // //     );
// // // // // // // //     setItems(listItems);
// // // // // // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // // // // // //   };

// // // // // // // //   const handleDelete = (id) => {
// // // // // // // //     const listItems = Items.filter((item) => item.id !== id);
// // // // // // // //     setItems(listItems);
// // // // // // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // // // // // //   };

// // // // // // // //   const addNewItem = (newItem) => {
// // // // // // // //     const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
// // // // // // // //     const newTask = { id, checked: false, item: newItem };
// // // // // // // //     const updatedItems = [...Items, newTask];
// // // // // // // //     setItems(updatedItems);
// // // // // // // //     localStorage.setItem('todoList', JSON.stringify(updatedItems));
// // // // // // // //   };

// // // // // // // //   const length = Items.length;

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <div className="flex flex-col min-h-min border-black border-x-4 border-y-4 p-4 max-w-xl mx-auto mt-5 mb-5">
// // // // // // // //         <div className="flex-grow">
// // // // // // // //           <main>
// // // // // // // //             {Items.length ? (
// // // // // // // //               <ul className="space-y-4">
// // // // // // // //                 {Items.map((item) => (
// // // // // // // //                   <li
// // // // // // // //                     key={item.id}
// // // // // // // //                     className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-md"
// // // // // // // //                   >
// // // // // // // //                     <div className="flex items-center space-x-2">
// // // // // // // //                       <input
// // // // // // // //                         type="checkbox"
// // // // // // // //                         checked={item.checked}
// // // // // // // //                         onClick={() => handleCheck(item.id)}
// // // // // // // //                         className="h-5 w-5 accent-blue-500"
// // // // // // // //                       />
// // // // // // // //                       <label
// // // // // // // //                         onClick={() => handleCheck(item.id)}
// // // // // // // //                         className={`text-lg font-medium ${
// // // // // // // //                           item.checked ? 'line-through' : ''
// // // // // // // //                         }`}
// // // // // // // //                       >
// // // // // // // //                         {item.item}
// // // // // // // //                       </label>
// // // // // // // //                     </div>
// // // // // // // //                     <MdDelete
// // // // // // // //                       onClick={() => handleDelete(item.id)}
// // // // // // // //                       role="button"
// // // // // // // //                       className="hover:text-3xl hover:text-orange-700 text-orange-500 text-2xl"
// // // // // // // //                     />
// // // // // // // //                   </li>
// // // // // // // //                 ))}
// // // // // // // //               </ul>
// // // // // // // //             ) : (
// // // // // // // //               <p className="text-4xl items-center justify-center mt-60 font-serif">
// // // // // // // //                 Your List is Empty!😔
// // // // // // // //               </p>
// // // // // // // //             )}
// // // // // // // //             {/* AddItems component */}
// // // // // // // //             <AddItems addNewItem={addNewItem} />
// // // // // // // //           </main>
// // // // // // // //         </div>
// // // // // // // //         <div className="mt-auto">
// // // // // // // //           <div className="bg-orange-600 border-black border-2 text-white flex items-center justify-center">
// // // // // // // //             <h4 className="text-2xl font-bold">
// // // // // // // //               {length} List {length === 1 ? 'item' : 'items'}
// // // // // // // //             </h4>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Body;


// // // // // // // import React, { useState } from 'react';
// // // // // // // import { MdDelete } from 'react-icons/md';
// // // // // // // import AddItems from './AddItems';

// // // // // // // const Body = () => {
// // // // // // //   const [Items, setItems] = useState([
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       checked: true,
// // // // // // //       item: 'Doing web Development',
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 2,
// // // // // // //       checked: false,
// // // // // // //       item: 'Doing Intern Work',
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 3,
// // // // // // //       checked: false,
// // // // // // //       item: 'Preparing yourself for the Placements',
// // // // // // //     },
// // // // // // //   ]);

// // // // // // //   const handleCheck = (id) => {
// // // // // // //     const listItems = Items.map((item) =>
// // // // // // //       item.id === id ? { ...item, checked: !item.checked } : item
// // // // // // //     );
// // // // // // //     setItems(listItems);
// // // // // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // // // // //   };

// // // // // // //   const handleDelete = (id) => {
// // // // // // //     const listItems = Items.filter((item) => item.id !== id);
// // // // // // //     setItems(listItems);
// // // // // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // // // // //   };

// // // // // // //   const addNewItem = (newItem) => {
// // // // // // //     const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
// // // // // // //     const newTask = { id, checked: false, item: newItem };
// // // // // // //     const updatedItems = [...Items, newTask];
// // // // // // //     setItems(updatedItems);
// // // // // // //     localStorage.setItem('todoList', JSON.stringify(updatedItems));
// // // // // // //   };

// // // // // // //   const length = Items.length;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* Flex container for main body */}
// // // // // // //       <div className="flex flex-col min-h-screen p-4 max-w-screen-lg mx-auto mt-5 mb-5" style={{ width: '80%' }}>
// // // // // // //         {/* Flex-grow for main content */}
// // // // // // //         <div className="flex-grow bg-white shadow-md border border-gray-300 rounded-lg p-6">
// // // // // // //           <main>
// // // // // // //             {Items.length ? (
// // // // // // //               <ul className="space-y-4">
// // // // // // //                 {Items.map((item) => (
// // // // // // //                   <li
// // // // // // //                     key={item.id}
// // // // // // //                     className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-md"
// // // // // // //                   >
// // // // // // //                     <div className="flex items-center space-x-2">
// // // // // // //                       <input
// // // // // // //                         type="checkbox"
// // // // // // //                         checked={item.checked}
// // // // // // //                         onClick={() => handleCheck(item.id)}
// // // // // // //                         className="h-5 w-5 accent-blue-500"
// // // // // // //                       />
// // // // // // //                       <label
// // // // // // //                         onClick={() => handleCheck(item.id)}
// // // // // // //                         className={`text-lg font-medium ${
// // // // // // //                           item.checked ? 'line-through' : ''
// // // // // // //                         }`}
// // // // // // //                       >
// // // // // // //                         {item.item}
// // // // // // //                       </label>
// // // // // // //                     </div>
// // // // // // //                     <MdDelete
// // // // // // //                       onClick={() => handleDelete(item.id)}
// // // // // // //                       role="button"
// // // // // // //                       className="hover:text-3xl hover:text-orange-700 text-orange-500 text-2xl"
// // // // // // //                     />
// // // // // // //                   </li>
// // // // // // //                 ))}
// // // // // // //               </ul>
// // // // // // //             ) : (
// // // // // // //               <p className="text-4xl items-center justify-center mt-60 font-serif">
// // // // // // //                 Your List is Empty!😔
// // // // // // //               </p>
// // // // // // //             )}
// // // // // // //             {/* AddItems component */}
// // // // // // //             <AddItems addNewItem={addNewItem} />
// // // // // // //           </main>
// // // // // // //         </div>

// // // // // // //         {/* Footer displaying list length */}
// // // // // // //         <div className="mt-auto">
// // // // // // //           <div className="bg-orange-600 border-black border-2 text-white flex items-center justify-center">
// // // // // // //             <h4 className="text-2xl font-bold">
// // // // // // //               {length} List {length === 1 ? 'item' : 'items'}
// // // // // // //             </h4>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Body;

// // // // // // import React, { useState } from 'react';
// // // // // // import { MdDelete } from 'react-icons/md';
// // // // // // import AddItems from './AddItems';

// // // // // // const Body = () => {
// // // // // //   const [Items, setItems] = useState([
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       checked: true,
// // // // // //       item: 'Doing web Development',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       checked: false,
// // // // // //       item: 'Doing Intern Work',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       checked: false,
// // // // // //       item: 'Preparing yourself for the Placements',
// // // // // //     },
// // // // // //   ]);

// // // // // //   const handleCheck = (id) => {
// // // // // //     const listItems = Items.map((item) =>
// // // // // //       item.id === id ? { ...item, checked: !item.checked } : item
// // // // // //     );
// // // // // //     setItems(listItems);
// // // // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // // // //   };

// // // // // //   const handleDelete = (id) => {
// // // // // //     const listItems = Items.filter((item) => item.id !== id);
// // // // // //     setItems(listItems);
// // // // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // // // //   };

// // // // // //   const addNewItem = (newItem) => {
// // // // // //     const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
// // // // // //     const newTask = { id, checked: false, item: newItem };
// // // // // //     const updatedItems = [...Items, newTask];
// // // // // //     setItems(updatedItems);
// // // // // //     localStorage.setItem('todoList', JSON.stringify(updatedItems));
// // // // // //   };

// // // // // //   const length = Items.length;

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* Flex container for main body */}
// // // // // //       <div className="flex flex-col min-h-min p-4 mx-auto mt-5 mb-5" style={{ width: '80%' }}>
// // // // // //         {/* Flex-grow for main content */}
// // // // // //         <div className="flex-grow bg-white shadow-md border-b-0 border-black border-x-4 border-y-4 rounded-lg p-6">
// // // // // //           <main>
// // // // // //             {Items.length ? (
// // // // // //               <ul className="space-y-4">
// // // // // //                 {Items.map((item) => (
// // // // // //                   <li
// // // // // //                     key={item.id}
// // // // // //                     className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-md"
// // // // // //                   >
// // // // // //                     <div className="flex items-center space-x-2">
// // // // // //                       <input
// // // // // //                         type="checkbox"
// // // // // //                         checked={item.checked}
// // // // // //                         onClick={() => handleCheck(item.id)}
// // // // // //                         className="h-5 w-5 accent-blue-500"
// // // // // //                       />
// // // // // //                       <label
// // // // // //                         onClick={() => handleCheck(item.id)}
// // // // // //                         className={`text-lg font-medium ${
// // // // // //                           item.checked ? 'line-through' : ''
// // // // // //                         }`}
// // // // // //                       >
// // // // // //                         {item.item}
// // // // // //                       </label>
// // // // // //                     </div>
// // // // // //                     <MdDelete
// // // // // //                       onClick={() => handleDelete(item.id)}
// // // // // //                       role="button"
// // // // // //                       className="hover:text-3xl hover:text-orange-700 text-orange-500 text-2xl"
// // // // // //                     />
// // // // // //                   </li>
// // // // // //                 ))}
// // // // // //               </ul>
// // // // // //             ) : (
// // // // // //               <p className="text-4xl items-center justify-items-center ml- mt-60 font-serif">
// // // // // //                 Your List is Empty!😔
// // // // // //               </p>
// // // // // //             )}
// // // // // //             {/* AddItems component */}
// // // // // //             <AddItems addNewItem={addNewItem} />
// // // // // //           </main>
// // // // // //         </div>

// // // // // //         {/* Footer displaying list length */}
// // // // // //         <div className="mt-aut0">
// // // // // //           <div className="bg-orange-600 border-black border-2 border-t-0 text-white flex items-center justify-center">
// // // // // //             <h4 className="text-2xl font-bold">
// // // // // //               {length} List {length === 1 ? 'item' : 'items'}
// // // // // //             </h4>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default Body;

// // // // // import React, { useState } from 'react';
// // // // // import { MdDelete } from 'react-icons/md';
// // // // // import AddItems from './AddItems';

// // // // // const Body = () => {
// // // // //   const [Items, setItems] = useState([
// // // // //     {
// // // // //       id: 1,
// // // // //       checked: true,
// // // // //       item: 'Doing web Development',
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       checked: false,
// // // // //       item: 'Doing Intern Work',
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       checked: false,
// // // // //       item: 'Preparing yourself for the Placements',
// // // // //     },
// // // // //   ]);

// // // // //   const handleCheck = (id) => {
// // // // //     const listItems = Items.map((item) =>
// // // // //       item.id === id ? { ...item, checked: !item.checked } : item
// // // // //     );
// // // // //     setItems(listItems);
// // // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // // //   };

// // // // //   const handleDelete = (id) => {
// // // // //     const listItems = Items.filter((item) => item.id !== id);
// // // // //     setItems(listItems);
// // // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // // //   };

// // // // //   const addNewItem = (newItem) => {
// // // // //     const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
// // // // //     const newTask = { id, checked: false, item: newItem };
// // // // //     const updatedItems = [...Items, newTask];
// // // // //     setItems(updatedItems);
// // // // //     localStorage.setItem('todoList', JSON.stringify(updatedItems));
// // // // //   };

// // // // //   const length = Items.length;

// // // // //   return (
// // // // //     <>
// // // // //       {/* Flex container for main body */}
// // // // //       <div className="flex flex-col min-h-min p-4 mx-auto mt-5 mb-5" style={{ width: '80%' }}>
// // // // //         {/* Flex-grow for main content */}
// // // // //         <div className="flex-grow bg-white shadow-md border border-black rounded-lg p-6">
// // // // //           <main>
// // // // //             {length ? (
// // // // //               <ul className="space-y-4">
// // // // //                 {Items.map((item) => (
// // // // //                   <li
// // // // //                     key={item.id}
// // // // //                     className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-md"
// // // // //                   >
// // // // //                     <div className="flex items-center space-x-2">
// // // // //                       <input
// // // // //                         type="checkbox"
// // // // //                         checked={item.checked}
// // // // //                         onClick={() => handleCheck(item.id)}
// // // // //                         className="h-5 w-5 accent-blue-500"
// // // // //                       />
// // // // //                       <label
// // // // //                         onClick={() => handleCheck(item.id)}
// // // // //                         className={`text-lg font-medium ${item.checked ? 'line-through' : ''}`}
// // // // //                       >
// // // // //                         {item.item}
// // // // //                       </label>
// // // // //                     </div>
// // // // //                     <MdDelete
// // // // //                       onClick={() => handleDelete(item.id)}
// // // // //                       role="button"
// // // // //                       className="hover:text-3xl hover:text-orange-700 text-orange-500 text-2xl"
// // // // //                     />
// // // // //                   </li>
// // // // //                 ))}
// // // // //               </ul>
// // // // //             ) : (
// // // // //               <div className="flex flex-col items-center justify-center mt-60">
// // // // //                 <p className="text-4xl font-serif">Your List is Empty!😔</p>
// // // // //                 <AddItems addNewItem={addNewItem} />
// // // // //               </div>
// // // // //             )}
// // // // //           </main>
// // // // //         </div>

// // // // //         {/* Footer displaying list length */}
// // // // //         <div className="mt-auto">
// // // // //           <div className="bg-orange-600 border border-black text-white flex items-center justify-center">
// // // // //             <h4 className="text-2xl font-bold">
// // // // //               {length} List {length === 1 ? 'item' : 'items'}
// // // // //             </h4>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Body;

// // // // import React, { useState } from 'react';
// // // // import { MdDelete } from 'react-icons/md';
// // // // import AddItems from './AddItems';

// // // // const Body = () => {
// // // //   const [Items, setItems] = useState([
// // // //     {
// // // //       id: 1,
// // // //       checked: true,
// // // //       item: 'Doing web Development',
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       checked: false,
// // // //       item: 'Doing Intern Work',
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       checked: false,
// // // //       item: 'Preparing yourself for the Placements',
// // // //     },
// // // //   ]);

// // // //   const handleCheck = (id) => {
// // // //     const listItems = Items.map((item) =>
// // // //       item.id === id ? { ...item, checked: !item.checked } : item
// // // //     );
// // // //     setItems(listItems);
// // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // //   };

// // // //   const handleDelete = (id) => {
// // // //     const listItems = Items.filter((item) => item.id !== id);
// // // //     setItems(listItems);
// // // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // // //   };

// // // //   const addNewItem = (newItem) => {
// // // //     const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
// // // //     const newTask = { id, checked: false, item: newItem };
// // // //     const updatedItems = [...Items, newTask];
// // // //     setItems(updatedItems);
// // // //     localStorage.setItem('todoList', JSON.stringify(updatedItems));
// // // //   };

// // // //   const length = Items.length;

// // // //   return (
// // // //     <>
// // // //       {/* Flex container for main body */}
// // // //       <div className="flex flex-col min-h-min p-4 mx-auto mt-5 mb-5 " style={{ width: '80%' }}>        {/* Flex-grow for main content */}
// // // //         <div className="flex-grow bg-white shadow-md border-4 border-red-700 border-b-0  p-6">
// // // //           <main>
// // // //             {Items.length ? (
// // // //               <ul className="space-y-4">
// // // //                 {Items.map((item) => (
// // // //                   <li
// // // //                     key={item.id}
// // // //                     className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-md"
// // // //                   >
// // // //                     <div className="flex items-center space-x-2">
// // // //                       <input
// // // //                         type="checkbox"
// // // //                         checked={item.checked}
// // // //                         onClick={() => handleCheck(item.id)}
// // // //                         className="h-5 w-5 accent-blue-500"
// // // //                       />
// // // //                       <label
// // // //                         onClick={() => handleCheck(item.id)}
// // // //                         className={`text-lg font-medium ${
// // // //                           item.checked ? 'line-through' : ''
// // // //                         }`}
// // // //                       >
// // // //                         {item.item}
// // // //                       </label>
// // // //                     </div>
// // // //                     <MdDelete
// // // //                       onClick={() => handleDelete(item.id)}
// // // //                       role="button"
// // // //                       className="hover:text-3xl hover:text-orange-700 text-orange-500 text-2xl"
// // // //                     />
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //             ) : (
// // // //               <p className="text-4xl items-center justify-center  ml-20 mt-60 font-serif">
// // // //                 Your List is Empty!😔
// // // //               </p>
// // // //             )}
// // // //             {/* AddItems component */}
// // // //             <AddItems addNewItem={addNewItem} />
// // // //           </main>
// // // //         </div>

// // // //         {/* Footer displaying list length */}
// // // //         <div className="mt-auto">
// // // //           <div className="bg-orange-600 border-red-700 border-4 border-r-4 border-t-0  text-white flex items-center justify-center">
// // // //             <h4 className="text-2xl font-bold">
// // // //               {length} List {length === 1 ? 'item' : 'items'}
// // // //             </h4>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Body;

// // // import React, { useState } from 'react';
// // // import { MdDelete } from 'react-icons/md';
// // // import AddItems from './AddItems';
// // // import SearchItem from './SearchItem'; // Import SearchItem component

// // // const Body = () => {
// // //   const [Items, setItems] = useState([
// // //     { id: 1, checked: true, item: 'Doing web Development' },
// // //     { id: 2, checked: false, item: 'Doing Intern Work' },
// // //     { id: 3, checked: false, item: 'Preparing yourself for the Placements' },
// // //   ]);
  
// // //   const [title, setTitle] = useState('My Todo List'); // State for the title
// // //   const [searchQuery, setSearchQuery] = useState('');

// // //   const handleCheck = (id) => {
// // //     const listItems = Items.map((item) =>
// // //       item.id === id ? { ...item, checked: !item.checked } : item
// // //     );
// // //     setItems(listItems);
// // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // //   };

// // //   const handleDelete = (id) => {
// // //     const listItems = Items.filter((item) => item.id !== id);
// // //     setItems(listItems);
// // //     localStorage.setItem('todoList', JSON.stringify(listItems));
// // //   };

// // //   const addNewItem = (newItem) => {
// // //     const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
// // //     const newTask = { id, checked: false, item: newItem };
// // //     const updatedItems = [...Items, newTask];
// // //     setItems(updatedItems);
// // //     localStorage.setItem('todoList', JSON.stringify(updatedItems));
// // //   };

// // //   const handleSearch = (e) => {
// // //     setSearchQuery(e.target.value);
// // //   };

// // //   const filteredItems = Items.filter(item => 
// // //     item.item.toLowerCase().includes(searchQuery.toLowerCase())
// // //   );

// // //   const length = filteredItems.length;

// // //   return (
// // //     <>
// // //       <div className="flex flex-col min-h-min p-4 mx-auto mt-5 mb-5" style={{ width: '80%' }}>
// // //         <div className="flex-grow bg-white shadow-md border-4 border-red-700 border-b-0 p-6">
// // //           <div className="flex items-center justify-between mb-4">
// // //             <input
// // //               type="text"
// // //               value={title}
// // //               onChange={(e) => setTitle(e.target.value)}
// // //               className="border border-gray-300 p-2 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-500"
// // //               placeholder="Edit List Title"
// // //             />
// // //             <SearchItem searchQuery={searchQuery} handleSearch={handleSearch} />
// // //           </div>
// // //           <main>
// // //             {filteredItems.length ? (
// // //               <ul className="space-y-4">
// // //                 {filteredItems.map((item) => (
// // //                   <li
// // //                     key={item.id}
// // //                     className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-md"
// // //                   >
// // //                     <div className="flex items-center space-x-2">
// // //                       <input
// // //                         type="checkbox"
// // //                         checked={item.checked}
// // //                         onClick={() => handleCheck(item.id)}
// // //                         className="h-5 w-5 accent-blue-500"
// // //                       />
// // //                       <label
// // //                         onClick={() => handleCheck(item.id)}
// // //                         className={`text-lg font-medium ${item.checked ? 'line-through' : ''}`}
// // //                       >
// // //                         {item.item}
// // //                       </label>
// // //                     </div>
// // //                     <MdDelete
// // //                       onClick={() => handleDelete(item.id)}
// // //                       role="button"
// // //                       className="hover:text-3xl hover:text-orange-700 text-orange-500 text-2xl"
// // //                     />
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             ) : (
// // //               <p className="text-4xl items-center justify-center ml-20 mt-60 font-serif">
// // //                 Your List is Empty!😔
// // //               </p>
// // //             )}
// // //             {/* AddItems component */}
// // //             <AddItems addNewItem={addNewItem} />
// // //           </main>
// // //         </div>

// // //         {/* Footer displaying list length */}
// // //         <div className="mt-auto">
// // //           <div className="bg-orange-600 border-red-700 border-4 border-r-4 border-t-0 text-white flex items-center justify-center">
// // //             <h4 className="text-2xl font-bold">
// // //               {length} List {length === 1 ? 'item' : 'items'}
// // //             </h4>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Body;

// // import React, { useState } from 'react';
// // import { MdDelete } from 'react-icons/md';
// // import AddItems from './AddItems';
// // import SearchItem from './SearchItem';

// // const Body = () => {
// //   const [Items, setItems] = useState([
// //     { id: 1, checked: true, item: 'Doing web Development' },
// //     { id: 2, checked: false, item: 'Doing Intern Work' },
// //     { id: 3, checked: false, item: 'Preparing yourself for the Placements' },
// //   ]);

// //   const [title, setTitle] = useState('My Todo List');
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const handleCheck = (id) => {
// //     const listItems = Items.map((item) =>
// //       item.id === id ? { ...item, checked: !item.checked } : item
// //     );
// //     setItems(listItems);
// //     localStorage.setItem('todoList', JSON.stringify(listItems));
// //   };

// //   const handleDelete = (id) => {
// //     const listItems = Items.filter((item) => item.id !== id);
// //     setItems(listItems);
// //     localStorage.setItem('todoList', JSON.stringify(listItems));
// //   };

// //   const addNewItem = (newItem) => {
// //     const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
// //     const newTask = { id, checked: false, item: newItem };
// //     const updatedItems = [...Items, newTask];
// //     setItems(updatedItems);
// //     localStorage.setItem('todoList', JSON.stringify(updatedItems));
// //   };

// //   const handleSearch = (e) => {
// //     setSearchQuery(e.target.value);
// //   };

// //   const filteredItems = Items.filter(item =>
// //     item.item.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   const length = filteredItems.length;

// //   return (
// //     <>
// //       <div className="flex flex-col min-h-min p-4 mx-auto mt-5 mb-5" style={{ width: '80%' }}>
// //         <div className="flex-grow bg-white shadow-md border-4 border-red-700 border-b-0 p-6">
// //           <div className="flex items-center justify-between mb-4">
// //             <input
// //               type="text"
// //               value={title}
// //               onChange={(e) => setTitle(e.target.value)}
// //               className="border border-gray-300 p-3 rounded-md w-2/3 focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold text-xl"
// //               placeholder="Edit List Title"
// //             />
// //             <SearchItem searchQuery={searchQuery} handleSearch={handleSearch} />
// //           </div>
// //           <main>
// //             {filteredItems.length ? (
// //               <ul className="space-y-4">
// //                 {filteredItems.map((item) => (
// //                   <li
// //                     key={item.id}
// //                     className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-md transition-transform transform hover:scale-105"
// //                   >
// //                     <div className="flex items-center space-x-2">
// //                       <input
// //                         type="checkbox"
// //                         checked={item.checked}
// //                         onClick={() => handleCheck(item.id)}
// //                         className="h-5 w-5 accent-blue-500"
// //                       />
// //                       <label
// //                         onClick={() => handleCheck(item.id)}
// //                         className={`text-lg font-medium ${item.checked ? 'line-through' : ''}`}
// //                       >
// //                         {item.item}
// //                       </label>
// //                     </div>
// //                     <MdDelete
// //                       onClick={() => handleDelete(item.id)}
// //                       role="button"
// //                       className="hover:text-3xl hover:text-orange-700 text-orange-500 text-2xl transition-colors"
// //                     />
// //                   </li>
// //                 ))}
// //               </ul>
// //             ) : (
// //               <p className="text-4xl items-center justify-center ml-20 mt-60 font-serif">
// //                 Your List is Empty!😔
// //               </p>
// //             )}
// //             <AddItems addNewItem={addNewItem} />
// //           </main>
// //         </div>

// //         <div className="mt-auto">
// //           <div className="bg-orange-600 border-red-700 border-4 border-r-4 border-t-0 text-white flex items-center justify-center">
// //             <h4 className="text-2xl font-bold">
// //               {length} List {length === 1 ? 'item' : 'items'}
// //             </h4>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Body;


// import React, { useState } from 'react';
// import { MdDelete } from 'react-icons/md';
// import AddItems from './AddItems';
// import SearchItem from './SearchItem';

// const Body = () => {
//   const [Items, setItems] = useState([
//     { id: 1, checked: true, item: 'Doing web Development' },
//     { id: 2, checked: false, item: 'Doing Intern Work' },
//     { id: 3, checked: false, item: 'Preparing yourself for the Placements' },
//   ]);

//   const [title, setTitle] = useState('My Todo List');
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleCheck = (id) => {
//     const listItems = Items.map((item) =>
//       item.id === id ? { ...item, checked: !item.checked } : item
//     );
//     setItems(listItems);
//     localStorage.setItem('todoList', JSON.stringify(listItems));
//   };

//   const handleDelete = (id) => {
//     const listItems = Items.filter((item) => item.id !== id);
//     setItems(listItems);
//     localStorage.setItem('todoList', JSON.stringify(listItems));
//   };

//   const addNewItem = (newItem) => {
//     const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
//     const newTask = { id, checked: false, item: newItem };
//     const updatedItems = [...Items, newTask];
//     setItems(updatedItems);
//     localStorage.setItem('todoList', JSON.stringify(updatedItems));
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredItems = Items.filter(item =>
//     item.item.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const length = filteredItems.length;

//   return (
//     <>
//       <div className="flex flex-col min-h-min p-4 mx-auto mt-5 mb-5" style={{ width: '80%' }}>
//         <div className="flex-grow bg-white shadow-md border-4 border-red-700 border-b-0 p-6">
//           <div className="flex items-center justify-between mb-4">
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="border border-gray-300 p-3 rounded-md w-2/3 focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold text-xl"
//               placeholder="Edit List Title"
//             />
//             <SearchItem searchQuery={searchQuery} handleSearch={handleSearch} />
//           </div>
//           <main>
//             {filteredItems.length ? (
//               <ul className="space-y-4">
//                 {filteredItems.map((item) => (
//                   <li
//                     key={item.id}
//                     className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-md transition-transform transform hover:scale-105"
//                   >
//                     <div className="flex items-center space-x-2">
//                       <input
//                         type="checkbox"
//                         checked={item.checked}
//                         onClick={() => handleCheck(item.id)}
//                         className="h-5 w-5 accent-blue-500"
//                       />
//                       <label
//                         onClick={() => handleCheck(item.id)}
//                         className={`text-lg font-medium ${item.checked ? 'line-through' : ''}`}
//                       >
//                         {item.item}
//                       </label>
//                     </div>
//                     <MdDelete
//                       onClick={() => handleDelete(item.id)}
//                       role="button"
//                       className="hover:text-3xl hover:text-orange-700 text-orange-500 text-2xl transition-colors"
//                     />
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-4xl items-center justify-center ml-20 mt-60 font-serif">
//                 Your List is Empty!😔
//               </p>
//             )}
//             <AddItems addNewItem={addNewItem} />
//           </main>
//         </div>

//         <div className="mt-auto">
//           <div className="bg-orange-600 border-red-700 border-4 border-r-4 border-t-0 text-white flex items-center justify-center">
//             <h4 className="text-2xl font-bold">
//               {length} List {length === 1 ? 'item' : 'items'}
//             </h4>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Body;


import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import AddItems from './AddItems';
import SearchItem from './SearchItem';

const Body = () => {
  const [Items, setItems] = useState([
    { id: 1, checked: true, item: 'Doing web Development' },
    { id: 2, checked: false, item: 'Doing Intern Work' },
    { id: 3, checked: false, item: 'Preparing yourself for the Placements' },
  ]);

  const [title, setTitle] = useState('My Todo List');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleCheck = (id) => {
    const listItems = Items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('todoList', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = Items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('todoList', JSON.stringify(listItems));
  };

  const addNewItem = (newItem) => {
    const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
    const newTask = { id, checked: false, item: newItem };
    const updatedItems = [...Items, newTask];
    setItems(updatedItems);
    localStorage.setItem('todoList', JSON.stringify(updatedItems));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = Items.filter(item =>
    item.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const length = filteredItems.length;

  return (
    <>
      <div className="flex flex-col min-h-min p-4 mx-auto mt-5 mb-5" style={{ width: '80%' }}>
        <div className="flex-grow bg-white shadow-md border-4 border-red-700 border-b-0 p-6">
          <div className="flex items-center justify-between mb-4">
            {/* Title should disappear when search is active */}
            {!isSearchActive && (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-3 rounded-xl w-auto z-10 focus:outline-none font-bold text-2xl "
                placeholder="Edit List Title"
              />
            )}
            <SearchItem
              searchQuery={searchQuery}
              handleSearch={handleSearch}
              isSearchActive={isSearchActive}
              setIsSearchActive={setIsSearchActive}
            />
          </div>
          <main>
            {filteredItems.length ? (
              <ul className="space-y-4">
                {filteredItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-md transition-transform transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onClick={() => handleCheck(item.id)}
                        className="h-5 w-5 accent-blue-500"
                      />
                      <label
                        onClick={() => handleCheck(item.id)}
                        className={`text-lg font-medium ${item.checked ? 'line-through' : ''}`}
                      >
                        {item.item}
                      </label>
                    </div>
                    <MdDelete
                      onClick={() => handleDelete(item.id)}
                      role="button"
                      className="hover:text-3xl hover:text-orange-700 text-orange-500 text-2xl transition-colors"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-4xl items-center justify-center ml-20 mt-60 font-serif">
                Your List is Empty!😔
              </p>
            )}
            <AddItems addNewItem={addNewItem} />
          </main>
        </div>

        <div className="mt-auto">
          <div className="bg-orange-600 border-red-700 border-4 border-r-4 border-t-0 text-white flex items-center justify-center">
            <h4 className="text-2xl font-bold">
              {length} List {length === 1 ? 'item' : 'items'}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
