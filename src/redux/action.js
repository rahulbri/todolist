import * as types from './actionType'


import axios from 'axios';
 
// get data action

const  getUsers=(users)=>({
    type :types.GET_USERS,
    payload:users,
});



// delete user  action
const usersDelete=()=>({
    type :types.DELETE_USERS,

});


// addd data actrion
const usersAdded=()=>({
    type :types.ADD_USERS,

});


// edit data action 
const usersEdit=(user)=>({
    type :types.EDIT_USERS,
    payload:user,
});
const usersUpdate=()=>({
    type :types.UPDATE_USERS,
    
});





//  const REACT_APP_API = "http://localhost:3004/posts"


export const loadUsers =()=>{

    return function (dispatch){
        axios
        .get(`https://todo-v1-backende.herokuapp.com/api/get-all-tasks`).then ((resp)=>{

            console.log("response",resp);
            dispatch(getUsers(resp.data))
        }).catch((error)=>console.log(error)); 
    };

};


// delete users from api 
export const deleteUsers =(id)=>{

    return function (dispatch){
        axios
        .delete(`https://todo-v1-backende.herokuapp.com/api/delete-task/${id}`).then ((resp)=>{

            console.log("response",resp);
            dispatch(usersDelete())
            dispatch(loadUsers())
        }).catch((error)=>console.log(error)); 
    };

};

// add Users post data api 

export const addUsers =(user)=>{

    return function (dispatch){
        axios
        .post(`https://todo-v1-backende.herokuapp.com/api/add-new-task`,user).then ((resp)=>{

            console.log("response",resp);
            dispatch(usersAdded())
            // dispatch(loadUsers())
        }).catch((error)=>console.log(error)); 
    };

};

// edit data  from api use get api   

export const editUsers =(id)=>{

    return function (dispatch){
        axios
        .get(`http://localhost:3004/posts/${id}`).then ((resp)=>{

            console.log("response",resp);
            dispatch(usersEdit(resp.data))
        
        }).catch((error)=>console.log(error)); 
    };

};



// update data from api 
export const UpdateUsers =(user,id)=>{

    return function (dispatch){
        axios
        .put(`http://localhost:3004/posts/${id}`,user).then ((resp)=>{

            console.log("response",resp);
            dispatch(usersUpdate())
        
        }).catch((error)=>console.log(error)); 
    };

};
