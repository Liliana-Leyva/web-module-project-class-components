//Todo Form
import React from 'react'

class TodoList extends React.Component{
 constructor(){
    super();
    this.state={
        todoName: ''
    }
 }
 
 handleChanges= e =>{
    this.setState({todoName: e.target.value})
 }
 handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.todoName);
 }
 render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChanges} value ={this.state.todoName} type="text" name="item"/>
            <button>Add</button>
        </form>
    )
 }
}

export default TodoList