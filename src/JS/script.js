"use strict";


let display = document.querySelector("#display");

let currentInput = "";

const updateDisplay = ()=> {
    display.textContent = currentInput || "0";
    
};

const appendNumber = (num) => {
    const parts = currentInput.split(/["\+\-\*\/%"]/);
    const lastPart = parts[parts.length - 1];

if (currentInput === "0" && lastPart === "0") return;
if(lastPart === 0 && currentInput !== "." && num !== "0") {
    currentInput = currentInput.slice(0, -1) + num;
} else {
    currentInput += num; // currentinput = currentInput + num;

}
updateDisplay();

    };


    const appendOperator = (op) => {
        if (currentInput === "") return; 
        const lastChar = currentInput.slice(-1);
        if (("+-*/%").includes(lastChar)) {
            currentInput = currentInput.slice(0, -1); 
        }
        currentInput += op;
        updateDisplay();
    };


const clearDisplay = () => {
    currentInput = ""; // reset the current input
    updateDisplay(); // clear the display
};


const deleteLast = () => {
    currentInput = currentInput.slice(0, -1)
    updateDisplay();
};// remove the last character from the current input



const appendDot = () => {
    const parts = currentInput.split(/["\+\-\*\/%"]/);
    if (!parts[parts.length - 1].includes(".")) {
      currentInput += ".";
      updateDisplay();
    }
  };

  
  const calculateResult = () => {
    try {
      currentInput = eval(currentInput.replace(/%/g, "/100")).toString();
      updateDisplay();
    } catch {
      currentInput = "Error";
      updateDisplay();
    }
  };




















































