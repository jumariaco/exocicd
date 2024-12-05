import React from 'react';

function Filter({ filter, onFilterChange }) {
  return (
    <select className="filter-select" onChange={(e) => onFilterChange(e.target.value)} value={filter}>
      <option value="All">All</option>
      <option value="Active">Active</option>
      <option value="Complete">Complete</option>
    </select>
  );
}

export default Filter;
