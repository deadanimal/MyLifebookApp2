<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Media</ion-title>
                <ion-buttons slot="end">
                    <!-- <ion-button>
                        <ion-icon :icon="cloudUpload" aria-hidden="true" size="large"></ion-icon>
                    </ion-button> -->
                    <ion-button @click="openCamera()">
                        <ion-icon :icon="videocam" aria-hidden="true" size="large"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <router-link :to="{ path: '/videos/' + video['uuid'] }" v-for="(video, videoIndex) in videoStore.videos"
                v-bind:key="video['uuid']">
                <ion-item href="#">
                    {{ videoIndex }}. {{ video['raw_message'] }} {{ video }}
                </ion-item>
            </router-link>

        </ion-content>
    </ion-page>
</template>
  
  
<script lang="ts">
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem,
    IonButtons, IonButton, IonIcon
} from '@ionic/vue';
import { Camera, CameraResultType } from '@capacitor/camera';

import { videocam, cloudUpload } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useVideoStore } from "../stores/video";

export default defineComponent({
    name: 'VideosView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonItem,
        IonButtons, IonButton, IonIcon
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

        async openCamera() {
            console.log('openCamera')
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            });

            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            var imageUrl = image.webPath;

            console.log(imageUrl)
        }
    }
});

</script>
  
  