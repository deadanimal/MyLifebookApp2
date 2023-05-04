<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Home</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            list of asks <br/>
            list of records <br/>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { exitOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useChatStore } from "../stores/chat";

export default defineComponent({
    name: 'HomeView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle
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
    },

    methods: {
        listChats() {
            this.chatStore.listChats();
        },
    }
});

</script>
  