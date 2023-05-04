<template>
    <ion-tabs>
        <ion-router-outlet>

            <transition name="fade">
                <div v-if="isModalVisible">
                    <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-0"></div>
                    <div class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
                        <div>
                            <div class="text-center p-3 flex-auto justify-center leading-6">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-16 h-16 flex items-center text-purple-500 mx-auto" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                                <h2 class="text-2xl font-bold py-4">Are you sure?</h2>
                                <p class="text-md text-gray-500 px-8">
                                    Do you really want to exit without saving your work?
                                </p>
                            </div>
                            <div class="p-3 mt-2 text-center space-x-4 md:block">
                                <button
                                    class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                                    Save
                                </button>
                                <button @click="onToggle"
                                    class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

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

            <ion-tab-button tab="tab4" href="/asks">
                <ion-icon :icon="search" />
                <ion-label>Search</ion-label>
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
import { ellipse, square, triangle, home, documents, chatbubbles, person, briefcase, search } from 'ionicons/icons';
import { OverlayEventDetail } from '@ionic/core/components';



export default defineComponent({
    name: 'MenuComponent',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet },
    setup() {
        return {
            ellipse,
            square,
            triangle,
            home, documents, chatbubbles, person, briefcase, search

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
  