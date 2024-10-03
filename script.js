//get the container
//ceate row divs and add 16 of em
//create the row divs 16 times

const container = document.getElementById("container");
const row = document.createElement("div");
row.style.display = "flex";
const square = document.createElement("div");
square.style.height = "35px";
square.style.width = "35px";
square.style.border = "1px solid";
square.classList.add("square");

for (let i = 0; i < 16; i++) {
  var node = square.cloneNode(true);
  row.appendChild(node);
}

for (let i = 0; i < 16; i++) {
  var node = row.cloneNode(true);
  container.appendChild(node);
}

//make darker function

//add event listener to the divs

document.querySelectorAll(".square").forEach((item) => {
  item.addEventListener("mouseleave", () => {
    console.log(item);
  });
});
//write hello world

console.log("hello world");
//write hello golamz