import React from "react";

import Item from "./Todo";
import './Todo.css'

const TodoList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todo-list">
      {props.todo.map(item => (
        <Item key={item.id} item={item} toggleCompleted={props.toggleCompleted} />
      ))}
      <button onClick={props.clearCompleted} className="clear-btn">
        Clear Tasks
      </button>
    </div>
  );
};

export default TodoList;