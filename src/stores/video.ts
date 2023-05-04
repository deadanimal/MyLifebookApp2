import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useAuthStore } from './auth'
import axios from "axios";

const authStore = useAuthStore();

export const useVideoStore = defineStore({
    id: 'videoStore',
    state: () => ({

        loading: false,
        error: null,

        videos: useStorage('videos', []),
        video: useStorage('video', null),


    }),

    actions: {

        async listVideos() {
            console.log('videoStore: listVideos');
            const url = "https://memoir.my/api/videos";

            this.loading = true;
            try {
                await axios.get(url, {
                    headers: {
                        Authorization: 'Bearer ' + authStore.userToken
                    }
                })
                    .then((response:any) => {
                        this.videos = response['data']['videos'];
                    })
            } catch (error:any) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },

        async detailVideo(id: string) {
            console.log('videoStore: detailVideo - ' + id);
            const url = "https://memoir.my/api/videos/" + id;

            this.loading = true;
            try {
                await axios.get(url, {
                    headers: {
                        Authorization: 'Bearer ' + authStore.userToken
                    }
                })
                    .then((response:any) => {
                        this.video = response['data']['video'];
                    })
            } catch (error:any) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        }, 

        async createTextVideo() {
            console.log('');
        },

        async createAudioVideo() {
            console.log('');
        },


    }
})