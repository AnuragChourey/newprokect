import { GET_USERS, USERS_ERROR,GET_PHOTOS,GET_ERROR } from '../../types';

import { userapi,imgapi } from '../../api/userapi';
export const getUsers = (id) => async dispatch => {
    try {
        const res = await userapi
        // res.then((dayaaaaaa)=>{
        //     console.log('daataaa',dayaaaaaa)

        // })
        dispatch({
            type: GET_USERS,
            payload: res.data
        })

    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log('errorhandle', e),
        })
    }

}

export const getPhoto=()=> async dispatch=>{
    try{
        const Imgres=await imgapi 
        dispatch({
            type:GET_PHOTOS,
            payload:Imgres.data
        })
    }
    catch(e){
        dispatch({
            type:GET_ERROR,
            payload:console.log("error",e)
        })
    }

}
