const columns = {
  "column-1": {
    id: "column-1",
    title: "Todo",
    taskIds: ["task-1", "task-2"]
  },
  "column-2": {
    id: "column-2",
    title: "In Progres",
    taskIds: ["task-3"]
  },
  "column-3": {
    id: "column-3",
    title: "Done",
    taskIds: ["task-4"]
  }
};

const tasks = {
  "task-1": {
    id: "task-1",
    content: "this is first task"
  },
  "task-2": {
    id: "task-2",
    content: "this is 2nd task"
  },
  "task-3": {
    id: "task-3",
    content: "this is 3rd task"
  },
  "task-4": {
    id: "task-4",
    content: "this is 4th task"
  }
};

const columnOrder = ["column-1", "column-2", "column-3"];
const data = { columns, tasks, columnOrder };
export default data;
