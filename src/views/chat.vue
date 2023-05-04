<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Chat</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            {{ chatStore.chat }} <br />


        </ion-content>
    </ion-page>
</template>
  
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useChatStore } from "../stores/chat";
import { useRoute } from 'vue-router'



export default defineComponent({
    name: 'ChatsView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonBackButton, IonButtons
    },

    data() {
        return {
            chat: null,
        }
    },

    setup() {
        const route = useRoute()
        const chatStore = useChatStore();

        return { route, chatStore };
    },

    mounted() {
        const id: any = this.route.params.chatId;
        this.detailChat(id);

        // var sound = new Howl({
        //     src: [this.chatStore['chat']['raw_url']]
        // });

        // sound.play();
    },

    methods: {
        detailChat(id: string) {
            this.chatStore.detailChat(id);
        },
    }
});

</script>
  
  