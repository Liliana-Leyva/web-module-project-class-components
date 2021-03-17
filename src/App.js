import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const global_todo = [
  // {
  //   name: 'Bananas',
  //   id: 123,
  //   purchased: false
  // },
  // {
  //   name: 'Torillas',
  //   id: 124,
  //   purchased: false
  // },
  // {
  //   name: 'Milk',
  //   id: 1235,
  //   purchased: false
  // },
  // {
  //   name: 'Pizza Sauce',
  //   id: 1246,
  //   purchased: false
  // },
  // {
  //   name: 'Raw Honey',
  //   id: 1237,
  //   purchased: false
  // },
  // {
  //   name: 'Granola',
  //   id: 1248,
  //   purchased: false
  // }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todo: global_todo
    }
  }

  addItem = (itemName) => {
    this.setState({
      todo:
        [
          ...this.state.todo,
          {
            name: itemName,
            id: Date.now(),
            completed: false
          }
        ]
    })
  }

  toggleCompleted = (itemId) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      // todo: this.state.todo.filter(item => {
      //   return !item.completed
      // })
      todo: global_todo
    })
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>THINGS-TO-DO</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList clearCompleted={this.clearCompleted} todo={this.state.todo} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;