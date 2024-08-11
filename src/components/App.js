import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksState, setTasks] = useState([])

  useEffect(() => {
    setTasks(TASKS)
  }, [])

  const onTaskFormSubmit = (task) => {
    setTasks([...tasksState, task])
  }

  const filterTasks = (category) => {
    if (category !== "All") {
      const results = TASKS.filter(task => task.category === category)
      setTasks(results)
    }
    else {
      setTasks(TASKS)
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filterTasks={filterTasks} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList tasks={tasksState} />
    </div>
  );
}

export default App;
