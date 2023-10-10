import { useState } from "react";
import "../App.css";

function ToDoShow({ task, onDelete, id }) {
  const [taskEdit, setTaskEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(id);
  };
  const uncomplete = "&#10007;";
  const complete = "&#10003";

  const handleEditTask = () => {
    setTaskEdit(!taskEdit);
  };

  let content = { __html: uncomplete };
  if (taskEdit) {
    content = { __html: complete };
  }
  return (
    <div>
      <p className="task-container">
        <button className="task-button1" onClick={handleEditTask}>
          {/* {content.__html} */}
          {/* לבחון להכניס את שלעיל עם הערך הרלוונטי תחת בק-טיק */}
          <span dangerouslySetInnerHTML={content} />
        </button>
        {task}
        <button className="task-button2" onClick={handleDeleteClick}>
          Delete
        </button>
      </p>
    </div>
  );
}
export default ToDoShow;
