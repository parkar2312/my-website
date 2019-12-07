import React from 'react';
import {Link} from 'react-router-dom';
import './new.css';

function Navbar() {
  return (
    <div className="navbar">
    <div className="addflex">
       <h1>PARIMAL CHANDRAKAR</h1>
    
    <ul className ="navi">
      <Link to='/'><li>HOME</li></Link>
      <Link to='/skillz'> <li>SKILLS</li></Link>
      <Link to='/aboutme'> <li>ABOUT ME</li></Link>
    </ul>
</div>
    </div>
  );
}

export default Navbar;
