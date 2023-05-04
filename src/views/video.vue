<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Video</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            {{ videoStore.video }} <br />
            Video Type: {{ videoStore['video']['video_type'] }} <br />
            <a :href="'https://pipeline-apps.sgp1.digitaloceanspaces.com/' + videoStore['video']['raw_url']">Video
                URL</a>

        </ion-content>
    </ion-page>
</template>
  
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useVideoStore } from "../stores/video";
import { useRoute } from 'vue-router'
import { Howl, Howler } from 'howler';


export default defineComponent({
    name: 'VideosView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonBackButton, IonButtons
    },

    data() {
        return {
            video: null,
        }
    },

    setup() {
        const route = useRoute()
        const videoStore = useVideoStore();

        return { route, videoStore };
    },

    mounted() {
        const id: any = this.route.params.videoId;
        this.detailVideo(id);

        // var sound = new Howl({
        //     src: [this.videoStore['video']['raw_url']]
        // });

        // sound.play();
    },

    methods: {
        detailVideo(id: string) {
            this.videoStore.detailVideo(id);
        },
    }
});

</script>
  
  