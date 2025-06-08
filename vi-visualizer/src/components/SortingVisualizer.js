import React, { useState, useEffect } from "react";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  // Initialize array with random numbers
  useEffect(() => {
    resetArray();
  }, []);

  // Generate random array
  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(Math.floor(Math.random() * 100) + 10);
    }
    setArray(arr);
  };

  // Bubble sort animation
  const bubbleSort = () => {
    const arr = array.slice();
    let animations = [];
    // Collect swaps
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        animations.push([j, j + 1, false]); // compare
        if (arr[j] > arr[j + 1]) {
          animations.push([j, j + 1, true]); // swap
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    animate(animations);
  };

  // Animate swaps and comparisons
  const animate = (animations) => {
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, isSwap] = animations[i];
      setTimeout(() => {
        setArray((oldArray) => {
          const newArray = oldArray.slice();
          if (isSwap) {
            let temp = newArray[barOneIdx];
            newArray[barOneIdx] = newArray[barTwoIdx];
            newArray[barTwoIdx] = temp;
          }
          return newArray;
        });
      }, i * 200);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sorting Visualizer - Bubble Sort</h2>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          height: "400px",
        }}
      >
        {array.map((value, idx) => (
          <div key={idx} style={{ margin: "0 4px", textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "teal",
                width: "20px",
                marginLeft:"20px",
                height: `${value * 3}px`,
                transition: "height 0.4s ease",
              }}
            ></div>
            <div style={{ marginTop: "30px", fontSize: "20px", color: "#333" }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      <button onClick={resetArray} style={{ margin: "20px 10px" }}>
        Generate New Array
      </button>
      <button onClick={bubbleSort} style={{ margin: "20px 10px" }}>
        Start Bubble Sort
      </button>
    </div>
  );
};

export default SortingVisualizer;
