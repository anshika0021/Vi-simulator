import React, { useState, useEffect } from "react";

const SelectionSortVisualizer = () => {
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

  const selectionSort = () => {
    const arr = array.slice();
    let animations = [];

    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        animations.push([minIdx, j, false]); // compare
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        animations.push([i, minIdx, true]); // swap
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
      }
    }

    animate(animations);
  };

  const animate = (animations) => {
    for (let i = 0; i < animations.length; i++) {
      const [idx1, idx2, isSwap] = animations[i];
      setTimeout(() => {
        setArray((oldArray) => {
          const newArray = oldArray.slice();
          if (isSwap) {
            let temp = newArray[idx1];
            newArray[idx1] = newArray[idx2];
            newArray[idx2] = temp;
          }
          return newArray;
        });
      }, i * 200);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sorting Visualizer - Selection Sort</h2>
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
                backgroundColor: "tomato",
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
      <button onClick={selectionSort} style={{ margin: "20px 10px" }}>
        Start Selection Sort
      </button>
    </div>
  );
};

export default SelectionSortVisualizer;
