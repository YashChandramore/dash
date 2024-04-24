

// import React from 'react';

// const DashboardSection = () => {
//   return (
//     <div className="bg-gray-200 py-4 dark:bg-gray-500">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-sans dark:text-white font-semibold mx-2 mb-4">Dashboard</h2>
//         <div className="flex justify-between">
//           <div className="bg-white dark:bg-gray-300 rounded-3xl p-4 shadow-md w-1/3 mx-2 relative h-40">
//             <p className="text-gray-500 dark:text-gray-300 mb-2">Packages in Transit</p>
//             <div className="absolute top-2 right-2 flex flex-col">
//               <span className="material-icons text-gray-500">
//                 <img src='https://i.pinimg.com/564x/76/e8/91/76e89177f30da49cf83f69731cf30979.jpg' className="h-20 w-20 p-1" alt="Package in Transit" />
//               </span>
//             </div>
//             <div className="flex items-end h-full">
//               <span className="text-5xl py-12 font-medium">12</span>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-gray-300 rounded-3xl p-4 shadow-md w-1/3 mx-2 relative h-40">
//             <p className="text-gray-500 dark:text-gray-300 mb-2">Packages Delivered</p>
//             <div className="absolute top-2 right-2 flex flex-col">
//               <span className="material-icons text-gray-500">
//                 <img src='https://static.vecteezy.com/system/resources/thumbnails/011/232/761/small/cube-geometric-shape-isolated-free-vector.jpg' className="h-20 w-20 p-1" alt="Packages Delivered" />
//               </span>
//             </div>
//             <div className="flex items-end h-full py-12">
//               <div className="flex items-center">
//                 <span className="text-5xl font-bold mr-2">39</span>
//                 <button className="bg-green-100 h-9 w-18 rounded-3xl text-green-800 font-bold px-2">
//                   +14↗️
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-gray-300 rounded-3xl p-4 shadow-md w-1/3 mx-2 relative h-40">
//             <p className="text-gray-500 dark:text-gray-300 mb-2">Total snippets</p>
//             <div className="absolute top-2 right-2 flex flex-col">
//               <span className="material-icons text-gray-500">
//                 <img src='https://static.vecteezy.com/system/resources/thumbnails/023/017/024/small/geometric-shapes-cuboid-icon-illustration-vector.jpg' className="h-20 w-40 p-1" alt="Total Snippets" />
//               </span>
//             </div>
//             <div className="flex items-end h-full py-12">
//               <div className="flex items-center">
//                 <span className="text-5xl font-bold mr-2">39</span>
//                 <button className="bg-green-100 h-9 w-18 rounded-3xl text-green-800 font-bold px-2">
//                   +14↗️
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardSection;


import React from 'react';

const DashboardSection = () => {
  return (
    <div className="bg-gray-200 py-4 dark:bg-gray-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-sans dark:text-white font-semibold mx-2 mb-4">Dashboard</h2>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="bg-white dark:bg-gray-300 rounded-3xl p-4 shadow-md w-full sm:w-1/3 mx-2 relative h-40 mb-4 sm:mb-0">
            <p className="text-gray-500 dark:text-gray-300 mb-2">Packages in Transit</p>
            <div className="absolute top-2 right-2 flex flex-col">
              <img src='https://i.pinimg.com/564x/76/e8/91/76e89177f30da49cf83f69731cf30979.jpg' className="h-20 w-20 p-1" alt="Package in Transit" />
            </div>
            <div className="flex items-end h-full">
              <span className="text-5xl py-12 font-medium">12</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-300 rounded-3xl p-4 shadow-md w-full sm:w-1/3 mx-2 relative h-40 mb-4 sm:mb-0">
            <p className="text-gray-500 dark:text-gray-300 mb-2">Packages Delivered</p>
            <div className="absolute top-2 right-2 flex flex-col">
              <img src='https://static.vecteezy.com/system/resources/thumbnails/011/232/761/small/cube-geometric-shape-isolated-free-vector.jpg' className="h-20 w-20 p-1" alt="Packages Delivered" />
            </div>
            <div className="flex items-end h-full py-12">
              <div className="flex items-center">
                <span className="text-5xl font-bold mr-2">39</span>
                <button className="bg-green-100 h-9 w-18 rounded-3xl text-green-800 font-bold px-2">
                  +14↗️
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-300 rounded-3xl p-4 shadow-md w-full sm:w-1/3 mx-2 relative h-40">
            <p className="text-gray-500 dark:text-gray-300 mb-2">Total snippets</p>
            <div className="absolute top-2 right-2 flex flex-col">
              <img src='https://static.vecteezy.com/system/resources/thumbnails/023/017/024/small/geometric-shapes-cuboid-icon-illustration-vector.jpg' className="h-20 w-40 p-1" alt="Total Snippets" />
            </div>
            <div className="flex items-end h-full py-12">
              <div className="flex items-center">
                <span className="text-5xl font-bold mr-2">39</span>
                <button className="bg-green-100 h-9 w-18 rounded-3xl text-green-800 font-bold px-2">
                  +14↗️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
