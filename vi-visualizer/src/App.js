import React, { useState } from 'react';
import Home from './Home';
import SortingVisualizer from './components/SortingVisualizer';
import SelectionSortVisualizer from './components/SelectionSortVisualizer';
import InsertionVisualizer from './components/InsertionSortVisualizer';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const renderVisualizer = () => {
    switch (selectedTopic) {
      case "Bubble Sort":
        return <SortingVisualizer />;
      case "Selection Sort":
        return <SelectionSortVisualizer />;
      case "Insertion Sort":
        return <InsertionVisualizer />;
      default:
        return <p>Visualizer for "{selectedTopic}" coming soon!</p>;
    }
  };

  return (
    <>
      {selectedTopic ? (
        <div className="container mt-4">
          {/* 🔙 Back to Home Button */}
          <button onClick={() => setSelectedTopic(null)} className="btn btn-secondary mb-3">
            ⬅ Back to Home
          </button>

          <h2 className="text-primary mb-4">{selectedTopic}</h2>
          {renderVisualizer()}
        </div>
      ) : (
        <Home onSelect={setSelectedTopic} />
      )}
    </>
  );
}

export default App;
