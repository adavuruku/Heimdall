//Quesion One reusable Function
exports.questionOneLogic = async (data,rules=[])=>{
    var dataObject = JSON.stringify(data);
    dataObject = JSON.parse(dataObject);
    let missingItems = []
    for(element of rules){
        if(!dataObject.hasOwnProperty(element)){
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

//Quesion Two reusable Function
exports.questionThreeLogic = async (magic,dist)=>{
    
}