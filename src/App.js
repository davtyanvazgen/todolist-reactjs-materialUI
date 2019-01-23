import React, { Component } from "react";
import TodoForm from "./components/todo";
import TodoList from "./components/list";

class App extends Component {
  state = {
    todos: [{ text: "ARIVAAAAA", complete: false }]
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  deleteList = text => {
    this.setState({
      todos: this.state.todos.filter(each => text !== each.text)
    });
  };

  render() {
    const divStyle = {
      border: "3px solid rgb(189, 30, 30)",
      borderRadius: "7px",
      width: "25%",
      textAlign: "center",
      margin: "50px auto",
      backgroundColor: "rgb(141, 162, 185)",
      minHeight: "220px"
    };
    const miniDivStyle = {
      width: "97%",
      margin: "20px auto"
    };

    return (
      <div style={divStyle}>
        <TodoForm onAdd={this.addTodo} />
        <div style={miniDivStyle}>
          {this.state.todos.map((todo, index) => (
            <TodoList
              key={todo.text + index}
              done={todo.complete}
              text={todo.text}
              removeList={() => this.deleteList(todo.text)}
              done={todo.complete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
