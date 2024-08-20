import { useState } from "react";
import "./App.css";

function App() {
  // {task: "clean", done: false, id: 0}, {task: "cook", done: false, id: 1}

  // Define structure of task object
  interface Task {
    task: string;
    id: number;
    done: boolean;
  }

  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to get the currently highest id
  const highestId = () => {
    return Math.max(...tasks.map((task) => task.id));
  };

  return (
    <>
      <h1>Todo List</h1>
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          setTasks([...tasks, { task: input, id: highestId() + 1, done: false }]);

          // Clear the input
          setInput("");
          e.target.taskInput.value = "";
        }}
      >
        <input
          id="taskInput"
          type="text"
          placeholder="Add task"
          required
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          // If task is done, add done class
          <li className="todo-list__item" key={index}>
            <p className={`todo-list__text ${task.done ? "done" : ""}`}>{task.task}</p>
            <button
              className="mark-done"
              onClick={() => {
                // If task is not done, mark done, otherwise mark undone
                task.done = !task.done;
                let newTasks = [...tasks];
                newTasks.splice(index, 1, task);
                // newTasks.filter(t => t.id === task.id);
                setTasks([...newTasks]);
              }}
            >
              Done
            </button>
            <button
              className="delete-task"
              onClick={() => {
                // Remove task from tasks
                tasks.splice(index, 1);

                // Update tasks
                setTasks([...tasks]);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
