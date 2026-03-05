import React from "react";

const tasksData = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a To-Do App", completed: false },
  { id: 3, text: "Master JavaScript", completed: false },
];

const TaskItem = ({ task, onToggle }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <div
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </div>
    </>
  );
};

const TaskList = ({ tasks, onToggle }) => {
  return (
    <div>
      remaining tasks = {tasks.filter((task) => !task.completed).length} from{" "}
      {tasks.length}
      <br />
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
};
const TaskExample = () => {
  const [tasks, setTasks] = React.useState(tasksData);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  return <TaskList tasks={tasks} onToggle={toggleTask} />;
};

export default TaskExample;
