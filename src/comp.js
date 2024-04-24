import Compt from './date';
import Compt1 from './date1';
import Comp2 from './date2';
import React from 'react';
import myimg from './map.png';

const RightSideBar = () => {
  return (
    <div className="bg-blue-200 dark:bg-gray-600 px-2 h-screen flex flex-col">
      <div className="flex justify-between items-center pt-2">
        <div className="flex">
          <button className="bg-white py-2 px-4 rounded-l-md hover:text-blue-600 rounded-3lg font-semibold">AWB Status</button>
          <button className="bg-gray-100 py-2 px-4 font-semibold rounded-3lg hover:text-blue-600">Additional Info</button>
          <button className="bg-gray-100 py-2 px-4 font-semibold rounded-r-md rounded-3lg hover:text-blue-600">Shipment</button>
        </div>
        <button className="bg-gray-50 text-blue-500 font-semibold mb-1 py-1 px-2 rounded-md hover:bg-gray-100">📩 Send Status</button>
      </div>

      <div className="bg-white dark:bg-gray-900 pt-4 pb-2 md:h-full md:py-4 shadow-md">
        <h1 className="px-2 py-2 font-serif font-semibold dark:text-white">AWB Status Update</h1>
        <div className="bg-white dark:bg-gray-800 h-screen-full mx-3 border shadow-3lg overflow-auto md:overflow-visible">
          <div className="flex justify-between items-center">
            <h1 className="mx-2 dark:text-white">15.30.05.10.2022</h1>
            <button className="bg-green-100 dark:bg-yellow-300 my-2 font-serif h-9 w-18 mr-4 md:mr-20 rounded-3xl text-green-400 font-semibold px-2 hover:bg-green-200  dark:text-black dark:hover:bg-yellow-400">New ▶️</button>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2lg p-4 shadow-md mr-4 md:mr-20 ml-2 relative h-auto border border-gray-200">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-300 mb-2">Airway Bill Number</p>
                <p className="font-semibold dark:text-white">87453298723</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-300 mb-2">Order ID</p>
                <p className="font-semibold dark:text-white">87453298723</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-300 mb-2">Order ID</p>
                <p className="font-semibold dark:text-white my-3">10.11.2022 10:15</p>
              </div>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-300 mb-2">Customer Id</p>
              <p className="font-semibold dark:text-white">cse210001011</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-300 mb-2">Remarks</p>
              <p className="font-semibold dark:text-white">REMARKS REMARKS REMARKS REMARKS</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2lg p-2 shadow-md mr-4 md:mr-20 ml-2 relative h-auto border border-gray-200">
            <h1 className="font-semibold mx-4 font-serif dark:text-white">Location</h1>
            <img
              src={myimg}
              alt="Location"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="mx-2 dark:text-white">15.30.05.10.2022</h1>
            <button className="bg-green-100 dark:bg-yellow-300 my-2 font-serif h-9 w-18 mr-4 md:mr-20 rounded-3xl text-green-400 font-semibold px-2 hover:bg-green-200  dark:text-black dark:hover:bg-yellow-400">New ▶️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Comp = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-gray-200 dark:bg-gray-500">
      
      <div className="w-full md:w-1/3"> {/* Adjusted width for responsiveness */}
        <Compt />
        <Compt />
        <Compt />
        <Compt />
        <Compt />
        <Compt1 />
        <Compt1 />
        <Compt1 />
        <Compt1 />
        <Comp2 />
      </div>
      <div className="w-full md:w-2/3"> {/* Adjusted width for responsiveness */}
        <RightSideBar /> {/* Moved to the left for responsiveness */}
      </div>
    </div>
  );
};

export default Comp;
