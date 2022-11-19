import React, {useState} from "react"
import MergeSort from "./MergeSort"

export default function DisplayArea() {
  const [numsArray, setNumsArray] = useState([])

  function callNumsArray() {
    setNumsArray([])
    let min = 5
    let max = 500
    for (let i = 0; i < 50; i++) {
      setNumsArray(prevNums => [...prevNums, Math.floor(Math.random() * (max - min + 1) + min)])
    }
  }


  return (
    <>
    <div className="displayArea">
      <MergeSort numsArray={numsArray}/>
    </div>
    <button onClick={callNumsArray}>Click me</button>
    </>
  )
}