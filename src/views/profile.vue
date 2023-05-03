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
                    <ion-button href="/login">
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { exitOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { usePostStore } from "../stores/post";


export default defineComponent({
    name: 'ProfileView',

    data() {
        return {
            exitOutline,
            lol: 0
        }
    },

    setup() {
        const postTodo = usePostStore();
        return { postTodo };
    },

    mounted() {
        this.lol = this.postTodo.lol;
    },

    methods: {
        increase() {
            this.postTodo.tambah();
            this.lol = this.postTodo.lol;
            console.log("goBack"); // current form values
        },

        reduce() {
            this.postTodo.tolak();
            this.lol = this.postTodo.lol;
        }
    }
});

</script>
  