
// import React from 'react';

// const Comp2 = () => {
//   return (
//     <div className="bg-white rounded-2lg p-4 shadow-md  ml-1.5 relative h-15 ">
//         <div className="flex justify-center items-center space-x-2">
//         <span className="material-icons text-gray-500 cursor-pointer">⬅️</span>
//         <div className="flex space-x-2">
//           <button className="bg-white text-2xl text-gray-500 font-semibold py-1 px-3 rounded-full hover:bg-purple-200 transition duration-300">
//             1
//           </button>
//           <button className="bg-white text-2xl text-gray-500 font-semibold py-1 px-3 rounded-full hover:bg-purple-200 transition duration-300">
//             2
//           </button>
//           {/* Add more buttons as needed */}
//           <span className="text-gray-500 font-semibold py-1">...</span>
//           <button className="bg-white text-2xl text-gray-500 font-semibold py-1 px-3 rounded-full hover:bg-purple-200 transition duration-300">
//             25
//           </button>
//           <button className="bg-white text-2xl text-gray-500 font-semibold py-1 px-3 rounded-full hover:bg-purple-200 transition duration-300">
//             26
//           </button>
//         </div>
//         <span className="material-icons text-gray-500 cursor-pointer">➡️</span>
//       </div>
// </div>
//   );
// };

// export default Comp2;


import React from 'react';

const Comp2 = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2lg p-4 shadow-md ml-1.5 relative h-15">
      <div className="flex justify-center items-center space-x-2">
        <span className="material-icons text-gray-500 dark:text-white cursor-pointer">⬅️</span>
        <div className="flex space-x-2">
          <button className="bg-white dark:bg-gray-600 text-2xl text-gray-500 dark:text-white font-semibold py-1 px-3 rounded-full hover:bg-purple-200 dark:hover:bg-purple-600 transition duration-300">
            1
          </button>
          <button className="bg-white dark:bg-gray-600 text-2xl text-gray-500 dark:text-white font-semibold py-1 px-3 rounded-full hover:bg-purple-200 dark:hover:bg-purple-600 transition duration-300">
            2
          </button>
          {/* Add more buttons as needed */}
          <span className="text-gray-500 dark:text-white font-semibold py-1">...</span>
          <button className="bg-white dark:bg-gray-600 text-2xl text-gray-500 dark:text-white font-semibold py-1 px-3 rounded-full hover:bg-purple-200 dark:hover:bg-purple-600 transition duration-300">
            25
          </button>
          <button className="bg-white dark:bg-gray-600 text-2xl text-gray-500 dark:text-white font-semibold py-1 px-3 rounded-full hover:bg-purple-200 dark:hover:bg-purple-600 transition duration-300">
            26
          </button>
        </div>
        <span className="material-icons text-gray-500 dark:text-white cursor-pointer">➡️</span>
      </div>
    </div>
  );
};

export default Comp2;
