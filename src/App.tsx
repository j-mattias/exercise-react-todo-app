import { useState } from "react";
import "./App.css";

function App() {
  // Define structure of task object
  interface Task {
    task: string;
    id: number;
    done: boolean;
  }

  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [numTasksDone, setNumTasksDone] = useState<number>(0);

  // Get the currently highest id
  const highestId = () => {
    if (tasks.length <= 0) return 0;
    return Math.max(...tasks.map((task) => task.id));
  };

  // Count the number of done tasks
  const countDoneTasks = (tasks: Task[]) => {
    return tasks.filter((task) => task.done).length;
  };

  return (
    <>
      <h1>Todo List</h1>
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();

          // Prevent empty inputs
          if (input.trim() === "") {
            setInput("");
            return;
          }

          // Functional update of tasks, as it depends on previous state
          setTasks(
            (tasks) => (tasks = [...tasks, { task: input, id: highestId() + 1, done: false }])
          );

          // Clear the input. Does not depend on previous state
          setInput("");
        }}
      >
        <input
          id="taskInput"
          type="text"
          placeholder="Add task"
          value={input}
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
          <li className={`todo-list__item ${task.done ? "done" : ""}`} key={task.id}>
            <p className={`todo-list__text ${task.done ? "line-through" : ""}`}>{task.task}</p>
            <button
              className="mark-done"
              onClick={() => {
                // If task is not done, mark done, otherwise mark undone
                task.done = !task.done;

                let newTasks = [...tasks];
                newTasks.splice(index, 1, task);
                // newTasks.filter(t => t.id === task.id);
                setTasks((tasks) => (tasks = [...newTasks]));

                // Update the amount of tasks completed
                setNumTasksDone(countDoneTasks(tasks));
              }}
            >
              Done
            </button>
            <button
              className="delete-task"
              onClick={() => {
                // Remove task from tasks
                tasks.splice(index, 1);

                // Update tasks & tasks completed
                setTasks((tasks) => (tasks = [...tasks]));
                setNumTasksDone(countDoneTasks(tasks));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h4>Number of Tasks Done: {numTasksDone}</h4>
      <button
        onClick={() => {
          // Filter by tasks that aren't done
          const newTasks = tasks.filter((task) => !task.done);

          // Update tasks and numTasksDone
          setTasks(newTasks);
          setNumTasksDone(countDoneTasks(newTasks));
        }}
      >
        Clear Done
      </button>
    </>
  );
}

export default App;
