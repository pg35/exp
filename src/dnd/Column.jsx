import react, { Component } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Container = styled.div`
  border: 1px solid #aaa;
  border-radius: 2px;
  margin: 8px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  transition: background-color 0.2s ease;
  flex-grow: 1;
  min-height: 100px; /*seems redundant*/
`;
export default class Column extends Component {
  render() {
    const { column, tasks, isDropDisabled } = this.props;
    //my observations:
    //can't drop on column-3 b/c of droppale type prop
    //can't drop to column1,2 from column3 b/c of type prop
    //can't drop to column1 from col2 b/c of isdropdisabled
    //even though both have same type.

    return (
      <Container>
        <Title>{column.title}</Title>
        <Droppable
          droppableId={column.id}
          type={"column-3" === column.id ? "done" : "active"}
          isDropDisabled={isDropDisabled}
        >
          {(provided, snapshot) => (
            <TaskList
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
