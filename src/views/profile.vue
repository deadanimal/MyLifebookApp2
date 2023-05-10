
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Profile</ion-title>
                <ion-buttons slot="start">
                    <ion-button @click="logout()">
                        <ion-icon :icon="logOut" size="large" />
                    </ion-button>
                </ion-buttons>                
                <ion-buttons slot="end">
                    <ion-button @click="askHelp()">
                        <ion-icon :icon="help" size="large" />
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
                                    <ion-avatar>
                                        <img alt="Silhouette of a person's head"
                                            src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                    </ion-avatar>
                                    {{ authStore.name }}
                                </ion-card-title>
                                <ion-card-subtitle>{{ authStore.email }}</ion-card-subtitle>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-item>
                                    <ion-input label="Old Password" placeholder="Old Password" type="password" value="oldPassword"></ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-input label="New Password" placeholder="New Password" type="password" value="newPassword"></ion-input>
                                </ion-item>
                                <ion-button @click="changePassword()">Change Password</ion-button>
                            </ion-card-content>

                            <ion-card-content>
                                <ion-button color="secondary" @click="uploadPicture()">Upload Picture</ion-button>
                                <ion-button color="secondary" @click="goToBilling()">Invoice</ion-button>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>            


        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
/* eslint-disable */
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
    IonIcon, IonButtons
} from '@ionic/vue';
import { logOut, help } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRouter } from 'vue-router';
import { Browser } from '@capacitor/browser';


export default defineComponent({
    name: 'ProfileView',

    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonButton,
        IonIcon, IonButtons
    },

    data() {
        return {
            logOut, help
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
        },

        changePassword() {
            console.log('changePassword');
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
  