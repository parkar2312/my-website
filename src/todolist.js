import React, { Component } from 'react';
import TodoList from './TodoList1';
import TodoItem from './TodoItem';
import './projects.css'


class Todoli extends Component {
//     constructor(){
//         super()
//         this.state={
//             newitem: "",
//             list :[]
//         }
//     }
 
//     additem(todovalue){
//       if (todovalue !== ""){
//         const newitem ={
//           id: Date.now(),
//           value: todovalue,
//           isdone: false
//         };
//         const list =[...this.state.list];
//         list.push(newitem);

//         this.setState({
//           list,
//           newitem:""
//         })
//       }
//     }
//     deleteitem(id){
//       const list = [...this.state.list];
//       const updatedlst = list.filter(item => item.id !== id);
//       this.setState({
//         list: updatedlst
//       })
//     }

//     updateinput(input){
//       this.setState({
//         newitem:input
//       })
//     }
// addlist(){
    
// }
//   render() {
//     return ( 
//       <div className="body">
//         <h1>--------------------APP #5--------------------</h1>
//        <input className="input1" type="text" value={this.state.newitem} onChange={e => this.updateinput(e.target.value)} />
//        <button className="butt0n" onClick={() =>this.additem(this.state.newitem)} disabled={!this.state.newitem.length}>add</button>
//        <div className="tototo">
//          <ul>
//            {this.state.list.map(item => {
//              return(
//                <li key={item.id}>
//                  <input 
//                  type="checkbox"
//                  checked={item.isdone}
//                  onChange={() =>{}}
//                  />
//                  <div className="bhalue">{item.value}</div>
//                  <button
//                  className ="bubu"
//                  onClick={() => this.deleteitem(item.id)}>
//                    delete
//                  </button>
//                </li>
//              )
//            })}
//            <li>
//              <input type="checkbox" className="xxxxxx" name="" id=""/>
//              do thing one
//              <button className ="bubud">delete</button>
//            </li>
//          </ul>
//        </div>
//        </div>
//         )
//   }
// }
  
  constructor(){
      super();
      
      this.state={
          value:"",
          items:[]
      }
      
      this.handleInput=(event)=>{
          this.setState({
              value:event.target.value
          })
      }
      
      this.handleAddItem=(event)=>{
          event.preventDefault();
          
          if(this.state.value==="")
              return; 
          
          const newItem={
              task:this.state.value,
              id: Date.now(),
              status:false
          }
          
          this.setState( (prevState)=>({
              items:prevState.items.concat(newItem),
              value: "",
              
          }))  
      }
      
      this.handleMarkItemComplete=(itemId)=>{
          
          const updatedItems= this.state.items.map(item =>{
              if(itemId === item.id)
                  item.status = !item.status;
              
              return item;
          })
          
          this.setState({
              items:[].concat(updatedItems)
          })       
      }

      this.handleDeleteItem=(itemId)=>{
          
          const updatedItems=this.state.items.filter(item=>{
              return item.id!==itemId    
          })
          
          this.setState({
              items:[].concat(updatedItems)
          })
      }
  }
  
  render() {
      
      const btn_style={
          marginLeft:"10px",
          marginBottom:"5px"
      }
      
      const input_style={
          width:"250px",
          padding:"5px"
      }  
      
  return (
    
      <div className="container-fluid">
      <h1>--------------------APP #5--------------------</h1>
      <div className="row">
      
      <div className="col-md-4"></div> 
      <div className="col-md-4">
      <div className="body">
      <h2 className="heading">TODO List</h2>   
      <input style={input_style} placeHolder="Add New Todo" type="input" onChange={this.handleInput} value={this.state.value} />
      <button style={btn_style} type="button" className="btn btn-primary btn-md" onClick={this.handleAddItem}>Add</button>
      <TodoList items={this.state.items} deleteItem={this.handleDeleteItem} markItemComplete={this.handleMarkItemComplete} />
      </div>
      </div>
      <div className="col-md-4"></div> 
      
      </div>
      </div>
  );
}
}
export default Todoli;

