function error(option){
    return Object.assign({
        success:false,
        message:'请求失败！'
    },option)
}
function success(option){
    return Object.assign({
        success:false,
        message:'请求成功！'
    },option)
}

module.exports = {
    success,
    error
}