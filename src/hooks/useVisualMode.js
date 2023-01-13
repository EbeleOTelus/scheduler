import { useState } from "react";


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace) => {
    setMode(newMode);
    setHistory(prev => ([...prev, newMode]));
    if (replace) {
      setHistory(history);
    }
  };

  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const lastItemIndex = newHistory.length - 1;
      setMode(newHistory[lastItemIndex]);
      setHistory(newHistory);
    }
  };

  return { mode, transition, back };
}


// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
// const previousItemIndex = history.length-1
// setMode(history[history.length-1])