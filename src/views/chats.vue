
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
                <ion-item lines="none">
                    {{ chatIndex }}. {{ chat['raw_message'] }} 
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
        IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonTitle, IonItem, IonLabel,
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
        //this.chatStore.createTextChat();
    },

    methods: {
        listChats() {
            this.chatStore.listChats();
        },
    }
});

</script>
  