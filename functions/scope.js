function thisBuilding(oldName,newName){
  var students = [
    "Jonathan",
    "Teague",
    "Ricardo",
    "Tony",
    "Greg",
    "Dani",
    "Nadia",
    "Swapna",
    "Lionel",
    "Jodran",
    "Scott"
    ];

  function changeStudent(){
    students[students.indexOf(oldName)] = newName;
  }

  for (let student of students) {
    console.log("\nBefore change:\n" + students.join("-"));

    oldName = student;
    changeStudent();

    console.log("\nAfter change:\n" + students.join("-"));
  }
}

thisBuilding(undefined,"Mamadou");

