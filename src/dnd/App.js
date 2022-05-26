import react, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "./Column";
import InitialData from "./data.js";

const Container = styled.div`
  display: flex;
`;
export default class App extends Component {
  state = InitialData;
  handleDragStart = (result) => {
    console.log("start", result);
    document.body.style.color = "blue";
    document.body.style.transition = "background-color 0.2s ease";
  };
  onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };
  handleDragEnd = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { draggableId, source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    var sourceColumn = this.state.columns[source.droppableId];
    let sourceTaskIds = [...sourceColumn.taskIds];
    sourceTaskIds.splice(source.index, 1);
    const destColumn =
      source.droppableId === destination.droppableId
        ? sourceColumn
        : this.state.columns[destination.droppableId];
    let destTaskIds =
      source.droppableId === destination.droppableId
        ? sourceTaskIds
        : Array.from(destColumn.taskIds);
    destTaskIds.splice(destination.index, 0, draggableId);
    this.setState({
      columns: {
        ...this.state.columns,
        [sourceColumn.id]: {
          ...this.state.columns[sourceColumn.id],
          taskIds: [...sourceTaskIds]
        },
        [destColumn.id]: {
          ...this.state.columns[destColumn.id],
          taskIds: [...destTaskIds]
        }
      }
    });
  };
  render() {
    return (
      <Container>
        <DragDropContext
          onDragStart={this.handleDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.handleDragEnd}
        >
          {this.state.columnOrder.map((columnId, index) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => this.state.tasks[taskId]
            );
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </Container>
    );
  }
}
