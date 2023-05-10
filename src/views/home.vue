<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Home</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>
                                    cardTitle
                                </ion-card-title>
                                <ion-card-subtitle>cardSubtitle</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                content
                            </ion-card-content>


                        </ion-card>
                    </ion-col>
                    <ion-col>
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>
                                    cardTitle
                                </ion-card-title>
                                <ion-card-subtitle>cardSubtitle</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                content
                            </ion-card-content>


                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent
 } from '@ionic/vue';
import { exitOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useChatStore } from "../stores/chat";
import { VoiceRecorder, VoiceRecorderPlugin, RecordingData, GenericResponse, CurrentRecordingStatus } from 'capacitor-voice-recorder';


export default defineComponent({
    name: 'HomeView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle,
        IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent
    },

    data() {
        return {
            exitOutline,
            chats: [],
        }
    },

    setup() {
        const authStore = useAuthStore();
        const chatStore = useChatStore();
        return {
            authStore, chatStore
        };
    },

    mounted() {
        this.listChats();
        this.chats = this.chatStore.chats;
        this.checkCanRecordAudio();
    },

    methods: {
        listChats() {
            this.chatStore.listChats();
        },

        checkCanRecordAudio() {

            VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => {
                if (result.value == true) {
                    this.authStore.canRecordAudio = true;
                }
            })

        }
    }
});

</script>
  