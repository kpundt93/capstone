import React from 'react'
// react-bootstrap
import Button from 'react-bootstrap/Button'

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
      <nav>
        <p>Filter by:</p>
        {filters.map((filter) => (
          <Button key={filter} className={currentFilter === filter ? 'active' : ''} onClick={() => handleClick(filter)}>{filter}</Button>
        ))}
      </nav>
    </div>
  )
}
