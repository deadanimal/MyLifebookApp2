<template>
    <ion-app>
        <ion-page>
            <ActionButton></ActionButton>
            <Menu></Menu>
        </ion-page>
    </ion-app>
</template>
  
<script lang="ts" setup name="defaultLayout">
import { IonPage, IonApp } from '@ionic/vue';
import ActionButton from '@/components/ActionButton.vue';
import Menu from '@/components/Menu.vue';
</script>
  