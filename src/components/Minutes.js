import React from "react";

function Minutes({ minutes }) {
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    let printedCups = "";

    for (let i = 0; i < cups; i++) {
      printedCups += "☕️";
    }
    return (
      <span>
        {printedCups}
        {minutes} min to read
      </span>
    );
  } else {
    const boxes = Math.ceil(minutes / 10);
    let printedBoxes = "";
    for (let i = 0; i < boxes; i++) {
      printedBoxes += "🍱";
    }
    return (
      <span>
        {printedBoxes}
        {minutes} min to read
      </span>
    );
  }
}

export default Minutes;
