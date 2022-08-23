const sort = (sortingAlgorithm) => {
  const SORTING_ALGORITHMS = ["Merge Sort", "Quick Sort", "Bubble Sort"];

  if (!SORTING_ALGORITHMS.includes(sortingAlgorithm)) {
    return;
  }

  const stripes = document.querySelectorAll(".stripe");

  if (!stripes) {
    return;
  }

  console.log(sortingAlgorithm);
  console.log(stripes);
};

export default sort;
