<template>
    <ion-tabs>
        <ion-router-outlet>

    

        </ion-router-outlet>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="tab1" href="/home">
                <ion-icon :icon="home" />
                <ion-label>Home</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab2" href="/records">
                <ion-icon :icon="documents" />
                <ion-label>Record</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab3" href="/chats">
                <ion-icon :icon="chatbubbles" />
                <ion-label>Chat</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab4" href="/videos">
                <ion-icon :icon="image" />
                <ion-label>Video</ion-label>
            </ion-tab-button>            

            <ion-tab-button tab="tab5" href="/profile">
                <ion-icon :icon="person" />
                <ion-label>Profile</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>

</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, home, documents, chatbubbles, person, briefcase, search, image } from 'ionicons/icons';
import { OverlayEventDetail } from '@ionic/core/components';



export default defineComponent({
    name: 'MenuComponent',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet },
    setup() {
        return {
            ellipse,
            square,
            triangle,
            home, documents, chatbubbles, person, briefcase, search, image

        }
    },
    data() {
        var isModalVisible = true;
        return {
            message: 'This modal example uses triggers to automatically open a modal when the button is clicked.',
            isModalVisible
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
        },

        onToggle() {
            this.isModalVisible = ! this.isModalVisible;
        }
    }
});
</script>
  