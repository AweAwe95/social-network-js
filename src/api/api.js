import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "18cf4179-dc7e-4539-86b2-8fc45bfe0004"
    }
})

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

export const unfollowUser = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data
        })
}
export const followUser = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        })
}

export const getUserProfile = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        })
}

export const getAuthMe = () => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
}