import React from 'react'

function NavBar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn" >
        <i className="fas fa-bars"></i>
      </label>
      <label className='logo'>Inter Exp</label>
      <ul>
        <li><a href="/#" className='active'>Home</a> </li>
        <li><a href="/#">Developers</a></li>
        <li><a href="/#">Write a Article</a></li>
        <li><a href="/#">Request Article</a></li>

      </ul>
    </nav>
  )
}

export default NavBar