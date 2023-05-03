import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({

        loading: false,
        error: null,

        userId: useStorage('userId', ''),
        profileId: useStorage('profileId', ''),
        authenticated: useStorage('authenticated', false),
        token: useStorage('token', '')
    }),

    actions: {

        async login(email, password) {
            this.loading = true;
            try {
                await fetch("http://127.0.0.1:8001:/api/login", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: email, password: password, device_name: '123' })
                })
                    .then((response) => {
                        var responseJson = response.json();
                        this.authenticated = true;
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

        async logout() {
            this.loading = true
            try {
                await fetch("http://127.0.0.1:8001:/api/logout", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authentication': 'Bearer ' + this.token
                    },
                })
                    .then((response) => {
                        var responseJson = response.json()
                        this.authenticated = false;
                        this.userId = '';
                        this.profileId = ''
                        this.token = '';
                    })
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
                localStorage.clear();

            }
        },
    }
})