import { Container, Row, Col } from "react-bootstrap";
import TodoList from "./components/TodoList";
import'./assets/app.css'

const App = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col>
            <TodoList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
