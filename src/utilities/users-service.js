// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from

import * as usersAPI from './users-api';


//Sign Up
export async function signUp(userData){
     // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
 const token = await usersAPI.signUp(userData);
 localStorage.setItem('token', token);
 return token;
}

// Login

export async function login(credentials){
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}


// Get Token

export function getToken(){
    const token = localStorage.getItem('token');
    if(!token) return null;

    const payload = JSON.parse(window.atob(token.split('.')[1]))
    if(payload.exp < Date.now() / 1000 ){
        localStorage.removeItem('token');
        return null;
    }

    return token;
}


// GetUser

export function getUser(){
    const token = getToken();
    return token ? JSON.parse(window.atob(token.split('.')[1])).user : null;
}


// logout

export function logout(){
    localStorage.removeItem('token')
}

// checkToken

export function checkToken(){
    return usersAPI.checkToken()
           .then(dateStr => new Date(dateStr))
}