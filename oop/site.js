function Circle(diameter, lineThickness, lineColor) {
  this.diameter = diameter;
  this.lineThickness = lineThickness;
  this.lineColor = lineColor;
}


  myCircle1 = new Circle(44, 5, "blue");
  myCircle2 = new Circle(55, 3, "orange");
  console.log(myCircle1.diameter);
  console.log(myCircle2);
