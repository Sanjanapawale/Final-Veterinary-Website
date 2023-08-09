import { myAxios } from "./helper";

export const signUp = (user) =>{
    return myAxios
    .post('/api/users/', user)
    .then((response)=>response.data)
};

export const loginUser = (loginDetail)=>{
    return myAxios.post('/api/users/login', loginDetail).then((response)=>response.data)
}