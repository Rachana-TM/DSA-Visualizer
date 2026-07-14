
/* =========================
   ARRAY MODULE
========================= */

let arrayData = [];

/* =========================
   MAIN ROUTER
========================= */

function handleArrayOperation(operation) {

    switch(operation) {

        case "Create":
            createArray();
            break;

        case "Insert":
            insertElement();
            break;

        case "Delete":
            deleteElement();
            break;

        case "Search":
            searchElement();
            break;

        case "Update":
            updateElement();
            break;

        case "Traverse":
            traverseArray();
            break;

        default:
            updateMessage("Unknown Array Operation");
    }

}

/* =========================
   CREATE ARRAY
========================= */

function createArray() {

    const input =
        document.getElementById("mainInput").value;

    if(!input.trim()) {

        updateMessage("Please enter array values");
        return;
    }

    arrayData = input
        .split(",")
        .map(item => Number(item.trim()));

    renderArray();

    updateMessage("Array created successfully");

    updateComplexity("O(n)", "O(n)");

    updateCode(
`let arr = [${arrayData.join(", ")}];`
    );
}

/* =========================
   INSERT
========================= */

function insertElement() {

    const value =
        Number(
            document.getElementById("operationInput").value
        );

    if(isNaN(value)) {

        updateMessage("Enter valid value");
        return;
    }

    arrayData.push(value);

    renderArray();

    updateMessage(`${value} inserted`);

    updateComplexity("O(1)", "O(1)");

    updateCode(
`arr.push(${value});`
    );
}

/* =========================
   DELETE
========================= */

function deleteElement() {

    const value =
        Number(
            document.getElementById("operationInput").value
        );

    const index =
        arrayData.indexOf(value);

    if(index === -1) {

        updateMessage("Element not found");
        return;
    }

    arrayData.splice(index,1);

    renderArray();

    updateMessage(`${value} deleted`);

    updateComplexity("O(n)", "O(1)");

    updateCode(
`arr.splice(index,1);`
    );
}

/* =========================
   SEARCH
========================= */

async function searchElement() {

    const value =
        Number(
            document.getElementById("operationInput").value
        );

    const boxes =
        document.querySelectorAll(".array-box");

    for(let i=0;i<boxes.length;i++) {

        boxes[i].classList.add("visiting");

        await sleep(appState.animationSpeed);

        if(arrayData[i] === value) {

            boxes[i].classList.remove("visiting");

            boxes[i].classList.add("found");

            updateMessage(
                `${value} found at index ${i}`
            );

            updateComplexity("O(n)", "O(1)");

            updateCode(
`arr.indexOf(${value});`
            );

            return;
        }

        boxes[i].classList.remove("visiting");
    }

    updateMessage("Element not found");
}

/* =========================
   UPDATE
========================= */

function updateElement() {

    const input =
        document.getElementById("operationInput").value;

    const parts =
        input.split(",");

    if(parts.length !== 2) {

        updateMessage(
            "Format: index,value"
        );

        return;
    }

    const index =
        Number(parts[0]);

    const value =
        Number(parts[1]);

    if(index < 0 ||
       index >= arrayData.length) {

        updateMessage("Invalid index");
        return;
    }

    arrayData[index] = value;

    renderArray();

    updateMessage(
        `Index ${index} updated`
    );

    updateComplexity("O(1)", "O(1)");

    updateCode(
`arr[${index}] = ${value};`
    );
}

/* =========================
   TRAVERSE
========================= */

async function traverseArray() {

    const boxes =
        document.querySelectorAll(".array-box");

    for(let i=0;i<boxes.length;i++) {

        boxes[i].classList.add("visiting");

        await sleep(appState.animationSpeed);

        boxes[i].classList.remove("visiting");
    }

    updateMessage(
        "Traversal completed"
    );

    updateComplexity("O(n)", "O(1)");

    updateCode(
`for(let item of arr){
    console.log(item);
}`
    );
}

/* =========================
   RENDER ARRAY
========================= */

function renderArray() {

    const area =
        document.getElementById(
            "visualizationArea"
        );

    area.innerHTML = "";

    arrayData.forEach((value,index) => {

        const box =
            document.createElement("div");

        box.classList.add(
            "array-box"
        );

        box.innerHTML =
            `${value}`;

        area.appendChild(box);

    });

}