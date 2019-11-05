const initialState={
    datas:[]
}
const reduser = (state=initialState,action) =>{
    switch (action.type) {
        case 'GET_DATA':
            return {
             
                datas:action.payload
            }
       
        default:
            return state;
    }
}
export default reduser;