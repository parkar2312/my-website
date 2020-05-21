import React from 'react';

const Weather=(props) =>{
    return(
        <div className="contai text-light">
    <div className="ffcard pt-4">
        <h3>{props.city}</h3>
        <h5 className="py-4">
            <img></img>
        </h5>
        {props.temp_celsius ?(<h2 className="py-2">{props.temp_celsius}&deg;</h2>)
        :null}
        {minmaxtemp(props.temp_min, props.temp_max)}
  <h4 className="py-3">
      {props.description}
  </h4>
    </div>
    </div>
    );
};
function minmaxtemp(min,max){
    if(min && max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}
}
export default Weather;