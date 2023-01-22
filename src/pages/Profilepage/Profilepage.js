import React from 'react';
import './Profilepage.css';

const Profilepage = () =>{
    return(
        <div className='profilepage'>
            <div className='name_input'>
              <input type="text" placeholder='Beta User'/>
              <button>SAVE</button>
            </div>
            <div className='email_input'>
              <input type="email" placeholder='beta@gmail.com'/>
              <button>SAVE</button>
            </div>
            <button>DELETE YOUR ACCOUNT</button>
        </div>
    );
}
export default Profilepage;