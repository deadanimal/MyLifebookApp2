<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Record</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="uploadRecord()">
                        <ion-icon :icon="cloudUpload" aria-hidden="true" size="large"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <router-link :to="{ path: '/records/' + record['uuid'] }" v-for="(record, recordIndex) in recordStore.records"
                v-bind:key="record['uuid']">
                <ion-item lines="none">
                    {{ recordIndex }} <br />
                    {{ record }}
                </ion-item>
            </router-link>

            {{ uploadClicked }}

        </ion-content>
    </ion-page>
</template>
  
  
<script lang="ts">
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem,
    IonButton, IonButtons, IonIcon
} from '@ionic/vue';
import { cloudUpload } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRecordStore } from "../stores/record";
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { Capacitor } from '@capacitor/core';


export default defineComponent({
    name: 'RecordsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonItem,
        IonButton, IonButtons, IonIcon
    },

    data() {
        let uploadClicked = '';
        return {
            cloudUpload,
            records: [],
            uploadClicked
        }
    },

    setup() {
        const recordStore = useRecordStore();
        return { recordStore };
    },

    mounted() {
        this.listRecords();
        this.records = this.recordStore.records;
    },

    methods: {
        listRecords() {
            this.recordStore.listRecords();
        },

        async uploadRecord() {
            console.log('uploadRecord');
            let timestamp = String(Math.floor(Date.now() / 1000));
            this.uploadClicked = timestamp;

            FilePicker.pickFiles({
                types: ['image/png'],
                multiple: false,
                readData: true
            }).then((result: any) => {
                const file = result.files[0];
                console.log(file);
                const formData = new FormData();

                if (Capacitor.isNativePlatform()) {
                    // on mobile get file path and convert to blob
                } else {
                    //
                }

            });

        },
    }
});

</script>
  
  