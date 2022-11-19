const links = [ "Merge Sort"," Quick Sort", "Bubble Sort", "Insert Sort", "Radix Sort", "Selection Sort"]

export default function Link() {
  return (
    links.map((link) => {
      return <a href="#">{link}</a>
    })
  )
}