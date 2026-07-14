/* =========================
        TREE MODULE
========================= */

let treeType = "BST";

function handleTreeOperation(operation){

    switch(operation){

        case "Binary Tree":

            treeType = "BT";

            updateMessage("Binary Tree Selected");

            updateCode("// Binary Tree");

            break;

        case "Binary Search Tree":

            treeType = "BST";

            updateMessage("Binary Search Tree Selected");

            updateCode("// Binary Search Tree");

            break;

        case "Insert":

            updateMessage(`Insert into ${treeType}`);

            updateComplexity("O(log n)","O(n)");

            updateCode(`insert(root,data);`);

            drawTree("Insert");

            break;

        case "Delete":

            updateMessage(`Delete from ${treeType}`);

            updateComplexity("O(log n)","O(n)");

            updateCode(`delete(root,data);`);

            drawTree("Delete");

            break;

        case "Search":

            updateMessage("Searching node...");

            updateComplexity("O(log n)","O(1)");

            updateCode(`search(root,key);`);

            drawTree("Search");

            break;

        case "Inorder":

            updateMessage("Inorder Traversal");

            updateComplexity("O(n)","O(n)");

            updateCode(`Left -> Root -> Right`);

            drawTree("Inorder");

            break;

        case "Preorder":

            updateMessage("Preorder Traversal");

            updateComplexity("O(n)","O(n)");

            updateCode(`Root -> Left -> Right`);

            drawTree("Preorder");

            break;

        case "Postorder":

            updateMessage("Postorder Traversal");

            updateComplexity("O(n)","O(n)");

            updateCode(`Left -> Right -> Root`);

            drawTree("Postorder");

            break;

        case "Level Order":

            updateMessage("Level Order Traversal");

            updateComplexity("O(n)","O(n)");

            updateCode(`Queue Based Traversal`);

            drawTree("Level");

            break;

    }

}

function drawTree(title){

    document.getElementById("visualizationArea").innerHTML=`

<div class="tree-container">

<h2>${title}</h2>

<div class="tree">

<div class="node">50</div>

<div class="children">

<div>

<div class="node">30</div>

<div class="children">

<div class="node">20</div>

<div class="node">40</div>

</div>

</div>

<div>

<div class="node">70</div>

<div class="children">

<div class="node">60</div>

<div class="node">80</div>

</div>

</div>

</div>

</div>

</div>

`;

}