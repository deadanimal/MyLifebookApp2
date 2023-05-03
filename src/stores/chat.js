import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useAuthStore } from './auth'

const authStore = useAuthStore();

export const useChatStore = defineStore({
    id: 'chat',
    state: () => ({

        loading: false,
        error: null,

        chats: useStorage('chats', []),
        chat: useStorage('chat', {}),

        
    }),

    actions: {

        async listChats() {
            this.loading = true;
            try {
                await fetch(process.env.API_URL + "login", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authentication': 'Bearer ' + this.authStore.token
                    },
                    body: JSON.stringify({ email: email, password: password, device_name: '123' })
                })
                    .then((response) => {
                        var responseJson = response.json();
                        this.Chatenticated = true;
                        this.userId = responseJson['userId'];
                        this.profileId = responseJson['profileId'];
                        this.token = responseJson['token'];
                    })
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },

        async detailChat(id) {
            this.loading = true;
            try {
                await fetch("/login", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authentication': 'Bearer ' + this.authStore.token
                    },
                    body: JSON.stringify({ email: email, password: password, device_name: '123' })
                })
                    .then((response) => {
                        var responseJson = response.json();
                        this.Chatenticated = true;
                        this.userId = responseJson['userId'];
                        this.profileId = responseJson['profileId'];
                        this.token = responseJson['token'];
                    })
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },   
        
        async createChat() {},

        async updateChat() {}

    }
})