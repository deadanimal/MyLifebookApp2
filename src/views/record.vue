<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Record</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            {{ recordStore.record }} <br />
            Record Type: {{ recordStore['record']['record_type'] }} <br />
            <a :href="'https://pipeline-apps.sgp1.digitaloceanspaces.com/' + recordStore['record']['raw_url']">Record
                URL</a>

        </ion-content>
    </ion-page>
</template>
  
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRecordStore } from "../stores/record";
import { useRoute } from 'vue-router'



export default defineComponent({
    name: 'RecordsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonBackButton, IonButtons
    },

    data() {
        return {
            record: null,
        }
    },

    setup() {
        const route = useRoute()
        const recordStore = useRecordStore();

        return { route, recordStore };
    },

    mounted() {
        const id: any = this.route.params.recordId;
        this.detailRecord(id);

        // var sound = new Howl({
        //     src: [this.recordStore['record']['raw_url']]
        // });

        // sound.play();
    },

    methods: {
        detailRecord(id: string) {
            this.recordStore.detailRecord(id);
        },
    }
});

</script>
  
  