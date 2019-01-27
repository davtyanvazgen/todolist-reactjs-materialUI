import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class TodoForm extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSbmit = event => {
    event.preventDefault();
    let checkText = true;
    this.props.allLists.findIndex(index => {
      if (index.text == this.state.text) {
        return (checkText = false);
      }
    });

    if (/\S/.test(this.state.text) && checkText) {
      this.props.onAdd({
        text: this.state.text,
        complete: false
      });
      this.setState({
        text: ""
      });
    }
  };

  render() {
    const buttonStyle = {
      marginLeft: "2px"
    };

    const textFieldStyle = {
      height: "37px"
    };
    const pfontStyle = {
      fontStyle: "oblique",
      color: "white"
    };

    return (
      <React.Fragment>
        <Typography variant="h4">
          <p style={pfontStyle}> To Do List</p>
        </Typography>
        <form onSubmit={this.handleSbmit}>
          <TextField
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            variant="outlined"
            placeholder="Enter text"
            style={textFieldStyle}
          />
          <Button
            onClick={this.handleSbmit}
            variant="contained"
            color="primary"
            style={buttonStyle}
          >
            ADD
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default TodoForm;
