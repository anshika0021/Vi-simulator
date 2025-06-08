import React, { useState, useEffect } from "react";

const InsertionSortVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(Math.floor(Math.random() * 100) + 10);
    }
    setArray(arr);
  };

  // Prepare animations for insertion sort
  const insertionSort = () => {
    const arr = array.slice();
    let animations = [];

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      // Highlight the key being compared/inserted
      animations.push(["key", i]);

      while (j >= 0 && arr[j] > key) {
        // Highlight comparison
        animations.push(["compare", j, j + 1]);

        // Shift arr[j] to right
        arr[j + 1] = arr[j];
        animations.push(["shift", j, j + 1]);

        j--;
      }
      arr[j + 1] = key;

      // Insert key
      animations.push(["insert", j + 1, key]);
    }

    animate(animations);
  };

  const animate = (animations) => {
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const action = animations[i];

        setArray((oldArray) => {
          const newArray = oldArray.slice();

          if (action[0] === "shift") {
            // action: ["shift", fromIndex, toIndex]
            newArray[action[2]] = newArray[action[1]];
          } else if (action[0] === "insert") {
            // action: ["insert", index, value]
            newArray[action[1]] = action[2];
          }
          // For "compare" and "key", no array change, can extend for color change if wanted

          return newArray;
        });
      }, i * 300);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sorting Visualizer - Insertion Sort</h2>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          height: "320px",
        }}
      >
        {array.map((value, idx) => (
          <div key={idx} style={{ margin: "0 4px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "orange",
                width: "20px",
                height: `${value * 3}px`,
                transition: "height 0.2s ease",
              }}
            ></div>
            <div style={{ marginTop: "5px", fontSize: "12px", color: "#333" }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      <button onClick={resetArray} style={{ margin: "20px 10px" }}>
        Generate New Array
      </button>
      <button onClick={insertionSort} style={{ margin: "20px 10px" }}>
        Start Insertion Sort
      </button>
    </div>
  );
};

export default InsertionSortVisualizer;
