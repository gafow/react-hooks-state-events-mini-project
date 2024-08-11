import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")


  return (
    <form className="new-task-form" onSubmit={(e) => {
      e.preventDefault()
      const obj = {
        text: description,
        category
      }
      onTaskFormSubmit(obj)
    }}>
      <label>
        Details
        <input type="text" name="text" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={e => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {
            categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
