const MERGE_SORT = "Merge Sort";
const QUICK_SORT = "Quick Sort";
const BUBBLE_SORT = "Bubble Sort";
const promises = [];

const sort = (sortingAlgorithm) => {
  if (!isValidSortingAlgorithm(sortingAlgorithm)) {
    return;
  }

  if (!stripesAreFound()) {
    return;
  }

  switch (sortingAlgorithm) {
    case MERGE_SORT:
      return mergeSort();
      return;
    case QUICK_SORT:
      quickSort();
      return;
    case BUBBLE_SORT:
      bubbleSort();
      return;
  }
};

// sort elements based on height
const mergeSort = async () => {
  const stripes = document.querySelectorAll(".stripe");
  const n = stripes.length;
  const arrayOfIDs = getIdsArray(stripes);
  document.querySelector(".stripe-wrapper").classList.add("red-border");
  console.log(arrayOfIDs);
  const sorted = mergeSortHelper(arrayOfIDs, 0, n - 1);
  return Promise.all(promises).then(() => {
    stripes.forEach((strip) => strip.classList.add("red-border"));
    return "done";
  });
  // console.log("after wait");
  // console.log(arrayOfIDs);
};

const getIdsArray = (elements) => {
  const arrayOfIDs = [];
  elements.forEach((el) => {
    let indexOfId = el.id.indexOf("-") + 1;
    let idString = el.id.substring(indexOfId);
    arrayOfIDs.push(parseInt(idString));
  });
  return arrayOfIDs;
};

function merge(arr, start, mid, end) {
  let start2 = mid + 1;

  // If the direct merge is already sorted
  if (arr[mid].clientHeight <= arr[start2].clientHeight) {
    return;
  }

  // Two pointers to maintain start
  // of both arrays to merge
  while (start <= mid && start2 <= end) {
    // If element 1 is in right place
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      let value = arr[start2];
      let index = start2;

      // Shift all the elements between element 1
      // element 2, right by 1.
      while (index != start) {
        arr[index] = arr[index - 1];
        index--;
      }
      const nodeOneIdx = `#stripe-${arr[start]}`;
      const nodeTwoIdx = `#stripe-${value}`;
      console.log(nodeOneIdx, nodeTwoIdx);

      // // get the actual nodes
      const nodeOne = document.querySelector(nodeOneIdx);
      const nodeTwo = document.querySelector(nodeTwoIdx);
      promises.push(swap(nodeOne.parentNode, nodeTwo, nodeOne));
      arr[start] = value;

      // Update all the pointers
      start++;
      mid++;
      start2++;
    }
  }
}

function mergeSortHelper(arr, l, r) {
  if (l < r) {
    // Same as (l + r) / 2, but avoids overflow
    // for large l and r
    let m = l + Math.floor((r - l) / 2);

    // Sort first and second halves
    mergeSortHelper(arr, l, m);
    mergeSortHelper(arr, m + 1, r);
    // console.log(l, m, r);
    merge(arr, l, m, r);
  }
}

let i = 1;
const swap = (parent, nodeA, nodeB) => {
  return new Promise((resolve) => {
    setTimeout(function () {
      nodeA.classList.add("animate-swap");
      nodeB.classList.add("animate-swap");
      parent.insertBefore(nodeA, nodeB);
      resolve();
    }, 25 * i++);
  });
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
