/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  


  function PrintStudentswithMap() {
    //Write your code here , just console.log
    const score = arr.filter((student) => student.marks > 50)
    .map((score) => console.log(score));
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach((student) => {
          if (student.marks >50) {
            console.log(student);
          }
        });
    
  }
  
  function addData() {
    //Write your code here, just console.log
    const newStudent = { id: 4, name: "Swati", age: "30", marks: 45 };
    arr.push(newStudent);
    console.log(newStudent);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr = arr.filter((student) => student.marks < 50);
    console.log(arr);
  }
  
  function concatenateArray() {
    const newArray = [
          { id: 5, name: "aashi", age: "25", marks: 40 },
          { id: 6, name: "rajesh", age: "28", marks: 60 },
          { id: 7, name: "Kate", age: "26", marks: 70 },
        ];
      
        const concatenatedArray = arr.concat(newArray);
        console.log(concatenatedArray);
  }
  
