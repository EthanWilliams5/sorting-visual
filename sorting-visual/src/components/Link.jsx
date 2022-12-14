const links = [ "Merge Sort"," Quick Sort", "Bubble Sort", "Insert Sort", "Radix Sort", "Selection Sort"]

export default function Link() {
  return (
    links.map((link, idx) => {
      return <a href="#" key={idx}>{link}</a>
    })
  )
}