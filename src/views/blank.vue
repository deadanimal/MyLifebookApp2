<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Blank</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-button @click="goBack">Go Back</ion-button>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts" name="BlankView">


function goBack() {
    console.log("goBack"); // current form values
}

</script>