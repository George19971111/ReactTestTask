const getDataforbase = (newdata)=>{
    return{
        type:'GET_DATA',
        payload:newdata
    }
}
const deletefBase = ()=>{
    return{
        type:'DELETE_TEN'
    }
}
export {
    getDataforbase,deletefBase
}