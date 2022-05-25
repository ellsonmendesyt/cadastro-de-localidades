import React from 'react'
import  './Dropdown.css';



const Dropdown = () => {
  return (
    <div className="dropdown">
    <button className="dropbtn">
          <svg class xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"  width="20" height="20" focusable="false">
          <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
        </svg>
    </button>
    
    <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </div>
  </div>
  )
}

export default Dropdown