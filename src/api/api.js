import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': '4fa68dfe-fae1-4aea-89c7-e2d7ae3cd113'},
});
export const usersAPI = {
    getUsers(usersPageNumber, usersPageCount) {
        return axiosInstance.get(`users?page=${usersPageNumber}&count=${usersPageCount}`)
            .then(response =>  response.data)
    },
};
export const profileAPI = {
    getUserData(userID) {return axiosInstance.get(`profile/` + userID)
            .then(response => response.data )
    },
    getAuthInfo() {return axiosInstance.get(`auth/me`)
            .then(response => response.data);
    },
    getStatus(userId){return axiosInstance.get(`profile/status/` + userId)
    },
    pushStatus(status){return axiosInstance.put(`profile/status`, {status: status})
    },
    pushPhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return axiosInstance.put(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
};
export const loginAPI ={
    login({email, password, rememberMe = false}) {
        return axiosInstance.post( `auth/login`, {email, password, rememberMe})},
    logout() {
        return axiosInstance.delete( `auth/login`)}
};





