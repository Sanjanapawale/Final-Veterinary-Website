import { myAxios } from "./helper";

export const signUp = (user) =>{
    return myAxios
    .post('/api/users/', user)
    .then((response)=>response.json())
};