
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Chat</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <router-link :to="{ path: '/chats/' + chat['uuid'] }" v-for="(chat, chatIndex) in chatStore.chats"
                v-bind:key="chat['uuid']">
                <ion-item href="#">
                    {{ chatIndex }}. {{ chat['raw_message'] }} {{ chat }}
                </ion-item>
            </router-link>


        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
/* eslint-disable */
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel } from '@ionic/vue';
import { exitOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useChatStore } from "../stores/chat";
import { VoiceRecorder, VoiceRecorderPlugin, RecordingData, GenericResponse, CurrentRecordingStatus } from 'capacitor-voice-recorder';


export default defineComponent({
    name: 'ChatsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonTitle, IonItem, IonLabel
    },

    data() {
        return {
            exitOutline,
            chats: [],
        }
    },

    setup() {
        const chatStore = useChatStore();
        return { chatStore };
    },

    mounted() {
        this.listChats();
        this.chats = this.chatStore.chats;

        VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value))


        VoiceRecorder.startRecording()
            .then((result: GenericResponse) => console.log(result.value))
            .catch(error => console.log(error))

        var recordingDataBase64: any;
        var recordingDataMimeType;

        setTimeout(() => {
            VoiceRecorder.stopRecording()
                .then((result: RecordingData) => {
                    console.log(result.value)
                    recordingDataBase64 = result.value['recordDataBase64']
                    recordingDataMimeType = result.value['mimeType']

                    setTimeout(() => {
                        const base64Sound = recordingDataBase64 // from plugin
                        const mimeType = "audio/webm;codecs=opus"  // from plugin        
                        const audioRef = new Audio(`data:${mimeType};base64,${base64Sound}`)
                        audioRef.oncanplaythrough = () => audioRef.play()
                        audioRef.load()
                    }, 1000)

                })
                .catch(error => console.log(error))


        }, 5000)
    },

    methods: {
        listChats() {
            this.chatStore.listChats();
        },
    }
});

</script>
  