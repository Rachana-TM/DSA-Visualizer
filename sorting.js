/* =========================
   SORTING MODULE
========================= */

let sortingData = [];

/* =========================
   MAIN ROUTER
========================= */

function handleSortingOperation(operation) {

    switch(operation) {

        case "Bubble Sort":
            initializeBubbleSort();
            break;

        case "Selection Sort":
            initializeSelectionSort();
            break;

        case "Insertion Sort":
            initializeInsertionSort();
            break;

        case "Merge Sort":
            initializeMergeSort();
            break;

        case "Quick Sort":
            initializeQuickSort();
            break;

        default:
            updateMessage(`${operation} coming soon...`);
    }

}
/* =========================
   INITIALIZE BUBBLE SORT
========================= */

async function initializeBubbleSort() {

    const input =
        document.getElementById(
            "mainInput"
        ).value.trim();

    if(input === "") {

        updateMessage(
            "Enter array values in main input"
        );

        return;
    }

    sortingData = input
        .split(",")
        .map(item => Number(item.trim()));

    renderBars();

    updateComplexity(
        "Best: O(n) | Avg: O(n²) | Worst: O(n²)",
        "O(1)"
    );

    updateCode(
`for(let i=0;i<n;i++){
   for(let j=0;j<n-i-1;j++){
      if(arr[j] > arr[j+1]){
         [arr[j], arr[j+1]] =
         [arr[j+1], arr[j]];
      }
   }
}`
    );

    updateMessage(
        "Bubble Sort Started"
    );

    await bubbleSort();
}

/* =========================
   BUBBLE SORT
========================= */

async function bubbleSort() {

    let n = sortingData.length;

    for(let i=0;i<n;i++) {

        for(let j=0;j<n-i-1;j++) {

            renderBars(j,j+1);

            await sleep(
                appState.animationSpeed
            );

            if(
                sortingData[j] >
                sortingData[j+1]
            ) {

                let temp =
                    sortingData[j];

                sortingData[j] =
                    sortingData[j+1];

                sortingData[j+1] =
                    temp;

                renderBars(j,j+1);

                await sleep(
                    appState.animationSpeed
                );
            }
        }
    }

    renderBars();

    updateMessage(
        "Sorting Completed"
    );
}

/* =========================
   RENDER BARS
========================= */

function renderBars(
    active1 = -1,
    active2 = -1
) {

    const area =
        document.getElementById(
            "visualizationArea"
        );

    area.innerHTML = "";

    const container =
        document.createElement("div");

    container.classList.add(
        "sorting-container"
    );

    sortingData.forEach(
        (value,index) => {

        const bar =
            document.createElement(
                "div"
            );

        bar.classList.add(
            "sorting-bar"
        );

        if(
            index === active1 ||
            index === active2
        ) {
            bar.classList.add(
                "active-bar"
            );
        }

        bar.style.height =
            `${value * 3}px`;

        const label =
            document.createElement(
                "span"
            );

        label.innerText = value;

        bar.appendChild(label);

        container.appendChild(
            bar
        );

    });

    area.appendChild(
        container
    );

}

/* =========================
   SELECTION SORT
========================= */

async function initializeSelectionSort() {

    const input =
        document.getElementById("mainInput").value.trim();

    if(input === "") {
        updateMessage("Enter array values");
        return;
    }

    sortingData = input
        .split(",")
        .map(item => Number(item.trim()));

    renderBars();

    updateComplexity(
        "Best: O(n²) | Avg: O(n²) | Worst: O(n²)",
        "O(1)"
    );

    updateCode(
`for(let i=0;i<n-1;i++){
   let min=i;
   for(let j=i+1;j<n;j++){
      if(arr[j] < arr[min]){
         min=j;
      }
   }
   swap(arr[i],arr[min]);
}`
    );

    updateMessage("Selection Sort Started");

    await selectionSort();
}

async function selectionSort() {

    let n = sortingData.length;

    for(let i=0;i<n-1;i++) {

        let minIndex = i;

        for(let j=i+1;j<n;j++) {

            renderBars(minIndex,j);

            await sleep(appState.animationSpeed);

            if(
                sortingData[j] <
                sortingData[minIndex]
            ) {
                minIndex = j;
            }
        }

        let temp =
            sortingData[i];

        sortingData[i] =
            sortingData[minIndex];

        sortingData[minIndex] =
            temp;

        renderBars(i,minIndex);

        await sleep(appState.animationSpeed);
    }

    renderBars();

    updateMessage(
        "Selection Sort Completed"
    );
}

/* =========================
   INSERTION SORT
========================= */

async function initializeInsertionSort() {

    const input =
        document.getElementById("mainInput").value.trim();

    if(input === "") {
        updateMessage("Enter array values");
        return;
    }

    sortingData = input
        .split(",")
        .map(item => Number(item.trim()));

    renderBars();

    updateComplexity(
        "Best: O(n) | Avg: O(n²) | Worst: O(n²)",
        "O(1)"
    );

    updateCode(
`for(let i=1;i<n;i++){
   let key=arr[i];
   let j=i-1;

   while(j>=0 && arr[j]>key){
      arr[j+1]=arr[j];
      j--;
   }

   arr[j+1]=key;
}`
    );

    updateMessage(
        "Insertion Sort Started"
    );

    await insertionSort();
}

async function insertionSort() {

    let n = sortingData.length;

    for(let i=1;i<n;i++) {

        let key =
            sortingData[i];

        let j = i - 1;

        while(
            j >= 0 &&
            sortingData[j] > key
        ) {

            sortingData[j+1] =
                sortingData[j];

            renderBars(j,j+1);

            await sleep(
                appState.animationSpeed
            );

            j--;
        }

        sortingData[j+1] = key;

        renderBars();

        await sleep(
            appState.animationSpeed
        );
    }

    renderBars();

    updateMessage(
        "Insertion Sort Completed"
    );
}
/* =========================
   MERGE SORT
========================= */

async function initializeMergeSort() {

    const input = document.getElementById("mainInput").value.trim();

    if (!input) {
        updateMessage("Enter array values");
        return;
    }

    sortingData = input.split(",").map(Number);

    updateComplexity(
        "Best: O(n log n) | Avg: O(n log n) | Worst: O(n log n)",
        "O(n)"
    );

    updateCode(`Merge Sort`);

    await mergeSort(0, sortingData.length - 1);

    renderBars();

    updateMessage("Merge Sort Completed");
}

async function mergeSort(left, right) {

    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    await mergeSort(left, mid);

    await mergeSort(mid + 1, right);

    await merge(left, mid, right);

}

async function merge(left, mid, right) {

    let leftArray = sortingData.slice(left, mid + 1);

    let rightArray = sortingData.slice(mid + 1, right + 1);

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftArray.length && j < rightArray.length) {

        renderBars(k);

        await sleep(appState.animationSpeed);

        if (leftArray[i] <= rightArray[j]) {

            sortingData[k] = leftArray[i];
            i++;

        } else {

            sortingData[k] = rightArray[j];
            j++;

        }

        k++;

        renderBars();

    }

    while (i < leftArray.length) {

        sortingData[k++] = leftArray[i++];

        renderBars();

        await sleep(appState.animationSpeed);

    }

    while (j < rightArray.length) {

        sortingData[k++] = rightArray[j++];

        renderBars();

        await sleep(appState.animationSpeed);

    }

}
/* =========================
   QUICK SORT
========================= */

async function initializeQuickSort() {

    const input = document.getElementById("mainInput").value.trim();

    if (!input) {

        updateMessage("Enter array values");

        return;

    }

    sortingData = input.split(",").map(Number);

    updateComplexity(
        "Best: O(n log n) | Avg: O(n log n) | Worst: O(n²)",
        "O(log n)"
    );

    updateCode("Quick Sort");

    await quickSort(0, sortingData.length - 1);

    renderBars();

    updateMessage("Quick Sort Completed");

}

async function quickSort(low, high) {

    if (low < high) {

        let pi = await partition(low, high);

        await quickSort(low, pi - 1);

        await quickSort(pi + 1, high);

    }

}

async function partition(low, high) {

    let pivot = sortingData[high];

    let i = low - 1;

    for (let j = low; j < high; j++) {

        renderBars(j, high);

        await sleep(appState.animationSpeed);

        if (sortingData[j] < pivot) {

            i++;

            [sortingData[i], sortingData[j]] =
            [sortingData[j], sortingData[i]];

            renderBars(i, j);

            await sleep(appState.animationSpeed);

        }

    }

    [sortingData[i + 1], sortingData[high]] =
    [sortingData[high], sortingData[i + 1]];

    renderBars(i + 1, high);

    await sleep(appState.animationSpeed);

    return i + 1;

}