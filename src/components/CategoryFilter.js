import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({ categories, filterTasks }) {
  const selectCategory = (elem, category) => {
    const categories = document.querySelector(".categories")
    const allbtns = categories.querySelectorAll("button")

    allbtns.forEach((button) => {
      button.classList.remove("selected")
    })

    elem.classList.add("selected")


    filterTasks(category)
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {
        categories.map((category, index) =>
          <button key={index} onClick={(e) => selectCategory(e.target, category)}>{category}</button>)
      }
    </div>
  );
}

export default CategoryFilter;

