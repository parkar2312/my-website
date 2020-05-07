import React from 'react';
import './new.css';

import {BrowserRouter as Router,Switch,Route,HashRouter}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import bout from './aboutme';
import Pro from './myprojects';
import Nav1 from './navi.js';
import logo1 from './ca.png';
import logo2 from './mail.png';
import imim from './mypict.png'



function App() {
  return (
    <Router>
    <div style={{height:'100%'}}>
     {/* <Navbar/> */}
     <Nav1/>

     <Switch>
     <Route path="/" exact component={home} />
     <Route path="/aboutme" component={bout} />
     <Route path="/myprojects" component={Pro} />
     </Switch>

    </div>
    </Router>
  );
}
const home = ()=>(
    <div>
     <div className="combo">
       <div className="friper">
                
                <div className="loader">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                

         <h1>" HI! <br/>
          please feel free <br/>
         to explore this<br/>
         website and get to<br/>
         know more about <br/>
         me, my skills<br/>
         and my motivations<br/>
         this website<br/>
         also contains<br/>
         some basic apps<br/>
         created in react "</h1>
         </div>
       </div>
       <div className="welcome">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
       </div>
       <div className="fripro">
         <div className="imim">
         <img src={imim}/></div>
       <div class="container1">
      <div class="card1">
        <div class="face face1">
          <div class="content1">
            <img src="https://i.imgur.com/52er9UX.png" alt="html" />
            <h3>HTML</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content1">
            <p>
              Hypertext Markup Language (HTML) is the standard markup language
              for documents designed to be displayed in a web browser.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div class="card1">
        <div class="face face1">
          <div class="content1">
            <img src="https://i.imgur.com/vPHYdCk.png" alt="CSS" />
            <h3>CSS</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content1">
            <p>
              Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <div class="card1">
        <div class="face face1">
          <div class="content1">
            <img src="https://i.imgur.com/LqDbPQ7.png" alt="Javascript" />
            <h3>Javascript</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content1">
            <p>
              JavaScript (JS), often abbreviated as JS, is a high- level,
              just-in-time compiled, object-oriented programming language.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
     
      </div>
      
     
       </div>
 
   
      </div>
      <div className="address">
       
       <div className="left">
       <h1><img src={logo2}/> MY ADDRESS</h1>
       <h3>S,5 Sampurnanand colony Sigra Varanasi ,
       Uttar Pradesh<br/> 221010</h3>
       </div>
       <div className="right">
       <h1><img src={logo1}/>PHONE NUMBERS</h1>
       <h3>7007295236<br/>
       9451966120<br/>
           9807451027</h3>
           </div>
           <div className="frifri">
       <ul>
 <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
 <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
 <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
 <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
 <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
 </ul>
   </div>
     </div>
    </div>
);
export default App;