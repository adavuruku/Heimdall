

//Quesion One reusable Function
exports.questionOneLogic = async (data,rules=[])=>{
    let missingItems = []
    for(element of rules){
        if(!data.hasOwnProperty(element)){
            missingItems.push(element)
        }
    }
    return missingItems
}



//Quesion Two reusable Function
exports.questionTwoLogic = async (data,item)=>{
    if(data.hasOwnProperty(item)){
        delete data[item]
        return data
    }else{
        return 'attribute not found'
    }
}


//Quesion Three reusable Function
exports.questionThreeLogic = async (n,magic,dist)=>{
    let totalMagic = magic.reduce((a,b)=> a+b,0)
    let totaDist = dist.reduce((a,b)=> a+b,0)
    if(totalMagic < totaDist || magic.length != n || dist.length != n){
        return -1
    }
    return forwardMove(0,magic,dist)
}

let backWardMove = (start,total_val,magic,dist)=>{
    for(let i=0; i < start; i++){
        total_val += (magic[i] - dist[i])
        if(total_val < 0){
            forwardMove(start + 1)
        }
        // console.log(start, 'backwrd', total_val)
    }
    return start
}

let forwardMove = (start,magic,dist)=>{
    let total_val = 0
    for(let i=start; i < magic.length; i++){
        if(total_val < 0){
            start = i
            total_val = 0
        }
        total_val += (magic[i] - dist[i])
        // console.log(start, 'forward', total_val)
    }
    if(start > 0){
        return backWardMove(start,total_val,magic,dist)
    }else{
        return start
    }
}