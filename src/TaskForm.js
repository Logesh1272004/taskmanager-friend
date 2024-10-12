import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const TaskFormWrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
`;

const TaskForm = ({ addTask }) => {
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: `${Date.now()}`, content, priority, status: 'In Progress' };
    addTask(newTask);
    setContent('');
  };

  return (
    <TaskFormWrapper>
      <h3>Add New Task</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Task" value={content} onChange={(e) => setContent(e.target.value)} required />
          </Col>
          <Col>
            <Form.Control as="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Control>
          </Col>
          <Col>
            <Button variant="primary" type="submit">Add Task</Button>
          </Col>
        </Row>
      </Form>
    </TaskFormWrapper>
  );
};

export default TaskForm;
