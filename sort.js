// quick sort
const arr = [63, 95, 63, 26, 76, 19, 65, 8, 63, 26];
function quickSortBasic(array) {
    // recusive binary sort
    if (array.length < 2) {
        return array;
    }
    // set first as center
    const pivot = array[0];
    const lesserArray = [];
    const greaterArray = [];

    for (let i = 1; i < array.length; i++) {
        // divide left to right
        if (array[i] > pivot) {
            greaterArray.push(array[i]);
        } else {
            lesserArray.push(array[i]);
        }
    }
    // recursive call on the left right array
    return [
        ...quickSortBasic(lesserArray),
        pivot,
        ...quickSortBasic(greaterArray),
    ];
}
console.log(quickSortBasic(arr));

// selection sort
function selectionSort(arr) {
    // keep swapping min value
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        // assume first one is smallest
        let min = arr[i];
        let minIndex = i;

        for (let j = i; j < length; j++) {
            // from non sorted first elemet compare and find min value index
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        // swap that min index to the index
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}
console.log(selectionSort(arr));

//bubble sort
function optimzedBubbleSort(arr) {
    const n = arr.length;
    let swapped = true;

    for (let i = 0; i < n && swapped; i++) {
        // from frst index run for leng
        // -1 (no need for last one)
        // -i times(max keep push to right, no need for sorted element )
        // checked swapped for best case
        swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // if larger swapp poisiton
                swapped = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(optimzedBubbleSort(arr));

// insertion sort
function insertionSort(arr) {
    const n = arr.length;
    // start from first
    for (let i = 1; i < n; i++) {
        // which position to store
        let position = i;

        // store the to be sorted value
        const value = arr[i];

        // keep compare frond i to 0 and shift element to backward
        // until find the suit index where arr[poistion - 1] < arr[poistion] <  arr[poistion + 1]
        while (i >= 0 && arr[position - 1] > value) {
            arr[position] = arr[position - 1];
            position--;
        }

        // pust the value to position index
        arr[position] = value;
    }
    return arr;
}
console.log(insertionSort(arr));
