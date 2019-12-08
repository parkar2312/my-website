import React from 'react';
import './new.css';

function bout() {
  return (
    <div className="me">
      <h1 className="intro">----Introduction----</h1><br/>
      <h3>Born and raised in Varanasi completed my schooling from Sunbeam School.<br/>
      I've been an above average student all my school life and my collage was completed <br/>
      from Aryavart institute of technology Lucknow from mechanical branch . I am a keen learner<br/>
      & like to maintain balance between working hard and having fun. <br/> </h3>
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
         <td>62.4</td>
         </tr>
       </table>
       <table className="table2">
         <tr>
           <th>Year</th>
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
        <h1 className="hobb">----Hobbies----</h1>
        <h3>there are lots of things that i love doing like <br/>reading books<br/>
        watching movies and sports <br/> playing online games and eating out</h3>
    </div>
  );
}

export default bout;
