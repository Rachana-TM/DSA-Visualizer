/* =========================
        GRAPH MODULE
========================= */

function handleGraphOperation(operation){

    switch(operation){

        case "Add Vertex":

            updateMessage("Vertex Added");

            updateComplexity("O(1)","O(1)");

            updateCode("graph.addVertex(v);");

            drawGraph();

            break;

        case "Add Edge":

            updateMessage("Edge Added");

            updateComplexity("O(1)","O(1)");

            updateCode("graph.addEdge(u,v);");

            drawGraph();

            break;

        case "Remove Edge":

            updateMessage("Edge Removed");

            updateComplexity("O(1)","O(1)");

            updateCode("graph.removeEdge(u,v);");

            drawGraph();

            break;

        case "BFS":

            updateMessage("Breadth First Search");

            updateComplexity("O(V+E)","O(V)");

            updateCode(`queue.push(start);`);

            drawGraph();

            break;

        case "DFS":

            updateMessage("Depth First Search");

            updateComplexity("O(V+E)","O(V)");

            updateCode(`dfs(vertex);`);

            drawGraph();

            break;

    }

}

function drawGraph(){

document.getElementById("visualizationArea").innerHTML=`

<div class="graph">

<div class="graph-node a">A</div>

<div class="graph-node b">B</div>

<div class="graph-node c">C</div>

<div class="graph-node d">D</div>

<svg width="500" height="250">

<line x1="70" y1="60" x2="220" y2="60"/>

<line x1="220" y1="60" x2="370" y2="160"/>

<line x1="70" y1="60" x2="220" y2="160"/>

<line x1="220" y1="160" x2="370" y2="160"/>

</svg>

</div>

`;

}