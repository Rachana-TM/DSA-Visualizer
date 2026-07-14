/* =========================
   LINKED LIST MODULE
========================= */

let linkedListData = [];

/* =========================
   MAIN ROUTER
========================= */

function handleLinkedListOperation(operation) {

    switch(operation) {

        case "Insert":
            insertNode();
            break;

        case "Delete":
            deleteNode();
            break;

        case "Search":
            searchNode();
            break;

        case "Traverse":
            traverseList();
            break;

        default:
            updateMessage(
                "Unknown Linked List Operation"
            );
    }

}

/* =========================
   INSERT NODE
========================= */

function insertNode() {

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

    linkedListData.push(value);

    document.getElementById(
        "operationInput"
    ).value = "";

    renderLinkedList();

    updateMessage(
        `${value} inserted`
    );

    updateComplexity(
        "O(1)",
        "O(1)"
    );

    updateCode(
`linkedList.push(${value});`
    );

}

/* =========================
   DELETE NODE
========================= */

function deleteNode() {

    const value =
        Number(
            document.getElementById(
                "operationInput"
            ).value
        );

    const index =
        linkedListData.indexOf(value);

    if(index === -1) {

        updateMessage(
            "Node not found"
        );

        return;
    }

    linkedListData.splice(index,1);

    renderLinkedList();

    updateMessage(
        `${value} deleted`
    );

    updateComplexity(
        "O(n)",
        "O(1)"
    );

    updateCode(
`linkedList.delete(${value});`
    );

}

/* =========================
   SEARCH NODE
========================= */

async function searchNode() {

    const value =
        Number(
            document.getElementById(
                "operationInput"
            ).value
        );

    const nodes =
        document.querySelectorAll(
            ".list-node"
        );

    for(let i=0;i<nodes.length;i++) {

        nodes[i].classList.add(
            "visiting"
        );

        await sleep(
            appState.animationSpeed
        );

        if(
            linkedListData[i] === value
        ) {

            nodes[i].classList.remove(
                "visiting"
            );

            nodes[i].classList.add(
                "found"
            );

            updateMessage(
                `${value} found`
            );

            updateComplexity(
                "O(n)",
                "O(1)"
            );

            updateCode(
`linkedList.search(${value});`
            );

            return;
        }

        nodes[i].classList.remove(
            "visiting"
        );

    }

    updateMessage(
        "Node not found"
    );

}

/* =========================
   TRAVERSE
========================= */

async function traverseList() {

    const nodes =
        document.querySelectorAll(
            ".list-node"
        );

    for(let i=0;i<nodes.length;i++) {

        nodes[i].classList.add(
            "visiting"
        );

        await sleep(
            appState.animationSpeed
        );

        nodes[i].classList.remove(
            "visiting"
        );

    }

    updateMessage(
        "Traversal completed"
    );

    updateComplexity(
        "O(n)",
        "O(1)"
    );

    updateCode(
`for(node of linkedList){
   console.log(node);
}`
    );

}

/* =========================
   RENDER LINKED LIST
========================= */

function renderLinkedList() {

    const area =
        document.getElementById(
            "visualizationArea"
        );

    area.innerHTML = "";

    const container =
        document.createElement("div");

    container.classList.add(
        "list-container"
    );

    linkedListData.forEach(
        (value,index) => {

        const node =
            document.createElement(
                "div"
            );

        node.classList.add(
            "list-node"
        );

        node.innerText =
            value;

        container.appendChild(
            node
        );

        const arrow =
            document.createElement(
                "span"
            );

        arrow.classList.add(
            "list-arrow"
        );

        arrow.innerText = "→";

        container.appendChild(
            arrow
        );

    });

    const nullNode =
        document.createElement(
            "div"
        );

    nullNode.classList.add(
        "null-node"
    );

    nullNode.innerText =
        "NULL";

    container.appendChild(
        nullNode
    );

    area.appendChild(
        container
    );

}