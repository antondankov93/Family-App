import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    PostsArray: [
        {text: "Я дома!"},
    ],
    profile: null,
    status: '',
}

const HomePageReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            return {
                ...state,
                PostsArray: [...state.PostsArray, {text: action.PostFormText}],
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }

        default:
            return state;
    }
}

export const addNewPost = (PostFormText) =>({type: ADD_POST, PostFormText})
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile})
export const setStatus = (status) =>({type: SET_STATUS, status: status})


export const profileThunk = (userId) => {
    return (
        (dispatch) => {
            profileAPI.getProfile(userId).then(data => {

                dispatch(setUserProfile(data))
            });
        });
}

export const getStatusThunk = (userId) => {
    return (
        (dispatch) => {
            profileAPI.getStatus(userId).then(data => {
                dispatch(setStatus(data))
            });
        });
}

export const updateStatusThunk = (status) => {
    return (
        (dispatch) => {
            profileAPI.updateStatus(status).then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(data))
                }
            });
        });
}

export default HomePageReducer;