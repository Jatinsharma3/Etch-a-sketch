let div = document.getElementById("box");

let height = div.offsetHeight;  // Get the height of the 'box' element


// Function to create a grid of div elements inside the 'box'
function makediv(numdivs) {
    // Clear the content of the 'box' element
    div.innerHTML = ''; 
    // Calculate the size of each individual grid cell
    const num = (height - 2) / numdivs;

    // Check if the number of grid divisions is less than or equal to 100
    if(numdivs<=150){
        // Create a grid of div elements
    for (let i = 0; i < numdivs*numdivs; i++) {
            const w = document.createElement("div");
            w.setAttribute("class", "divclass");
            w.setAttribute("style", `height:${num}px; width:${num}px;`);
            div.appendChild(w);
    }

    // Add an event listener to each grid cell for changing the background to black on mouse hover
    let grids = document.querySelectorAll(".divclass")
    grids.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            element.style.background = "black";
        });
    });
     // Add an event listener to the 'red' button to change the background color of grid cells to red
    let pink = document.getElementById("hotpink")
    pink.addEventListener("click", () => {
        grids.forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = "hotpink";
            })
        });
    })
     // Add an event listener to the 'clear' button to reset grid cell colors to white
    let clear = document.querySelector(".clear");
    clear.addEventListener("click", () => {
        grids.forEach((element) => {
            element.style.background = "white";
        });
    });
    // Add an event listener to the 'color' button to add random colors to grid cells
    let btnc = document.querySelector(".color");
    btnc.addEventListener("click", () => {
        grids.forEach((element) => {
            let i = 0;
            let a = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let c = Math.floor(Math.random() * 256);
            element.addEventListener("mouseenter", () => {
                element.style.background =
                    "rgb(" +
                    (a - (a / 100) * i) +
                    "," +
                    (b - (b / 100) * i) +
                    "," +
                    (c - (c / 100) * i) +
                    ")";
                i++;
            });
        });
    });
}
    else{
        alert("Please set grid size smaller than 150.");
    }
}

//  Function to handle the 'Create Grid' button click
function handelbtn() {
    const num = parseInt(document.getElementById("input").value);
    makediv(num);
}







