import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useAuthStore } from './auth'
import axios from "axios";

const authStore = useAuthStore();

export const useRecordStore = defineStore({
    id: 'recordStore',
    state: () => ({

        loading: false,
        error: null,

        records: useStorage('records', []),
        record: useStorage('record', null),


    }),

    actions: {

        async listRecords() {
            console.log('recordStore: listRecords');
            const url = "https://memoir.my/api/records";

            this.loading = true;
            try {
                await axios.get(url, {
                    headers: {
                        Authorization: 'Bearer ' + authStore.userToken
                    }
                })
                    .then((response:any) => {
                        this.records = response['data']['records'];
                    })
            } catch (error:any) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },

        async detailRecord(id: string) {
            console.log('recordStore: detailRecord - ' + id);
            const url = "https://memoir.my/api/records/" + id;

            this.loading = true;
            try {
                await axios.get(url, {
                    headers: {
                        Authorization: 'Bearer ' + authStore.userToken
                    }
                })
                    .then((response:any) => {
                        this.record = response['data']['record'];
                    })
            } catch (error:any) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        }, 

        async createTextRecord() {
            console.log('');
        },

        async createAudioRecord() {
            console.log('');
        },


    }
})