

 
 import React from 'react';
 import image from './beautiful-sunse3.jpg';
 import logo from './anonymous.png';
 import {Link} from 'react-router-dom';
 import './new.css';
 
 function Navbar() {
   return (
     
    <section className="split">
        <div className="screen">
       
            <div className="carda">
            <div className="warning">
        <h1>SORRY!!! a little work is required on this page for mobile version i really apologise for inconvinience please skip to applications</h1>
      </div>
                <div className="imgbxa">
                    <img src={image}/>
                </div>
                <h3>About Me</h3>
                <a href="#">read more</a>
                <div className="contenta">
                <div className="imgbxa">
                    <img src={image}/>
                </div>
            
                <h5>----About Me----</h5>
                <div className="me">
      <h1 className="intro">----Introduction----</h1><br/>
      <h5>Born and raised in Varanasi completed my schooling from Sunbeam School.<br/>
      I've been an above average student all my school life and my college was completed <br/>
      from Aryavart institute of technology Lucknow from mechanical branch . I am a keen learner<br/>
      & like to maintain balance between working hard and having fun. <br/> </h5>
      <h1 className="intro">----Education----</h1>
    <div className="edu">
        
       <table className="table1">
         <tr>
           <th>Class</th>
           <th>Percentage</th>
         </tr>
         <tr>
         <td>High School</td>
         <td>85.5</td>
         </tr>
         <tr>
         <td>Intermediate</td>
         <td>72.4</td>
         </tr>
       </table>
       <table className="table2">
         <tr>
           <th>College</th>
           <th>Percentage</th>
         </tr>
         <tr>
         <td>First</td>
         <td>67.35</td>
         </tr>
         <tr>
         <td>Second</td>
         <td>72.25</td>
         </tr>
         <tr>
         <td>Third</td>
         <td>70.33</td>
         </tr>
         <tr>
         <td>Fourth</td>
         <td>74.65</td>
         </tr>
       </table>
       </div>
       </div>
                </div>
            </div>
        </div>
        <div className="screen">
            <div className="carda">
                <div className="imgbxa">
                    <img src={logo}/>
                </div>
                <h3>Skills</h3>
                <a href="#">read more</a>
                <div className="contenta">
                <div className="imgbxa">
                    <img src={logo}/>
                </div>
                <div className="skillz">
       <h4>----SKILLS----</h4>
         <div className="body1">
             <ul><h2>Basic Skills</h2>
             <li>javascript</li>
             <li>react js</li>
             <li>angular</li>
             <li>H.T.M.L</li>
             <li>css</li>
             <li>c++</li>
             <li>c</li>
             </ul>
         </div>
         
         <div className="body2">
             <ul><h2>Soft Skills</h2>
                 <li>photoshop</li>
                 <li>Auto CAD</li>
                 <li>problem solving</li>
             </ul>

         </div>

        
 </div>
                </div>
            </div>
        </div>
    </section>
     
   );
 }
 
 export default Navbar;
 