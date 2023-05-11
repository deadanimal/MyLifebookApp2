
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Chat with Sophy</ion-title>
                <ion-buttons slot="end">
                    <ion-button v-if="!isRecording && authStore.canRecordAudio" @click="startTalk()">
                        <ion-icon :icon="mic" aria-hidden="true" size="large"></ion-icon>
                    </ion-button>
                    <ion-button v-if="isTalking && isRecording" @click="pauseTalk()">
                        <ion-icon :icon="pauseCircle" aria-hidden="true" size="large"></ion-icon>
                    </ion-button>
                    <ion-button v-if="!isTalking && isRecording" @click="continueTalk()">
                        <ion-icon :icon="playCircle" aria-hidden="true" size="large"></ion-icon>
                    </ion-button>
                    <ion-button v-if="isRecording" @click="endTalk()">
                        <ion-icon :icon="micOff" aria-hidden="true" size="large"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" ref="content">

            <!-- <router-link :to="{ path: '/chats/' + chat['uuid'] }" v-for="(chat, chatIndex) in chatStore.chats"
                v-bind:key="chat['uuid']">
                <ion-item lines="none">
                    {{ chatIndex }}. {{ chat['raw_message'] }}
                </ion-item>
            </router-link> -->
           
            <ion-card v-for="(chat) in chatStore.chats" v-bind:key="chat['uuid']">
                <ion-card-header>
                    <ion-card-subtitle>
                        Timestamp...
                    </ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    what you said... 
                    <br/><br/><br/>
                    what sophy said...
                </ion-card-content>
            </ion-card>

        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
/* eslint-disable */
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem,
    IonTextarea, IonIcon
} from '@ionic/vue';
import { mic, micOff, pauseCircle, playCircle } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useChatStore } from "../stores/chat";
import { VoiceRecorder, VoiceRecorderPlugin, RecordingData, GenericResponse, CurrentRecordingStatus } from 'capacitor-voice-recorder';

export default defineComponent({
    name: 'ChatsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonTitle, IonItem,
        IonTextarea, IonIcon
    },

    data() {
        let isTalking = false;
        let isRecording = false;
        let timeTalking = 0;
        return {
            mic, micOff, pauseCircle, playCircle,
            chats: [],
            isTalking, isRecording, timeTalking
        }
    },

    setup() {
        const authStore = useAuthStore();
        const chatStore = useChatStore();
        return { authStore, chatStore };
    },

    mounted() {
        this.chats = this.chatStore.chats;
        //this.$refs.content.$el.scrollToBottom(500);
    },

    methods: {

        startTalk() {
            this.isTalking = true;
            this.isRecording = true;
            VoiceRecorder.startRecording()
                .then((result: GenericResponse) => console.log(result.value))
                .catch(error => console.log(error))
        },

        pauseTalk() {
            this.isTalking = false;
            VoiceRecorder.pauseRecording()
                .then((result: GenericResponse) => console.log(result.value))
                .catch(error => console.log(error))
        },

        continueTalk() {
            this.isTalking = true;
            VoiceRecorder.resumeRecording()
                .then((result: GenericResponse) => console.log(result.value))
                .catch(error => console.log(error))
        },

        endTalk() {
            this.isTalking = false;
            this.isRecording = false;
            VoiceRecorder.stopRecording()
                .then((result: RecordingData) => console.log(result.value))
                .catch(error => console.log(error))
        },
    }
});

</script>
  