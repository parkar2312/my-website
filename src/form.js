import React from 'react';

const Form=props=>{
    return(
        <div className="containeeer">
            <div>{props.error ? error(): null}</div>
            <form onSubmit={props.loadweather}>
            <div className="roow">
                 <div className="rowww">
                     <input type="text" className="formcont" name="city" autoComplete="off" placeholder="city"/>
                
                     <input type="text" className="formcont" name="country" autoComplete="off" placeholder="country"/>
                 
                     <button className="col-md-1.5 btn-warning">
                       Get Weather
                     </button>
                    </div>
             </div>
             </form>
        </div>
    );
};
function error(){
    return(
        <div className="alert" role="alert">
            please enter city and country
        </div>
    )
}
export default Form;