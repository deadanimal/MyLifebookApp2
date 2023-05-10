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
                                    {{ recordStore.noOfRecords }}
                                </ion-card-title>
                                <ion-card-subtitle>No. of records</ion-card-subtitle>
                            </ion-card-header>


                        </ion-card>
                    </ion-col>
                    <ion-col>
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>
                                    {{ chatStore.noOfChats }}
                                </ion-card-title>
                                <ion-card-subtitle>No. of conversations</ion-card-subtitle>
                            </ion-card-header>


                        </ion-card>
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col>
                        <ion-card>
                            <ion-card-header>
                                <ion-card-subtitle>Sophy</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                {{ responseSophyChat }}

                                <br/>
                                {{ responseSophyTime }}
                            </ion-card-content>
                        </ion-card>
                        <ion-card>
                            <ion-card-header>
                                <ion-card-subtitle>
                                    Chat with Sophy
                                </ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-textarea label="Regular textarea" v-model="requestSophy"></ion-textarea>
                                <ion-button @click="chatSophy()">
                                    <ion-icon :icon="chatbubble" size="large" />
                                    Chat with Sophy
                                </ion-button>
                            </ion-card-content>



                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonTextarea, IonButton, IonIcon
} from '@ionic/vue';
import { chatbubble } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useChatStore } from "../stores/chat";
import { useRecordStore } from "../stores/record";

//import { VoiceRecorder, VoiceRecorderPlugin, RecordingData, GenericResponse, CurrentRecordingStatus } from 'capacitor-voice-recorder';


export default defineComponent({
    name: 'HomeView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle,
        IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
        IonTextarea, IonButton, IonIcon
    },

    data() {
        let requestSophy = 'Hello Sophy, how are you?';
        let responseSophyChat = 'Hello!'
        let responseSophyTime = Math.floor(Date.now() / 1000)

        return {
            chatbubble,
            chats: [],
            requestSophy, responseSophyChat, responseSophyTime
        }
    },

    setup() {
        const authStore = useAuthStore();
        const chatStore = useChatStore();
        const recordStore = useRecordStore();
        return {
            authStore, chatStore, recordStore
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
            this.authStore.canRecordAudio = false;

            // VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => {
            //     if (result.value == true) {
            //         this.authStore.canRecordAudio = true;
            //     }
            // })

        },

        chatSophy() {
            console.log('chat: ', this.requestSophy);
        }
    }
});

</script>
  