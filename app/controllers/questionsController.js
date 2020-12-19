

//import the file containing all the reusable functions
const reusableFunctions = require('../logics/functionallogics');

//import the the test file
// const testData = require('../test/testfile');

//Question One Controller
exports.questionOne = async (req,res,next)=>{
    let ans = await reusableFunctions.questionOneLogic(req.body.data, req.body.rules);
    if(ans.length <= 0){
        return res.status(200).json({
            message:'Valid'
        });
    }
    return res.status(200).json({
        message: ans
    });
}

//Question Two Controller
exports.questionTwo = async (req,res,next)=>{
    let ans = await reusableFunctions.questionTwoLogic(req.body.data, req.body.item);
    return res.status(200).json({
        message: ans
    });
}

//Question Three Controller
exports.questionThree = async (req,res,next)=>{
    let ans = await reusableFunctions.questionThreeLogic(req.body.n, req.body.magic, req.body.dist);
    return res.status(200).json({
        message: ans
    });
}