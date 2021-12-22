import * as axios from "axios";
import React from "react";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "ebbcbb05-1637-4d91-a652-d34246d4f016",
    },

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        if (!userId) {
            userId = 2;
        }
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            });
    },
}

export const auchAPI = {
    getHeader() {
        return instance.get(`auth/me`)
            .then(response => {

                return response.data
            });
    },
}


