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

function randomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelectorAll(".square").forEach((item) => {
  item.addEventListener("mouseleave", () => {
    if (!(item.classList.contains("colored"))){
      item.classList.add("colored")
      item.style.backgroundColor = randomColor()
    }
    else{
      let currentColor = window.getComputedStyle(item).backgroundColor;
      let rgbValues = currentColor.match(/\d+/g).map(Number);
      rgbValues = rgbValues.map(value => Math.min(255, value - 10));
      item.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
    }
  });
});



