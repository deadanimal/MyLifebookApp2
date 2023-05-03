
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button>
                        Profile
                    </ion-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button @click="logout">
                        <ion-icon :icon="exitOutline" size="large" />
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Profile</ion-title>
                </ion-toolbar>
            </ion-header>

            val: {{ lol }}

            <ion-button @click="increase()">Go Back </ion-button>
            <ion-button @click="reduce()">reduce</ion-button>
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

    data() {
        return {
            exitOutline,
            lol: 0
        }
    },

    setup() {
        
        
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
  