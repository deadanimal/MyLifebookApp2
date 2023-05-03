import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useAuthStore } from './auth'
import axios from "axios";

const authStore = useAuthStore();

export const useChatStore = defineStore({
    id: 'chatStore',
    state: () => ({

        loading: false,
        error: null,

        chats: useStorage('chats', []),
        chat: useStorage('chat', {}),


    }),

    actions: {

        async listChats() {
            console.log('listChats');
            const url = "https://memoir.my/api/chats";
            console.log(url);

            this.loading = true;
            try {
                await axios.get(url, {
                    headers: {
                        Authorization: 'Bearer ' + authStore.userToken
                    }
                })
                    .then((response:any) => {
                        console.log(response)
                        const responseJson = response.json()
                        console.log(responseJson)
                    })
            } catch (error:any) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },

        async createTextChat() {
            console.log('');
        },

        async createAudioChat() {
            console.log('');
        },


    }
})