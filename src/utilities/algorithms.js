const MERGE_SORT = "Merge Sort";
const QUICK_SORT = "Quick Sort";
const BUBBLE_SORT = "Bubble Sort";
const HEAP_SORT = "Heap Sort";
let promises = [];
let i = 1;

const removeBorderColorFromStripes = () => {
  const stripes = document.querySelectorAll(".stripe");
  stripes.forEach((stripe) =>
    stripe.classList.remove("text-animate-end", "animate-swap")
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 100);
  });
};

const sort = async (sortingAlgorithm) => {
  promises = [];
  i = 1;
  if (!isValidSortingAlgorithm(sortingAlgorithm)) {
    return;
  }

  if (!stripesAreFound()) {
    return;
  }

  await removeBorderColorFromStripes();

  switch (sortingAlgorithm) {
    case MERGE_SORT:
      return mergeSort();
    case QUICK_SORT:
      return quickSort();
    case BUBBLE_SORT:
      return bubbleSort();
    case HEAP_SORT:
      heapSort();
      return;
  }
};

const getStripeInfo = () => {
  const stripes = document.querySelectorAll(".stripe");
  const arrayOfIDs = getIdsArray(stripes);
  const n = stripes.length;

  return [stripes, arrayOfIDs, n];
};

// sort elements based on height
const mergeSort = async () => {
  const [stripes, arrayOfIDs, n] = getStripeInfo();

  mergeSortHelper(arrayOfIDs, 0, n - 1);

  return addAnimationAfterPromisesEnd(stripes);
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

async function merge(arr, start, mid, end) {
  let start2 = mid + 1;

  // If the direct merge is already sorted
  if (arr[mid] <= arr[start2]) {
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

      const nodeOneIdx = getHtmlElementId(arr[start]);
      const nodeTwoIdx = getHtmlElementId(value);

      // // get the actual nodes
      const nodeOne = document.querySelector(nodeOneIdx);
      const nodeTwo = document.querySelector(nodeTwoIdx);
      swapHtmlElementsMergeSort(nodeTwo, nodeOne, arr.length);
      // Shift all the elements between element 1
      // element 2, right by 1.
      while (index != start) {
        arr[index] = arr[index - 1];
        index--;
      }
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
    merge(arr, l, m, r);
  }
}

const swapHtmlElementsMergeSort = async (nodeA, nodeB, len) => {
  const speed = len < 50 ? 500 : Math.floor(len / 1.5);
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      animate(nodeA);
      nodeA.parentNode.insertBefore(nodeA, nodeB);
      animate(nodeB);
      resolve();
    }, speed * i++);
  });
  promises.push(promise);
  return promise;
};

const swapHtmlElementsQuickSort = async (nodeA, nodeB, len) => {
  const speed = len < 50 ? 500 : Math.floor(len / 1.5);
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;
      animate(nodeA);
      animate(nodeB);
      nodeA.parentNode.insertBefore(nodeA, nodeB);
      nodeA.parentNode.insertBefore(nodeB, siblingA);
      resolve();
    }, speed * i++);
  });
  promises.push(promise);
  return promise;
};

const animate = async (node) => {
  node.classList.add("animate-swap");
};

const quickSort = () => {
  const [stripes, arrayOfIDs, n] = getStripeInfo();
  quickSortHelper(arrayOfIDs, 0, n - 1);

  return addAnimationAfterPromisesEnd(stripes);
};

const quickSortHelper = (arr, startIdx, endIdx) => {
  if (startIdx >= endIdx) return;
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (leftIdx <= rightIdx) {
    if (arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
      const nodeA = document.querySelector(getHtmlElementId(arr[leftIdx]));
      const nodeB = document.querySelector(getHtmlElementId(arr[rightIdx]));
      swapHtmlElementsQuickSort(nodeB, nodeA, arr.length);
      swap(arr, leftIdx, rightIdx);
    }

    if (arr[leftIdx] <= arr[pivotIdx]) {
      leftIdx++;
    }

    if (arr[rightIdx] >= arr[pivotIdx]) {
      rightIdx--;
    }
  }
  const nodeA = document.querySelector(getHtmlElementId(arr[rightIdx]));
  const nodeB = document.querySelector(getHtmlElementId(arr[pivotIdx]));
  swapHtmlElementsQuickSort(nodeB, nodeA, arr.length);
  swap(arr, rightIdx, pivotIdx);

  quickSortHelper(arr, startIdx, rightIdx - 1);
  quickSortHelper(arr, rightIdx + 1, endIdx);
};

const swap = (arr, i, j) => {
  if (i < 0 || i >= arr.length) return;
  if (j < 0 || j >= arr.length) return;
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const bubbleSort = () => {
  const [stripes, arrayOfIDs, n] = getStripeInfo();

  let hasUnsortedElements = true;
  while (hasUnsortedElements) {
    hasUnsortedElements = false;
    for (let i = 1; i < n; i++) {
      if (arrayOfIDs[i - 1] > arrayOfIDs[i]) {
        const nodeA = document.querySelector(
          getHtmlElementId(arrayOfIDs[i - 1])
        );
        const nodeB = document.querySelector(getHtmlElementId(arrayOfIDs[i]));
        swapHtmlElementsQuickSort(nodeB, nodeA, n);
        swap(arrayOfIDs, i - 1, i);
        hasUnsortedElements = true;
      }
    }
  }

  return addAnimationAfterPromisesEnd(stripes);
};

const heapSort = () => {
  console.log("Heap Sort");
};

const getHtmlElementId = (number) => {
  return `#stripe-${number}`;
};

const addAnimationAfterPromisesEnd = (stripes) => {
  return Promise.all(promises).then(() => {
    stripes.forEach((strip) => strip.classList.add("text-animate-end"));
    return "done";
  });
};

const isValidSortingAlgorithm = (algorithm) => {
  const SORTING_ALGORITHMS = [MERGE_SORT, QUICK_SORT, BUBBLE_SORT, HEAP_SORT];
  return SORTING_ALGORITHMS.includes(algorithm);
};

const stripesAreFound = () => {
  const stripes = document.querySelectorAll(".stripe");
  return stripes.length > 0;
};

export default sort;
