import Axios from "axios";

export const REGISTER_USER = 'REGISTER_USER';
export const USER_REGISTERED = 'USER_REGISTERED';
export const LOGIN_USER = 'LOGIN_USER';
export const USER_LOGIN = 'USER_LOGIN';
export const GET_USERS = 'GET_USERS';
export const USER_PULL = 'USER_PULL';
export const LOG_OUT = 'LOG_OUT';

export const registerUser = (newUser) => dispatch => {
    dispatch({ type: REGISTER_USER });
    Axios
        .post(
            'http://localhost:5220/api/register/', newUser
        )
        .then(res => dispatch({ type: USER_REGISTERED, payload: res.data }))
        .catch(err => console.log('registration error'))
}

export const loginUser = (user) => dispatch => {
    dispatch({ type: LOGIN_USER });
    Axios
        .post(
            'http://localhost:5220/api/login/', user
        )
        .then(res => {localStorage.setItem('jwt', res.data.token)
            dispatch({ type: USER_LOGIN, payload: res.data })}
            )
        .catch(err => console.log('login error'))
}

export const getUsers = (jwt) => dispatch => {
    dispatch({ type: GET_USERS });
    Axios
        .get(
            'http://localhost:5220/api/users/', {
                headers: {
                    authorization: jwt
                }
            }
        )
        .then(res => dispatch({ type: USER_PULL, payload: res.data.users }))
        .catch(err => console.log('get users error'))
}

export const logOutAction = () => dispatch => {
    dispatch({ type: LOG_OUT });
}
// export const savingFriends = (friend) => dispatch => {
//     dispatch({ type: SAVING_FRIENDS });
//     Axios
//         .post(`http://localhost:5000/api/friends/`, friend)
//         .then(res => {
//             dispatch({ type: FRIENDS_SAVED, payload: res.data });
//         })
//         .catch(err => console.log(err));
// }

// export const deletingFriend = (id) => dispatch => {
//     dispatch({ type: DELETING_FRIEND });
//     Axios
//         .delete(`http://localhost:5000/api/friends/${id}`)
//         .then(res => {
//             dispatch({ type: FRIEND_DELETED, payload: res.data }, {params: {id: id}});
//         })
//         .catch(err => console.log(err));
// }

// export const updatingFriend = (newName, newAge, newEmail, newInfo, id) => dispatch => {
//     dispatch({ type: UPDATING_FRIEND });
//     Axios
//         .put(`http://localhost:5000/api/friends/${id}`, {
//             id: id,
//             name: newName,
//             email: newEmail,
//             age: newAge,
//             additional: newInfo
//         })
//         .then(res => {
//             dispatch({ type: FRIEND_UPDATED, payload: res.data })
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }