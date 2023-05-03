<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Record</ion-title>
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

        </ion-content>
    </ion-page>
</template>
  
  
<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { exitOutline } from 'ionicons/icons';
</script>
  