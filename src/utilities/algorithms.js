const MERGE_SORT = "Merge Sort";
const QUICK_SORT = "Quick Sort";
const BUBBLE_SORT = "Bubble Sort";

const sort = (sortingAlgorithm) => {
  if (!isValidSortingAlgorithm(sortingAlgorithm)) {
    return;
  }

  if (!stripesAreFound()) {
    return;
  }

  switch (sortingAlgorithm) {
    case MERGE_SORT:
      mergeSort();
      return;
    case QUICK_SORT:
      quickSort();
      return;
    case BUBBLE_SORT:
      bubbleSort();
      return;
  }
};

const mergeSort = () => {
  console.log("Merge Sort");
};

const quickSort = () => {
  console.log("Quick Sort");
};

const bubbleSort = () => {
  console.log("Bubble Sort");
};

const isValidSortingAlgorithm = (algorithm) => {
  const SORTING_ALGORITHMS = [MERGE_SORT, QUICK_SORT, BUBBLE_SORT];
  return SORTING_ALGORITHMS.includes(algorithm);
};

const stripesAreFound = () => {
  const stripes = document.querySelectorAll(".stripe");
  return stripes.length > 0;
};

export default sort;
