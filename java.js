console.log("Hello World!")
for(let i = 0; i <= 15; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.id = "box -"+ i;
    document.body.appendChild(newDiv)
}
const divs = document.querySelectorAll("div");
function random(max){
    return Math.floor(Math.random()*(max+1));
}
divs.forEach(div =>{
div.addEventListener("mouseover", ()=> {
    const rndCol = `rgb(${random(255)}, ${random(255)},
     ${random(255)})`;
     div.style.backgroundColor = rndCol
});
});
const btn = document.createElement("button");
btn.textContent = "Click me";
document.getElementById("box -0").appendChild(btn)
btn.addEventListener("click", () =>{
    function updateGrid(){

        let newGrid = prompt("Input a number between 1 and 100 to change the grid:");
            newGrid = +newGrid;
            if (!isNaN(newGrid) && newGrid >= 1 && newGrid <= 100) {
                    document.body.innerHTML = "";
                    for(let i = 0; i < newGrid; i++){
                        const newDiv = document.createElement("div");
                        newDiv.classList.add("userBox");
                        newDiv.id = "userBox -"+ i;
                        document.body.appendChild(newDiv)
                        const userdivs = document.querySelectorAll("div");
function random(max){
    return Math.floor(Math.random()*(max+1));
}
userdivs.forEach(div =>{
div.addEventListener("mouseover", ()=> {
    const rndColUser = `rgb(${random(255)}, ${random(255)},
     ${random(255)})`;
     div.style.backgroundColor = rndColUser
});
});
                }
              } else {
                alert("Invalid choice")
              }
        }
    updateGrid();}
)
