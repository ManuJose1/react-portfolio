import ListGroup from "react-bootstrap/ListGroup";
import { Badge } from "react-bootstrap";

const TodoItem = (props) => {
  let itemHTML = (
    <>
      {props.todo.text}
      <Badge
        onClick={() => props.markAsDone(props.todo.id)}
      
        bg="success"
        className="float-end button"
      >
        {" "}
        &#10003;{" "}
      </Badge>
    </>
  );

  if (props.todo.done) {
    itemHTML = (
      <>
        <span className="done">{props.todo.text}</span>
        <span className="float-end">
          &#128077;
        </span>
      </>
    );
  }

  return (
    <ListGroup.Item>
      <Badge
        onClick={() => props.deleteTodo(props.todo.id)}
      
        bg="danger"
        className="float-end button"
      >
        &#128465;
      </Badge>
      {itemHTML}
    </ListGroup.Item>
  );
};

export default TodoItem;
