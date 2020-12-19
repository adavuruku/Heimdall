// let rea = {
//     'sherif':'she',
//     'h':20
// }

// // k = ['sherif', 'well']

// // for(g of k){
// //     if(!rea.hasOwnProperty(g)){
// //         console.log("eno dey", g)
// //         break;
// //     }
// // }
// // k.forEach(element => {
    
// // });
// // console.log(rea.hasOwnProperty("hoo"))

// var person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
//   };
  
//   let del = "eyeColor"
//   delete person.age;  // or delete person["age"];

//   delete person[del];

//   console.log(person)

n = 4
magic = [3, 2, 5, 4]; 
dist = [2, 3, 4, 2]; 

function backWardMove(start,total_val){
    for(let i=0; i < start; i++){
        total_val += (magic[i] - dist[i])
        if(total_val < 0){
            forwardMove(start + 1)
        }
        console.log(start, 'backwrd', total_val)
    }
    return start
}

function forwardMove(start){
    let total_val = 0
    for(let i=start; i < magic.length; i++){
        if(total_val < 0){
            start = i
            total_val = 0
        }
        total_val += (magic[i] - dist[i])
        console.log(start, 'forward', total_val)
    }
    if(start > 0){
        return backWardMove(start,total_val)
    }else{
        return start
    }
}

function getMinIndex(){
    let totalMagic =magic.reduce((a,b)=> a+b,0)
    let totaDist =dist.reduce((a,b)=> a+b,0)
    if(totalMagic < totaDist){
        return -1
    }
    return forwardMove(0)
}



console.log(getMinIndex())
console.log(2!=3)