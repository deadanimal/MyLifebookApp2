<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Media</ion-title>
                <ion-buttons slot="end">
                    <ion-button>
                        <ion-icon :icon="cloudUpload" aria-hidden="true"></ion-icon>
                    </ion-button>
                    <ion-button>
                        <ion-icon :icon="videocam" aria-hidden="true"></ion-icon>
                    </ion-button>                    
                </ion-buttons>                    
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <router-link :to="{path: '/videos/' + video['uuid']}" v-for="(video, videoIndex) in videoStore.videos" v-bind:key="video['uuid']">
                <ion-item href="#">
                    {{ videoIndex }}. {{ video['raw_message'] }} {{ video }}
                </ion-item>
            </router-link>            

        </ion-content>
    </ion-page>
</template>
  
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem,
    IonButtons, IonButton
 } from '@ionic/vue';
import { videocam, cloudUpload } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useVideoStore } from "../stores/video";

export default defineComponent({
    name: 'VideosView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonItem,
        IonButtons, IonButton
    },

    data() {
        return {
            videocam, cloudUpload,
            videos: [],
        }
    },

    setup() {
        const videoStore = useVideoStore();
        return { videoStore };
    },

    mounted() {
        this.listVideos();
        this.videos = this.videoStore.videos;
    },

    methods: {
        listVideos() {
            this.videoStore.listVideos();
        },
    }
});

</script>
  
  