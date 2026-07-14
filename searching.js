/* =========================
        SEARCHING MODULE
========================= */

async function handleSearchingOperation(operation) {

    const arrayInput = document
        .getElementById("mainInput")
        .value
        .trim();

    const targetInput = document
        .getElementById("operationInput")
        .value
        .trim();

    if(arrayInput === ""){

        updateMessage("Enter array values first.");

        return;
    }

    if(targetInput === ""){

        updateMessage("Enter a search value.");

        return;
    }

    let arr = arrayInput
        .split(",")
        .map(x => Number(x.trim()));

    let target = Number(targetInput);

    switch(operation){

        case "Linear Search":

            linearSearch(arr,target);

            break;

        case "Binary Search":

            arr.sort((a,b)=>a-b);

            binarySearch(arr,target);

            break;
    }

}

/* =========================
        DRAW ARRAY
========================= */

function drawSearchArray(arr,active=-1,found=-1){

    const area =
        document.getElementById("visualizationArea");

    area.innerHTML="";

    const container =
        document.createElement("div");

    container.style.display="flex";
    container.style.gap="10px";
    container.style.flexWrap="wrap";

    arr.forEach((value,index)=>{

        const box =
            document.createElement("div");

        box.className="array-box";

        box.innerText=value;

        if(index===active)
            box.classList.add("visiting");

        if(index===found)
            box.classList.add("found");

        container.appendChild(box);

    });

    area.appendChild(container);

}

/* =========================
        LINEAR SEARCH
========================= */

async function linearSearch(arr,target){

    updateComplexity("O(n)","O(1)");

    updateCode(
`for(i=0;i<n;i++)
{
   if(arr[i]==key)
      return i;
}`
    );

    for(let i=0;i<arr.length;i++){

        drawSearchArray(arr,i);

        updateMessage(
            `Checking ${arr[i]}`
        );

        await sleep(appState.animationSpeed);

        if(arr[i]===target){

            drawSearchArray(arr,-1,i);

            updateMessage(
                `${target} found at index ${i}`
            );

            return;
        }

    }

    drawSearchArray(arr);

    updateMessage(
        `${target} not found`
    );

}

/* =========================
        BINARY SEARCH
========================= */

async function binarySearch(arr,target){

    updateComplexity("O(log n)","O(1)");

    updateCode(
`low=0;
high=n-1;

while(low<=high){

 mid=(low+high)/2;

}`
    );

    let low=0;

    let high=arr.length-1;

    while(low<=high){

        let mid=
            Math.floor((low+high)/2);

        drawSearchArray(arr,mid);

        updateMessage(
            `Checking ${arr[mid]}`
        );

        await sleep(appState.animationSpeed);

        if(arr[mid]===target){

            drawSearchArray(arr,-1,mid);

            updateMessage(
                `${target} found at index ${mid}`
            );

            return;
        }

        if(arr[mid]<target){

            low=mid+1;

        }else{

            high=mid-1;

        }

    }

    drawSearchArray(arr);

    updateMessage(
        `${target} not found`
    );

}