<template>

    <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="tab1" href="/home">
                <ion-icon :icon="home" />
                <ion-label>Home</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab2" href="/records">
                <ion-icon :icon="documents" />
                <ion-label>Record</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab3" @click="ask()">
                <ion-icon :icon="ellipse" />
                <ion-label>Ask</ion-label>
            </ion-tab-button>            

            <ion-tab-button tab="tab4" href="/chats">
                <ion-icon :icon="chatbubbles" />
                <ion-label>Chat</ion-label>
            </ion-tab-button>            

            <ion-tab-button tab="tab5" href="/profile">
                <ion-icon :icon="person" />
                <ion-label>Profile</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, home, documents, chatbubbles, person  } from 'ionicons/icons';

export default defineComponent({
    name: 'MenuComponent',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet },
    setup() {
        return {
            ellipse,
            square,
            triangle,
            home, documents, chatbubbles, person
   
        }
    },
    methods: {
        ask() {
            console.log('ASK');
        }
    }
});
</script>
  