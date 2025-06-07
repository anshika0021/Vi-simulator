import React, { useState } from "react";

const topics = [
  "Bubble Sort",
  "Selection Sort",
  "Insertion Sort",
  "Merge Sort",
  "Quick Sort",
  "Stack Operations",
  "Queue Operations",
  "Linked List",
  "Binary Tree Traversal",
  "Graph Algorithms",
];

function TopicSelector({ onSelect }) {
  return (
    <div className="list-group">
      {topics.map((topic, index) => (
        <button
          key={index}
          type="button"
          className="list-group-item list-group-item-action"
          onClick={() => onSelect(topic)}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}

export default TopicSelector;
