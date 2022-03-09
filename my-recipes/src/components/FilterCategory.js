import React from 'react'
// react-bootstrap
import Button from 'react-bootstrap/Button'

const filters = [
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
    console.log(newFilter);
  }

  return (
    <div className="recipe-filter">
      <nav>
        {filters.map((filter) => (
          <Button key={filter} className={currentFilter === filter ? 'active' : ''} onClick={(e) => handleClick(filter)}>{filter}</Button>
        ))}
      </nav>
    </div>
  )
}
