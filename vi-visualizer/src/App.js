import React, { useState } from "react";
import TopicSelector from "./TopicSelector";
import SortingVisualizer from "./components/SortingVisualizer";
import SelectionSortVisualizer from "./components/SelectionSortVisualizer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">AI Visualizer - DSA Topics</h1>
      <div className="row">
        {/* Sidebar with topics */}
        <div className="col-md-3">
          <h4>Choose a Topic:</h4>
          <TopicSelector onSelect={setSelectedTopic} />
        </div>

        {/* Main display area */}
        <div className="col-md-9">
          {selectedTopic ? (
            <div>
              <h2>{selectedTopic}</h2>

              {/* Conditionally show visualization based on selected topic */}
              {selectedTopic === "Bubble Sort" && <SortingVisualizer />}
              {selectedTopic === "Selection Sort" && <SelectionSortVisualizer />}
              {selectedTopic !== "Bubble Sort" && selectedTopic !== "Selection Sort" && (
                <p>Visualization for "{selectedTopic}" coming soon!</p>
              )}
            </div>
          ) : (
            <p>Please select a topic from the left to see visualization.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
