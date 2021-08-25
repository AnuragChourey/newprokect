import {GET_ERROR, GET_PHOTOS, GET_USERS} from '../../types'

const initialState = {
    users:[],
    loading:true
}


console.log('initialstate',initialState)
const userReducer=(state = initialState, action)=>{
    console.log('state',action.type)

    switch(action.type){
       
        case GET_USERS:
            console.log('sssssssstate',action.payload)
        return {
            ...state,
            users:action.payload,
            loading:false

        }

        case GET_PHOTOS:
            console.log('ddddd>>>',action.payload)
            return{
                ...state,
                users:action.payload
            }
        default: return state
    }

}

export default userReducer;


