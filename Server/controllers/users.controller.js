import User from "../model/user.model.js"
async function registerUserController(req,res) {
    try{
        
    }
    catch(error){
        return response.status(500).json({
          message:error.message||error,
          error : true,
          success : false})
        
       
    }
}