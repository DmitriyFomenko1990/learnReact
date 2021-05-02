import axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': '4fa68dfe-fae1-4aea-89c7-e2d7ae3cd113'},
});

export const usersAPI = {
    getUsers(usersPageNumber, usersPageCount) {
        return instance.get(`users?page=${usersPageNumber}&count=${usersPageCount}`)
            .then(response =>  response.data)
    },
};

export const profileAPI = {
    getUserData(userID) {return instance.get(`profile/` + userID)
            .then(response => response.data )
    },
    getAuthInfo() {return instance.get(`auth/me`)
            .then(response => response.data);
    },
    getStatus(userId){return instance.get(`profile/status/` + userId)
    },
    pushStatus(status){return instance.put(`profile/status`, {status: status})
    },
};

export const loginAPI ={
    login({email, password, rememberMe = false}) {
        return instance.post( `auth/login`, {email, password, rememberMe})},

    logout() {
        return instance.delete( `auth/login`)}
};





