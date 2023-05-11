
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Profile</ion-title>
     
                <ion-buttons slot="end">
                    <ion-button @click="logout()">
                        <ion-icon :icon="logOut" size="large" />
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>
                                    <!-- <ion-avatar>
                                        <img alt="Silhouette of a person's head"
                                            src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                    </ion-avatar> -->
                                    {{ authStore.name }}
                                </ion-card-title>
                                <ion-card-subtitle>{{ authStore.email }}</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <form @submit.prevent="onSubmitChangePassword">
                                    <ion-item>
                                        <ion-label>Current Password</ion-label>
                                        <ion-input label="Current Password" type="password"
                                            v-model="oldPassword"></ion-input>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label>New Password</ion-label>
                                        <ion-input label="New Password" type="password"
                                            v-model="newPassword"></ion-input>
                                    </ion-item>
                                    <ion-button type="submit">Change Password</ion-button>
                                </form>
                            </ion-card-content>

                            <!-- <ion-card-content>
                                <ion-button color="secondary" @click="uploadPicture()">Upload Picture</ion-button>
                                <ion-button color="secondary" @click="goToBilling()">Invoice</ion-button>
                            </ion-card-content> -->
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>


        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">

import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
    IonIcon, IonButtons,
    IonGrid, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle,
    IonItem, IonCardContent, IonInput
} from '@ionic/vue';
import { logOut, help, card } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRouter } from 'vue-router';
import { Browser } from '@capacitor/browser';


export default defineComponent({
    name: 'ProfileView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonButton,
        IonIcon, IonButtons,
        IonGrid, IonRow, IonCol, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle,
        IonItem, IonCardContent, IonInput
    },

    data() {
        let oldPassword, newPassword;
        return {
            logOut, help, card,
            oldPassword, newPassword
        }
    },

    setup() {
        const authStore = useAuthStore();
        const router = useRouter();
        return { authStore, router };

    },

    mounted() {
        console.log('profile mounted');
    },

    methods: {


        logout() {
            this.router.push("/login");
            this.authStore.logout();
        },

        goToBilling() {
            console.log('goToBilling');
            const userToken = this.authStore.userToken;
            const url = 'https://memoir.my/billing-from-mobile?token=' + userToken;
            Browser.open({ url: url });
        },

        onSubmitChangePassword() {
            console.log('changePassword');
            console.log('oldPassword: ', this.oldPassword);
            console.log('newPassword: ', this.newPassword);
        },

        uploadPicture() {
            console.log('uploadPicture');
        },

        askHelp() {
            console.log('askHelp');
        }
    }
});

</script>
  