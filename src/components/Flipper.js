import React from 'react'
import './css/flip.css'
export default function Flipper() {
  return (
    <div
      className="flip-container"
      onTouchStart="this.classList.toggle('hover');"
    >
      <div className="flipper">
        <div className="front" style={{ backgroundColor: '#d3efd9' }}></div>
        <div className="back" style={{ backgroundColor: '#EFD3E9' }}></div>
      </div>
    </div>
  )
}
