<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Record</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <router-link :to="{path: '/records/' + record['uuid']}" v-for="(record, recordIndex) in recordStore.records" v-bind:key="record['uuid']">
                <ion-item href="#">
                    {{ recordIndex }}. {{ record['raw_message'] }} {{ record }}
                </ion-item>
            </router-link>            

        </ion-content>
    </ion-page>
</template>
  
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem } from '@ionic/vue';
import { exitOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRecordStore } from "../stores/record";

export default defineComponent({
    name: 'RecordsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonItem
    },

    data() {
        return {
            exitOutline,
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
  
  