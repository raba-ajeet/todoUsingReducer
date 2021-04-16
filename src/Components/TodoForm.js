import React, { useState, useContext } from "react";
import "../styles.css";
import {
  FormGroup,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import { v4 } from "uuid";
import { TodoContext } from "../Context/ToDoContext";
import { ADD_TODO } from "../Context/actions.types";
const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("please enter a todo");
    }
    const todo = {
      todoString,
      id: v4()
    };
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="your next todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
        </InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button color="warning">Add</Button>
        </InputGroupAddon>
      </FormGroup>
    </Form>
  );
};
export default TodoForm;
