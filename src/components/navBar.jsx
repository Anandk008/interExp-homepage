import React from 'react'

function navBar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn" >
        <i className="fas fa-bars"></i>
      </label>
    </nav>
  )
}

export default navBar