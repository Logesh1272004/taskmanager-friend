import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button, Badge, Card } from 'react-bootstrap';
import styled from 'styled-components';

const TaskCard = styled(Card)`
  margin: 15px 0;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const TaskList = ({ tasks, deleteTask, updateTaskStatus }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    // Drag and drop logic here if needed
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="task-list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <TaskCard ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card.Body>
                      <Card.Title>{task.content}</Card.Title>
                      <Badge pill variant={task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'success'}>
                        {task.priority}
                      </Badge>
                      <Badge pill className="ml-2" variant={task.status === 'Completed' ? 'success' : 'primary'}>
                        {task.status}
                      </Badge>
                      <Button className="ml-3" variant="outline-danger" onClick={() => deleteTask(task.id)}>Delete</Button>
                      <Button className="ml-2" variant="outline-info" onClick={() => updateTaskStatus(task.id, task.status === 'In Progress' ? 'Completed' : 'In Progress')}>
                        {task.status === 'In Progress' ? 'Mark as Completed' : 'Mark as In Progress'}
                      </Button>
                    </Card.Body>
                  </TaskCard>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
