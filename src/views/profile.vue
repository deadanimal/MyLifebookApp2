
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

            <ion-button @click="logout()">Log Out</ion-button>

            <ion-button @click="goToBilling()">Billing</ion-button>

        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
/* eslint-disable */
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { exitOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRouter } from 'vue-router';
import { Browser } from '@capacitor/browser';


export default defineComponent({
    name: 'ProfileView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonButton
    },

    data() {
        return {
            
        }
    },

    setup() {
        const authStore = useAuthStore();
        const router = useRouter();
        return { authStore, router };    
        
    },

    mounted() {
        
    },

    methods: {


        logout() {
            this.router.push("/login");
            this.authStore.logout();            
        },

        goToBilling() {
            const userToken = this.authStore.userToken;
            const url = 'https://memoir.my/billing-from-mobile?token=' + userToken; 
            Browser.open({ url: url });
        }
    }
});

</script>
  