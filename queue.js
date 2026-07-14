/* =========================
   QUEUE MODULE
========================= */

let queueData = [];

/* =========================
   MAIN ROUTER
========================= */

function handleQueueOperation(operation) {

    switch(operation) {

        case "Enqueue":
            enqueueElement();
            break;

        case "Dequeue":
            dequeueElement();
            break;

        case "Front":
            frontElement();
            break;

        case "Rear":
            rearElement();
            break;

        default:
            updateMessage("Unknown Queue Operation");
    }

}

/* =========================
   ENQUEUE
========================= */

function enqueueElement() {

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

    queueData.push(value);

    document.getElementById(
        "operationInput"
    ).value = "";

    renderQueue();

    updateMessage(
        `${value} enqueued`
    );

    updateComplexity("O(1)", "O(1)");

    updateCode(
`queue.push(${value});`
    );

}

/* =========================
   DEQUEUE
========================= */

async function dequeueElement() {

    if(queueData.length === 0) {

        updateMessage("Queue Underflow");
        return;
    }

    const boxes =
        document.querySelectorAll(".queue-box");

    if(boxes.length > 0) {

        boxes[0].classList.add(
            "pop-animation"
        );

        await sleep(
            appState.animationSpeed
        );
    }

    const removed =
        queueData.shift();

    renderQueue();

    updateMessage(
        `${removed} dequeued`
    );

    updateComplexity("O(1)", "O(1)");

    updateCode(
`queue.shift();`
    );

}

/* =========================
   FRONT
========================= */

async function frontElement() {

    if(queueData.length === 0) {

        updateMessage("Queue Empty");
        return;
    }

    const boxes =
        document.querySelectorAll(".queue-box");

    if(boxes.length > 0) {

        boxes[0].classList.add("found");

        await sleep(
            appState.animationSpeed
        );

        boxes[0].classList.remove("found");
    }

    updateMessage(
        `Front = ${queueData[0]}`
    );

    updateComplexity("O(1)", "O(1)");

    updateCode(
`queue[0]`
    );

}

/* =========================
   REAR
========================= */

async function rearElement() {

    if(queueData.length === 0) {

        updateMessage("Queue Empty");
        return;
    }

    const boxes =
        document.querySelectorAll(".queue-box");

    const lastIndex =
        boxes.length - 1;

    boxes[lastIndex].classList.add(
        "found"
    );

    await sleep(
        appState.animationSpeed
    );

    boxes[lastIndex].classList.remove(
        "found"
    );

    updateMessage(
        `Rear = ${queueData[queueData.length - 1]}`
    );

    updateComplexity("O(1)", "O(1)");

    updateCode(
`queue[queue.length - 1]`
    );

}

/* =========================
   RENDER QUEUE
========================= */

function renderQueue() {

    const area =
        document.getElementById(
            "visualizationArea"
        );

    area.innerHTML = "";

    const container =
        document.createElement("div");

    container.classList.add(
        "queue-container"
    );

    queueData.forEach((value,index) => {

        const box =
            document.createElement("div");

        box.classList.add(
            "queue-box"
        );

        box.innerText = value;

        if(index === 0) {

            const front =
                document.createElement("div");

            front.classList.add(
                "queue-label"
            );

            front.innerText =
                "Front";

            container.appendChild(front);
        }

        container.appendChild(box);

        if(index <
           queueData.length - 1) {

            const arrow =
                document.createElement("span");

            arrow.classList.add(
                "queue-arrow"
            );

            arrow.innerText = "→";

            container.appendChild(
                arrow
            );
        }

    });

    if(queueData.length > 0) {

        const rear =
            document.createElement("div");

        rear.classList.add(
            "queue-label"
        );

        rear.innerText =
            "Rear";

        container.appendChild(rear);
    }

    area.appendChild(container);

}