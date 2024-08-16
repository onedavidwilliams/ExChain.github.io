import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CustomDropdown = ({ options, placeholder, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  // Ensure the dropdown width stays consistent
  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.style.minWidth = `${dropdownRef.current.offsetWidth}px`;
    }
  }, [dropdownRef, value]);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Include the placeholder as a selectable option
  const allOptions = [{ value: '', label: placeholder }, ...options];

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="bg-gray-700 border border-blue-400 text-gray-100 p-2 rounded-lg cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        style={{ minWidth: '180px' }}  // Set a minimum width to prevent wrapping
      >
        <span className="truncate">
          {value ? allOptions.find(option => option.value === value).label : placeholder}
        </span>
        <FontAwesomeIcon icon={faChevronDown} className="text-blue-400 ml-2" />
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-gray-700 border border-blue-400 rounded-lg z-10 overflow-hidden">
          {allOptions.map(option => (
            <div
              key={option.value}
              className="p-2 hover:bg-gray-600 text-blue-400 cursor-pointer"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
