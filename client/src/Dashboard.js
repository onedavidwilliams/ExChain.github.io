import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faChartPie, faComments, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Chat from './Chat';  // Assuming Chat.js is in the same directory

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <div className="text-gray-100 p-4">Welcome to the Dashboard</div>;
      case 'Overview':
        return <div className="text-gray-100 p-4">Overview of your application</div>;
      case 'Chat':
        return <Chat />;
      case 'About':
        return <div className="text-gray-100 p-4">About this application</div>;
      default:
        return <div className="text-gray-100 p-4">Welcome to the Dashboard</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Left Menu for PC */}
      <div className="w-64 bg-gray-800 flex flex-col hidden md:flex">
        <div className="text-white text-lg font-semibold p-4">ExChain</div>
        <div className="flex-grow">
          <div
            className="flex items-center p-4 cursor-pointer hover:bg-gray-700 text-white"
            onClick={() => setSelectedComponent('Dashboard')}
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="text-blue-400 mr-3" />
            Dashboard
          </div>
          <div
            className="flex items-center p-4 cursor-pointer hover:bg-gray-700 text-white"
            onClick={() => setSelectedComponent('Overview')}
          >
            <FontAwesomeIcon icon={faChartPie} className="text-blue-400 mr-3" />
            Overview
          </div>
          <div
            className="flex items-center p-4 cursor-pointer hover:bg-gray-700 text-white"
            onClick={() => setSelectedComponent('Chat')}
          >
            <FontAwesomeIcon icon={faComments} className="text-blue-400 mr-3" />
            Chat
          </div>
          <div
            className="flex items-center p-4 cursor-pointer hover:bg-gray-700 text-white"
            onClick={() => setSelectedComponent('About')}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="text-blue-400 mr-3" />
            About
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Top Bar */}
        <div className="bg-gray-800 p-4 text-white text-lg">
          {selectedComponent}
        </div>

        {/* Content Area */}
        <div className="flex-grow bg-gray-900 p-4">
          {renderComponent()}
        </div>
      </div>

      {/* Bottom Navigation Bar for Mobile Screens */}
      <div className="bg-gray-800 p-4 flex justify-around items-center fixed bottom-0 left-0 w-full md:hidden">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setSelectedComponent('Dashboard')}
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="text-blue-400" />
          <span className="text-white text-sm">Dashboard</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setSelectedComponent('Overview')}
        >
          <FontAwesomeIcon icon={faChartPie} className="text-blue-400" />
          <span className="text-white text-sm">Overview</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setSelectedComponent('Chat')}
        >
          <FontAwesomeIcon icon={faComments} className="text-blue-400" />
          <span className="text-white text-sm">Chat</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setSelectedComponent('About')}
        >
          <FontAwesomeIcon icon={faInfoCircle} className="text-blue-400" />
          <span className="text-white text-sm">About</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
