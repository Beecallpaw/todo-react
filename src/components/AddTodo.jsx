import React from "react";

class AddTodo extends React.Component {
  state = {
    value: ""
  };
  handleSubmit = e => {
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = "";
      this.props.onAddTodo(todoText);
    } else this.refs.todoText.focus();
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Enter Todo to add" />
          <br />
          <button type="submit">Click to Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
