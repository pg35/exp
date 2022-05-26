import react, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #aaa;
  border-radius: 2px;
  background-color: ${(props) =>
    props.dragIsDisabled ? "#eee" : props.isDragging ? "lightGreen" : "white"};
`;
const Handle = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 10px;
  background-color: purple;
  vertical-align: text-bottom;
`;
export default class Task extends Component {
  render() {
    const { task, index } = this.props;
    //console.log(task.id, index);
    const isDragDisabled = "task-1" === task.id;
    return (
      <Draggable
        draggableId={task.id}
        index={index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            dragIsDisabled={isDragDisabled}
          >
            <Handle {...provided.dragHandleProps} /> {task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
