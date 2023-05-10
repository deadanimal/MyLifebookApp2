
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Chat with Sophy</ion-title>
                <ion-buttons slot="end">
                    <ion-button v-if="!isRecording" @click="startTalk()">
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
        <ion-content :fullscreen="true">

            <!-- <router-link :to="{ path: '/chats/' + chat['uuid'] }" v-for="(chat, chatIndex) in chatStore.chats"
                v-bind:key="chat['uuid']">
                <ion-item lines="none">
                    {{ chatIndex }}. {{ chat['raw_message'] }}
                </ion-item>
            </router-link> -->

            <ion-item lines="none" v-for="(chat, chatIndex) in chatStore.chats" v-bind:key="chat['uuid']">
                {{ chatIndex }}. {{ chat['raw_message'] }}
            </ion-item>

            <ion-item>
                <ion-textarea label="Regular textarea" placeholder="Type something here"></ion-textarea>
            </ion-item>

        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
/* eslint-disable */
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel,
    IonTextarea
} from '@ionic/vue';
import { mic, micOff, pauseCircle, playCircle } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useChatStore } from "../stores/chat";
//import { VoiceRecorder, VoiceRecorderPlugin, RecordingData, GenericResponse, CurrentRecordingStatus } from 'capacitor-voice-recorder';

export default defineComponent({
    name: 'ChatsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonTitle, IonItem, IonLabel,
        IonTextarea
    },

    data() {
        let isTalking: boolean = false;
        let isRecording: boolean = false;
        let timeTalking: number = 0;
        return {
            mic, micOff, pauseCircle, playCircle,
            chats: [],
            isTalking, isRecording, timeTalking
        }
    },

    setup() {
        const chatStore = useChatStore();
        return { chatStore };
    },

    mounted() {
        this.listChats();
        this.chats = this.chatStore.chats;
        //this.chatStore.createTextChat();
    },

    methods: {
        listChats() {
            this.chatStore.listChats();
        },

        startTalk() {
            this.isTalking = true;
            this.isRecording = true;
            // VoiceRecorder.startRecording()
            //     .then((result: GenericResponse) => console.log(result.value))
            //     .catch(error => console.log(error))
        },

        pauseTalk() {
            this.isTalking = false;
            // VoiceRecorder.pauseRecording()
            //     .then((result: GenericResponse) => console.log(result.value))
            //     .catch(error => console.log(error))
        },

        continueTalk() {
            this.isTalking = true;
            // VoiceRecorder.resumeRecording()
            //     .then((result: GenericResponse) => console.log(result.value))
            //     .catch(error => console.log(error))
        },

        endTalk() {
            this.isTalking = false;
            this.isRecording = false;
            // VoiceRecorder.stopRecording()
            //     .then((result: RecordingData) => console.log(result.value))
            //     .catch(error => console.log(error))
        },
    }
});

</script>
  