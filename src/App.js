import "./styles.css";
import { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoContext } from "./Context/ToDoContext";
import todoReducer from "./Context/reducers";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo App With Context API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
}
