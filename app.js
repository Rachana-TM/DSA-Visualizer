
console.log("app.js loaded");/* =========================
   GLOBAL APPLICATION STATE
========================= */

const appState = {
    currentModule: "array",
    animationSpeed: 500,
    theme: "dark"
};
let isPaused = false;
let isRunning = false;

/* =========================
   MODULE CONFIGURATION
========================= */

const moduleConfig = {

    array: {
        title: "Array Visualizer",
        buttons: [
            "Create",
            "Insert",
            "Delete",
            "Search",
            "Update",
            "Traverse"
        ]
    },

    stack: {
        title: "Stack Visualizer",
        buttons: [
            "Push",
            "Pop",
            "Peek",
            "Size"
        ]
    },

    queue: {
        title: "Queue Visualizer",
        buttons: [
            "Enqueue",
            "Dequeue",
            "Front",
            "Rear"
        ]
    },

    linkedlist: {
        title: "Linked List Visualizer",
        buttons: [
            "Insert",
            "Delete",
            "Search",
            "Traverse"
        ]
    },

    tree: {
        title: "Tree Visualizer",
        buttons: [
            "Binary Tree",
            "Binary Search Tree",
            "Insert",
            "Delete",
            "Search",
            "Inorder",
            "Preorder",
            "Postorder",
            "Level Order"
        ]
    },
    
    graph: {
        title: "Graph Visualizer",
        buttons: [
            "Add Vertex",
            "Add Edge",
            "Remove Edge",
            "BFS",
            "DFS"
        ]
    },

    sorting: {
        title: "Sorting Visualizer",
        buttons: [
            "Bubble Sort",
            "Selection Sort",
            "Insertion Sort",
            "Merge Sort",
            "Quick Sort"
        ]
    },

    searching: {
        title: "Searching Visualizer",
        buttons: [
            "Linear Search",
            "Binary Search"
        ]
    }

};

/* =========================
   INITIALIZATION
========================= */

window.onload = () => {

    initializeSpeedSlider();

    loadModule("array");

};

/* =========================
   MODULE LOADER
========================= */

function loadModule(moduleName) {

    appState.currentModule = moduleName;

    const module = moduleConfig[moduleName];

    document.getElementById("moduleTitle").innerText =
        module.title;

    generateButtons(module.buttons);

    resetPanels();

    document.getElementById("visualizationArea").innerHTML =
        `<h3>${module.title}</h3>`;

    updateMessage(
        `${module.title} loaded successfully`
    );
}

/* =========================
   GENERATE BUTTONS
========================= */

function generateButtons(buttons) {

    const container =
        document.getElementById("buttonsContainer");

    container.innerHTML = "";

    buttons.forEach(button => {

        const btn =
            document.createElement("button");

        btn.classList.add("action-btn");

        btn.innerText = button;

        btn.onclick = () => {

    handleOperation(button);

};

        container.appendChild(btn);

    });

}

/* =========================
   SPEED CONTROL
========================= */

function initializeSpeedSlider() {

    const slider =
        document.getElementById("speedSlider");

    slider.addEventListener("input", () => {

        appState.animationSpeed =
            slider.value;

        updateMessage(
            `Animation Speed: ${slider.value} ms`
        );

    });

}




/* =========================
   THEME TOGGLE
========================= */


/* =========================
   PANEL HELPERS
========================= */

function updateMessage(message) {

    document.getElementById(
        "messageArea"
    ).innerText = message;

}

function updateComplexity(time, space) {

    document.getElementById(
        "timeComplexity"
    ).innerText =
        `Time Complexity : ${time}`;

    document.getElementById(
        "spaceComplexity"
    ).innerText =
        `Space Complexity : ${space}`;

}

function updateCode(code) {

    document.getElementById(
        "codeBlock"
    ).innerText = code;

}

function resetPanels() {

    updateComplexity("-", "-");

    updateCode(
`Select an operation to view implementation`
    );

}

/* =========================
   OPERATION ROUTER
========================= */

function handleOperation(operation) {

    switch(appState.currentModule) {

        case "array":
            handleArrayOperation(operation);
            break;

        case "stack":
            handleStackOperation(operation);
            break;

        case "queue":
            handleQueueOperation(operation);
            break;

        case "linkedlist":
             handleLinkedListOperation(operation);
            break;

        case "tree":
            handleTreeOperation(operation);
            break;

        case "graph":
            handleGraphOperation(operation);
            break;

        case "sorting":
            handleSortingOperation(operation);
            break;

        case "searching":
            handleSearchingOperation(operation);
            break;

        default:
            updateMessage("Unknown module");
    }

}
/* =========================
   PLAY • PAUSE • RESET
========================= */

document.getElementById("playBtn").addEventListener("click", () => {

    isPaused = false;

    updateMessage("Animation Playing");

});

document.getElementById("pauseBtn").addEventListener("click", () => {

    isPaused = true;

    updateMessage("Animation Paused");

});

document.getElementById("resetBtn").addEventListener("click", () => {

    isPaused = false;
    isRunning = false;

    document.getElementById("visualizationArea").innerHTML = "";

    updateMessage("Visualization Reset");

    updateCode("Select an operation");

    updateComplexity("-", "-");

});
async function waitIfPaused(){

    while(isPaused){

        await sleep(100);

    }

}

/* =========================
   ANIMATION HELPER
========================= */

function sleep(ms) {

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );

}