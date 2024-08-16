import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import CustomDropdown from './CustomDropdown';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-900">
      <div
        className="flex flex-col p-4 bg-gray-800 text-gray-100 rounded-lg shadow-lg chat-container w-full max-w-lg h-3/4"
      >
        <style>
          {`
            @media (max-width: 768px) {
              .chat-container {
                width: 90vw;
                height: 65vh;  /* Adjust height for mobile to prevent overlap */
              }
            }
          `}
        </style>

        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">ExChain - Chat UI</h2>
          <CustomDropdown
            options={[
              { value: 'model1', label: 'Model 1' },
              { value: 'model2', label: 'Model 2' },
              { value: 'model3', label: 'Model 3' },
            ]}
            placeholder="Please Select Model"
            value={selectedModel}
            onChange={setSelectedModel}
          />
        </div>

        <div className="flex-grow overflow-y-auto bg-gray-700 p-4 rounded-lg shadow-inner">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <div className="bg-blue-600 text-gray-100 p-3 rounded-lg inline-block">
                {message}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center relative">
          <input
            className="flex-grow p-2 pr-10 bg-gray-700 border border-blue-400 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
          />
          <button
            className="absolute right-2 text-blue-400 hover:text-blue-300 focus:outline-none"
            onClick={handleSend}
          >
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </button>
        </div>
      </div>

      {/* Bottom padding to prevent overlap */}
      <div style={{ paddingBottom: '100px' }} />
    </div>
  );
};

export default Chat;
