import {
  Button,
  Card,
  ListGroup,
  InputGroup,
  Form,
  Col,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";

import TodoItem from "./TodoItem";

const TodoList = () => {
  let initialList = [
    { id: 1, text: "Clean the house", done: true },
    { id: 2, text: "Create todo app", done: false },
    { id: 3, text: "Buy groceries", done: false },
  ];

  let localList = JSON.parse(localStorage.getItem('todos'));

  if(localList){
    initialList=localList;
  }

  const [list, setList] = useState(initialList);
  const [textInput, setTextInput] = useState("");

  useEffect(()=>{
   localStorage.setItem('todos', JSON.stringify(list))
  },[list])

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const addTodoItem = () => {

    let lastItem  = list[list.length - 1];
    let id = 1;

    if (lastItem){
      id = lastItem.id + 1;
    }

    let newTodo = {
      id: id,
      text: textInput,
      done: false,
    };

    setList((prevList)=>[...prevList, newTodo]);
    setTextInput('');
   };

  const markAsDone = (id) => {
    const newList = list.map((item)=>{
      if(item.id===id){
        item.done = true;
      }

      return item;
    })

    setList(newList);
  };

  const deleteTodo = (id) => {
    console.log(`delete item at id ${id}`);
    const newList=list.filter((item)=>{
      return item.id !== id;
    });
    setList( newList);
  };

  const handleKeyUp = (e) => {
    if(e.key==='Enter'){
      addTodoItem();
    };
  };

  let todoItems = list.map((item) => {
    return <TodoItem key={item.id} todo={item} markAsDone={markAsDone} deleteTodo={deleteTodo}/>
  });

  return (
    <>
      <Card>
        <Card.Header>
          <b>ToDo List</b>
        </Card.Header>
        <Card.Body>
          <ListGroup>{todoItems}</ListGroup>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  Add ToDo Item
                </InputGroup.Text>
                <Form.Control
                  placeholder="New Todo"
                  aria-label="New Todo"
                  aria-describedby="basic-addon1"
                  onChange={handleTextInput}
                  onKeyUp={handleKeyUp}
                  value={textInput}
                />
              </InputGroup>
            </Col>
            <Col>
              <Button variant="primary" className="float-end" onClick={addTodoItem}>
                Add
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default TodoList;
