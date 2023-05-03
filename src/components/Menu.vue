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

    <!-- <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button @click="cancel()">Cancel</ion-button>
                </ion-buttons>
                <ion-title>Welcome</ion-title>
                <ion-buttons slot="end">
                    <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-item>
                <ion-label position="stacked">Enter your name</ion-label>
                <ion-input ref="input" type="text" placeholder="Your name"></ion-input>
            </ion-item>
        </ion-content>
    </ion-modal> -->
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, home, documents, chatbubbles, person } from 'ionicons/icons';
import { OverlayEventDetail } from '@ionic/core/components';



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
    data() {
        return {
            message: 'This modal example uses triggers to automatically open a modal when the button is clicked.',
        };
    },
    methods: {
        ask() {
            console.log('ASK');
        },

        cancel() {
            //this.$refs.modal.$el.dismiss(null, 'cancel');
        },
        confirm() {
            //const name = this.$refs.input.$el.value;
            //this.$refs.modal.$el.dismiss(name, 'confirm');
        },
        onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
            if (ev.detail.role === 'confirm') {
                this.message = `Hello, ${ev.detail.data}!`;
            }
        }
    }
});
</script>
  