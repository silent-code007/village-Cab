// const asyncHandler = (fn) => (req, res, next) => {
// try {

// }catch(err){
//     res.status(err.code || 500).json({
//         result:false,
//         message:"Internal serval error"
//     })
// }
// }

const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err));
    }
}

export {asyncHandler}