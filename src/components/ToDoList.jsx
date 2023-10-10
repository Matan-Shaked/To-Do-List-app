import ToDoShow from "./ToDoShow";

function ToDoList({ tasks, onDelete }) {
  const renderedTasksList = tasks.map((task, index) => {
    return (
      <ToDoShow
        key={task.id}
        id={task.id}
        task={task.tasks}
        onDelete={onDelete}
      />
    );
  });
  return <div>{renderedTasksList}</div>;
}
export default ToDoList;
