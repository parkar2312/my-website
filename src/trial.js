import React, { Component } from 'react';
import './new.css';
import logo from './anonymous.png';
import Weather from './weather';
import'bootstrap/dist/css/bootstrap.min.css';
import Form from './form';

//api.openweathermap.org/data/2.5/weather?q=London,uk
// api_key="b876cd0d9954b234b21c3d7b0f3008a3";

class Trial extends React.Component {
 constructor(){
   super();
   this.state={
     city:undefined,
     country:undefined,
     main:undefined,
     celsius:undefined,
     temp_max:undefined,
     temp_min:undefined,
     description:"",
     error: false
   };

 }
calcelsius(temp){
  let cell = Math.floor(temp-273.15);
  return cell;
}
 getweather = async (e) =>{

e.preventDefault();

const city =e.target.elements.city.value;
const country =e.target.elements.country.value;

 if(city && country){
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=b876cd0d9954b234b21c3d7b0f3008a3`);
  const response = await api_call.json();
  console.log(response);
  console.log(this.state.city)
  this.setState({
    city:`${response.name},${response.sys.country}`,
    celsius :this.calcelsius(response.main.temp),
    temp_max:this.calcelsius(response.main.temp_max),
    temp_min:this.calcelsius(response.main.temp_min),
    description:response.weather[0].description
  });
}
else{
  this.setState({error:true})
}
};

  render(){
    return(
    <div className="chat">
    <h1>----------APP #6----------</h1>
    <h2> Weather App</h2>
    <Form loadweather={this.getweather} error={this.state.error}/>
 <Weather 
 city={this.state.city} 
 country={this.state.country} 
 temp_celsius={this.state.celsius}
 temp_max={this.state.temp_max}
 temp_min={this.state.temp_min}
 description={this.state.description}
 />
 </div>
 );
  }
}


export default Trial;
