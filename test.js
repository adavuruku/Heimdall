let rea = {
    'sherif':'she',
    'h':20
}

// k = ['sherif', 'well']

// for(g of k){
//     if(!rea.hasOwnProperty(g)){
//         console.log("eno dey", g)
//         break;
//     }
// }
// k.forEach(element => {
    
// });
// console.log(rea.hasOwnProperty("hoo"))

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
  };
  
  let del = "eyeColor"
  delete person.age;  // or delete person["age"];

  delete person[del];

  console.log(person)