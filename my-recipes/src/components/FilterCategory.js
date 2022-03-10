import React from 'react'

const filters = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Appetizers",
  "Sweets",
  "Holiday",
  "Soups"
];

export default function FilterCategory({ currentFilter, changeFilter }) {

  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  }

  return (
    <div className="recipe-filter">
      {/* <p>Filter by:</p> */}
      {filters.map((filter) => (
        <button key={filter} className={currentFilter === filter ? 'active' : ''} onClick={() => handleClick(filter)}>{filter}</button>
      ))}
    </div>
  )
}
