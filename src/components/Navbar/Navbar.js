import React from 'react';
import './Navbar.css';

const navItems = [
    {
        text:"Hi, Beta User",
    },
    {
        text:"HOME",
    },
    {
        text:"ABOUT US",
    },
    {
        text:"PROFILE",
    },
    {
        text:"DARK MODE",
    },
];
const Navbar = () => {
    return(
        <div className='navbar'>
          <div className='nav_left'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU"></img>
            <input 
            placeholder='Search User' />
          </div>
          <div className='nav_center'>
            {navItems.map((data) => (
                <p>{data.text}</p>
            ))}
          </div>
          <div className='nav_rigth'>
            <button>LOGIN</button>
          </div>
          
        </div>
    )
}
export default Navbar;