import {loginAPI} from "../api/api";
import {stopSubmit} from 'redux-form'
import {getAuthUserData} from "./Auth-Reducer";


const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';


let initialState = {
    initialized: false,


}

const InsideContentReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true,
            }


        default:
            return state;
    }
}


export const initialized_success = () => ({type: INITIALIZE_SUCCESS})

export const initializeApp = () => (dispatch) => {

       let promise = dispatch(getAuthUserData());
       Promise.all([promise]).then(() => {
           dispatch(initialized_success())
       })

}

export default InsideContentReducer;