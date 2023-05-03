import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useAuthStore } from './auth'

const authStore = useAuthStore();

export const useAskStore = defineStore({
    id: 'ask',
    state: () => ({

        loading: false,
        error: null,

        asks: useStorage('asks', []),
        ask: useStorage('ask', {}),

        
    }),

    actions: {

        async listAsks() {
            this.loading = true;
            try {
                await fetch("http://127.0.0.1:8001:/api/login", {
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
                        this.askenticated = true;
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

        async detailAsk(id) {
            this.loading = true;
            try {
                await fetch("http://127.0.0.1:8001:/api/login", {
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
                        this.askenticated = true;
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
        
        async createAsk() {},

        async updateAsk() {}

    }
})