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
        chat: useStorage('chat', null),


    }),

    actions: {

        async listChats() {
            console.log('chatStore: listChats');
            const url = "https://memoir.my/api/chats";

            this.loading = true;
            try {
                await axios.get(url, {
                    headers: {
                        Authorization: 'Bearer ' + authStore.userToken
                    }
                })
                    .then((response:any) => {
                        this.chats = response['data']['chats'];
                    })
            } catch (error:any) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },

        async detailChat(id: string) {
            console.log('chatStore: detailChat - ' + id);
            const url = "https://memoir.my/api/chats/" + id;

            this.loading = true;
            try {
                await axios.get(url, {
                    headers: {
                        Authorization: 'Bearer ' + authStore.userToken
                    }
                })
                    .then((response:any) => {
                        this.chat = response['data']['chat'];
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