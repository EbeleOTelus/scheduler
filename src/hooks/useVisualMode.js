import { useState } from "react"


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial)
  // const newMode = [...mode]
 const transition = (newMode) => {
  setMode(newMode)

 }
return { mode, transition }
}