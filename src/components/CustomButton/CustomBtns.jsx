import React from 'react'
import './CustomBtn.css';
export const VerticalDotsBtn = () => {
  return (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"  width="20" height="20" focusable="false">
  <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
</svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="64" r="16"/><circle cx="128" cy="128" r="16"/><circle cx="128" cy="192" r="16"/></svg> */}
    </button>
  )
}


export const SwitchBtn = ()=>{

  return (
    <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
  )
}





