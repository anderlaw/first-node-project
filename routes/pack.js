
module.exports.success = function(option){
    return {
        statusCode:200,
        message:option.message,
        data:option.data
    } 
}