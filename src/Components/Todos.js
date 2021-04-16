import React, { useContext, useState } from "react";
import { Button, Form, Input, ListGroup, ListGroupItem } from "reactstrap";
import { REMOVE_TODO,RENAME_TODO } from "../Context/actions.types";
import { TodoContext } from "../Context/ToDoContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [showRenameBox,setShowRenameBox]=useState(0);
  const [currTodo,setCurrTodo]=useState('');
  const handleSubmit = () => {
    dispatch({
      type: RENAME_TODO,
      payload: {
        id:currTodo.id,
        todoString:currTodo.todoString
      }
    });
    setShowRenameBox(0);
    setCurrTodo('');
  }
  return (
    <div>
      { showRenameBox===1 && 
          <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="your next todo"
                value={currTodo.todoString}
                onChange={(e) => setCurrTodo({...currTodo,todoString:e.target.value})}
              />
              <Button color="warning">Rename</Button>
        </Form>  
      }
    <ListGroup className="mt-5 mb-2 items">
      {todos.map((todo) => {
        return (
    

          <ListGroupItem key={todo.id}>
            {todo.todoString}
            <span className="float-right ">
              <button
                onClick={() => {
                  setShowRenameBox(1);
                  setCurrTodo(todo);
                }}
              >
                  Rename
              </button>
            </span>
            <span className="float-right mr-3">
              <button
                onClick={() => {
                  dispatch({
                    type: REMOVE_TODO,
                    payload: todo.id
                  });
                }}
              >
                check
              </button>
            </span>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  </div>
  );
};

export default Todos;
