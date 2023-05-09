<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Record</ion-title>
                <ion-buttons slot="end">
                    <ion-button>
                        <ion-icon :icon="cloudUpload" aria-hidden="true"></ion-icon>

                    </ion-button>
                </ion-buttons>                
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <router-link :to="{path: '/records/' + record['uuid']}" v-for="(record, recordIndex) in recordStore.records" v-bind:key="record['uuid']">
                <ion-item lines="none">
                    {{ recordIndex }} <br/> 
                    {{ record }}
                </ion-item>
            </router-link>            

        </ion-content>
    </ion-page>
</template>
  
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem,
    IonButton, IonButtons, IonIcon
 } from '@ionic/vue';
import { cloudUpload } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRecordStore } from "../stores/record";

export default defineComponent({
    name: 'RecordsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonItem,
        IonButton, IonButtons, IonIcon
    },

    data() {
        return {
            cloudUpload,
            records: [],
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
    }
});

</script>
  
  