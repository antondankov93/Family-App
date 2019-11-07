import {followingAPI, profileAPI} from "../api/api";
import {followSuccess, toggleFollowingProgress} from "./UsersPageReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UpdateNewPost';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    PostsArray: [
        {text: "Я дома!"},
    ],
    newPostText: "Hey Hey",
    profile: null
}

const HomePageReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                text: state.newPostText,
            }
            return {
                ...state,
                PostsArray: [...state.PostsArray, (newPost)],
                newPostText: '',
            }
        }

        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newPostText,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }

        default:
            return state;
    }
}

export const addNewPost = () =>({type: ADD_POST})
export const onPostChange = (text) =>({type: UPDATE_NEW_POST, newPostText: text})
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile})

export const profileThunk = (userId) => {
    return (
        (dispatch) => {
            profileAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data))
                });
            });
        }

export default HomePageReducer;