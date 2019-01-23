import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

class TodoList extends Component {
  state = {
    check: this.props.done
  };

  handleList = () => {
    if (this.state.check === false) {
      this.setState({
        check: true
      });
    } else {
      this.setState({
        check: false
      });
    }
  };

  render() {
    const listStyle = {
      textDecoration: this.state.check ? "line-through" : "",
      color: this.state.check ? "red" : "",
      backgroundColor: "pink",
      borderBottom: "2px solid black",
      marginTop: "-16px"
    };

    return (
      <React.Fragment>
        <List onClick={this.handleList}>
          <ListItem button style={listStyle}>
            <Typography variant="subheading">{this.props.text}</Typography>

            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon onClick={this.props.removeList} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}

export default TodoList;
