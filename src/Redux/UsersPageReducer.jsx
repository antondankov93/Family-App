const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
<<<<<<< HEAD
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

=======
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
>>>>>>> 7ab811ff51d300d96f9c4ba68d21670408d3119d

let initialState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
}


const UsersPageReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
        return {
            ...state,
            //users: [...state.users],
            users: state.users.map( u => {
                if (u.id === action.userId){
                return {...u, followed: true}

                }
                return u;
            })
        }

        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}

                    }
                    return u;
                })
            }

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default: return state;
    }
}

<<<<<<< HEAD
export const followAC = (userId) =>({type: FOLLOW, userId})
export const unfollowAC = (userId) =>({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
=======
export const follow = (userId) =>({type: FOLLOW, userId})
export const unfollow = (userId) =>({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
>>>>>>> 7ab811ff51d300d96f9c4ba68d21670408d3119d


export default UsersPageReducer;