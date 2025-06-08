import React from 'react';
import './styles/home.css';

const topics = [
  "Arrays",
  "Linked Lists",
  "Stacks",
  "Queues",
  "Trees",
  "Bubble Sort",
  "Selection Sort",
  "Insertion Sort",
  "Searching"
];

const Home = ({ onSelect }) => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="title">AI Visualizer</h1>
        <p className="subtitle">Explore DSA Core Concepts</p>
        <div className="card-grid">
          {topics.map((topic, index) => (
            <div className="topic-card" key={index} onClick={() => onSelect(topic)}>
              <span className="number">{index + 1}.</span> {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
