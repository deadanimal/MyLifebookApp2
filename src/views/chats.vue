
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Chat with Sophy</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="startTalk()">
                        <ion-icon :icon="mic" aria-hidden="true" size="large"></ion-icon>
                    </ion-button>
                    <ion-button @click="endTalk()">
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

            <ion-item 
                lines="none" 
                v-for="(chat, chatIndex) in chatStore.chats"
                v-bind:key="chat['uuid']">
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
import { mic, micOff } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useChatStore } from "../stores/chat";
import { VoiceRecorder, VoiceRecorderPlugin, RecordingData, GenericResponse, CurrentRecordingStatus } from 'capacitor-voice-recorder';

export default defineComponent({
    name: 'ChatsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonTitle, IonItem, IonLabel,
        IonTextarea
    },

    data() {
        let isTalking: boolean = false;
        return {
            mic, micOff,
            chats: [],
            isTalking
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
        },

        endTalk() {
            this.isTalking = false;
        },        
    }
});

</script>
  