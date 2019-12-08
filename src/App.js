import React from 'react';
import './new.css';
import Navbar from './navbar';
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import skillz from './skillz';
import bout from './aboutme';

function App() {
  return (
    <Router>
    <div className="app">
     <Navbar/>
     <Switch>
     <Route path="/" exact component={home} />
     <Route path="/skillz" component={skillz} />
     <Route path="/aboutme" component={bout} />
     </Switch>

    </div>
    </Router>
  );
}
const home = ()=>(
    <div>
    <div className="combo">
<div className="friper">
      <h1>" HI! <br/>
      please feel free <br/>
      to explore this<br/>
      website and get to<br/>
      know more about <br/>
       me "</h1>
</div>



<div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={logo} />
                    <h3>ART & CRAFT</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>i've won and participated in several art comptetions in both inter and intra school level also i have learned sculpture for 5years.</p>
                </div>
            </div>
        </div>
        
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={logo} />
                    <h3>LEADERSHIP</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>i've held several leadership positions in school and collage and was head of members for robotics club.</p>
                </div>
            </div>
        </div>
    </div>
    </div>


<div className="footer">
      <div className="rightfo">
        <h4>For letter correspondence <br/>
        address : <br/>
        5,sampurnanand colony sigra varanasi<br/>
        uttar pradesh<br/>
        221010<br/></h4>
</div>

      <div className="midfo2">
        <h4>My phone number:<br/></h4>
              7007295236<br/>
              9807451027<br/>
      </div>
      <div className="midfo">
      <input type="text" className="youremail" placeholder="your email id"/><br/>
      <input type="text" className="enterfeedback" placeholder="Enter Feedback" /><br/>
                <button>send</button>
      </div>
      <div className="text">
        <h4>Get in touch with me at -----></h4>
      <div className="leftfo">
      <ul>
        <li><a href="a"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="a"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        <li><a href="a"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="a"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
      </ul>
      </div>
    </div>
    </div>

    </div>
);
export default App;