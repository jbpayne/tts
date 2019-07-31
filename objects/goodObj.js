
let counter = [1,1,1];
  const shapesDiv = document.getElementById("shapes");

  function Rect(height, width) {
    this.height = height;
    this.width = width;
  
    const newDiv = document.createElement("div");
    const textName = document.createTextNode(`Rectangle ${counter[0]}`);
    counter[0]++;
    newDiv.appendChild(textName);
    const bgColor = height + width > 255 ? (height + width) - Math.random()*100 : 255 - (height + width);
    newDiv.style = `
    background-color: rgb(
      ${bgColor}, 
      ${bgColor + 80 > 255 ? bgColor - 80 : bgColor + 50}, 
      ${bgColor + 50 > 255 ? bgColor - 50 : bgColor + 70}
      );
    color: ${bgColor < 90 ? "white" : "black"};
    white-space: nowrap;
    margin: 1vw;
    padding: 1vw;
    height: ${height < 20 ? height * 7 : height + Math.random()*30 + 25}px;
    width: ${width < 20 ? width * 7 : width + Math.random()*30 + 25 < 100 ? 100 : width + Math.random()*30 + 25}px;
    border: 0.1vw solid black;
    display: inline-block;
    `
    shapesDiv.appendChild(newDiv);
  }
  
  function Circle(height) {
    this.height = height;
  
    const newDiv = document.createElement("div");
    const textName = document.createTextNode(`Circle ${counter[1]}`);
    counter[1]++;
    newDiv.appendChild(textName);
    const bgColor = height*2 > 255 ? (height*2) % 255 : 255 - (height*2);
    newDiv.style = `
    background-color: rgb(
      ${bgColor + 50 > 255 ? bgColor - 50 : bgColor + 50}, 
      ${bgColor}, 
      ${bgColor + 120 > 255 ? bgColor - 120 : bgColor + 120}
      );
    color: ${bgColor < 90 ? "white" : "black"};
    text-align: center;
    margin: 1vw;
    padding: 1vw;
    height: ${height < 20 ? height * 7 : height + 50}px;
    width: ${height < 20 ? height * 7 : height + 50}px;
    border: 0.1vw solid black;
    border-radius: 50%;
    display: inline-block;
    `
    shapesDiv.appendChild(newDiv);
  }
  
  function Square(height) {
    this.height = height;
  
    const newDiv = document.createElement("div");
    const textName = document.createTextNode(`Square ${counter[2]}`);
    counter[2]++;
    newDiv.appendChild(textName);
    const bgColor = height*2 > 255 ? (height*2) % 255 : 255 - (height*2);
    newDiv.style = `
    background-color: rgb(
      ${bgColor + 50 > 255 ? bgColor - 50 : bgColor + 50}, 
      ${bgColor + 120 > 255 ? bgColor - 120 : bgColor + 120},
      ${bgColor} 
      );
    color: ${bgColor < 90 ? "white" : "black"};
    margin: 1vw;
    padding: 1vw;
    height: ${height < 20 ? height * 7 : height + 50}px;
    width: ${height < 20 ? height * 7 : height + 50}px;
    border: 0.1vw solid black;
    display: inline-block;
    `
    shapesDiv.appendChild(newDiv);
  }
  
const rectangleButton = document.getElementById("rectangle");
const circleButton = document.getElementById("circle");
const squareButton = document.getElementById("square");
const clearButton = document.getElementById("clear");

rectangleButton.addEventListener("click", function(){new Rect(Math.random()*150 + 10,Math.random()*150 + 10)});
circleButton.addEventListener("click", function(){new Circle(Math.random()*150 + 10)});
squareButton.addEventListener("click", function(){new Square(Math.random()*150 + 10)});
clearButton.addEventListener("click", function(){shapesDiv.innerHTML = "";counter=[1,1,1]});