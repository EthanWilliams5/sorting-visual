import { useState } from "react"

export default function MergeSort(props) {
  const [mergeArray, setMergeArray] = useState([])
  const [idxToMove, setIdxToMove] = useState(0)

  function merge(arr1, arr2) {
    const result = []
    let i = 0
    let j = 0

    while(i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i])
        i++
      } else {
        result.push(arr2[j])
        j++
      }
    }
    while(i < arr1.length) {
      result.push(arr1[i])
      i++
    }
    while(j < arr2.length) {
      result.push(arr2[j])
      j++
    }
    return result
  }

  function mergeSort(arr) {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }


  function handleClick(e) {
    setMergeArray(() => mergeSort(props.numsArray))
    console.log(mergeArray);
  }

  return (
    <>
    {props.numsArray.map((num, index) => {
      return (
        <div className="numBar" key={index} style={{height:`${num}px`}}></div>
      )
    })}
    <button onClick={handleClick}>MergeSort</button>
    </>
  )
}