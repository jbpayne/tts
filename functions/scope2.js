function outer() {
  
  const a = new String();
  const b = new Object();
  console.log(a,b);

  function inner(a,b) {
    console.log(a,b);
    a = "Hi";
    b = {x:"Bye"};
    console.log(a,b);
    b.x += " Bye Bye";
    console.log(a,b);
  }

inner(a,b);
  console.log(a,b);

}

outer();