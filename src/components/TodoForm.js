import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      itemName: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ itemName: e.target.value })
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    // do something with the inputted item name
    this.props.addItem(this.state.itemName);
  }

  render() {
    return (
    <div className="todo-form">
      <form  onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input  className="task-entry"onChange={this.handleChanges} value={this.state.itemName} type="text" name="item" placeholder="I need to..."/>
        <button>Add</button>
      </form>
    </div>
    );
  }
}

export default ListForm;