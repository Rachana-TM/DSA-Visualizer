/* =========================
   STACK MODULE
========================= */

let stackData = [];

/* =========================
   MAIN ROUTER
========================= */

function handleStackOperation(operation) {

    switch(operation) {

        case "Push":
            pushElement();
            break;

        case "Pop":
            popElement();
            break;

        case "Peek":
            peekElement();
            break;

        case "Size":
            stackSize();
            break;

        default:
            updateMessage("Unknown Stack Operation");
    }

}

/* =========================
   PUSH
========================= */

function pushElement() {

    const input =
        document.getElementById(
            "operationInput"
        ).value.trim();

    if(input === "") {

        updateMessage(
            "Please enter a value"
        );

        return;
    }

    const value = Number(input);

    if(isNaN(value)) {

        updateMessage(
            "Enter a valid number"
        );

        return;
    }

    stackData.push(value);

document.getElementById(
    "operationInput"
).value = "";

renderStack();

    updateMessage(
        `${value} pushed into stack`
    );

    updateComplexity("O(1)", "O(1)");

    updateCode(
`stack.push(${value});`
    );

}

/* =========================
   POP
========================= */

async function popElement() {

    if(stackData.length === 0) {

        updateMessage("Stack Underflow");
        return;
    }

    const boxes =
        document.querySelectorAll(".stack-box");

    const topBox =
        boxes[0];

    if(topBox) {

        topBox.classList.add("pop-animation");

        await sleep(appState.animationSpeed);
    }

    const removed =
        stackData.pop();

    renderStack();

    updateMessage(
        `${removed} popped`
    );

    updateComplexity("O(1)", "O(1)");

    updateCode(
`stack.pop();`
    );

}

/* =========================
   PEEK
========================= */

async function peekElement() {

    if(stackData.length === 0) {

        updateMessage("Stack Empty");
        return;
    }

    const boxes =
        document.querySelectorAll(".stack-box");

    if(boxes.length > 0) {

        boxes[0].classList.add("found");

        await sleep(appState.animationSpeed);

        boxes[0].classList.remove("found");
    }

    const top =
        stackData[stackData.length - 1];

    updateMessage(
        `Top Element = ${top}`
    );

    updateComplexity("O(1)", "O(1)");

    updateCode(
`stack[stack.length - 1];`
    );

}

/* =========================
   SIZE
========================= */

function stackSize() {

    updateMessage(
        `Stack Size = ${stackData.length}`
    );

    updateComplexity("O(1)", "O(1)");

    updateCode(
`stack.length`
    );

}

/* =========================
   RENDER STACK
========================= */

function renderStack() {

    const area =
        document.getElementById(
            "visualizationArea"
        );

    area.innerHTML = "";

    const container =
        document.createElement("div");

    container.classList.add(
        "stack-container"
    );

    const topLabel =
        document.createElement("div");

    topLabel.classList.add(
        "top-label"
    );

    topLabel.innerText = "TOP";

    container.appendChild(topLabel);

    for(let i = stackData.length - 1; i >= 0; i--) {

        const box =
            document.createElement("div");

        box.classList.add(
            "stack-box"
        );

        box.innerText =
            stackData[i];

        container.appendChild(box);
    }

    area.appendChild(container);

}