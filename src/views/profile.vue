
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Profile</ion-title>
                <!-- <ion-buttons slot="start">
                    <ion-button>
                        Home
                    </ion-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button href="/login">
                        <ion-icon :icon="exitOutline" size="large" />
                    </ion-button>
                </ion-buttons> -->
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            profile picture: show and upload <br/>
            name: {{ authStore.name }} <br/>
            email: {{ authStore.email }} <br/>
            username: {{ authStore.username }} <br/>
            change password <br/>
            show billings <br />
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
/* eslint-disable */
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { exitOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";


export default defineComponent({
    name: 'ProfileView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle
    },

    data() {
        return {
            
        }
    },

    setup() {
        const authStore = useAuthStore();
        return { authStore };    
        
    },

    mounted() {
        
    },

    methods: {


        logout() {
            const auth = useAuthStore();
            auth.logout();
        }
    }
});

</script>
  