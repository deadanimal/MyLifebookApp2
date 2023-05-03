<template>
    <ion-app>
        <ion-page>
            <ion-fab slot="fixed" vertical="bottom" horizontal="end">
                <ion-fab-button size="small">
                    <ion-icon name="add"></ion-icon>
                </ion-fab-button>
                <ion-fab-list side="end">
                    <ion-fab-button>
                        <ion-icon name="document"></ion-icon>
                    </ion-fab-button>
                    <ion-fab-button>
                        <ion-icon name="color-palette"></ion-icon>
                    </ion-fab-button>
                    <ion-fab-button>
                        <ion-icon name="globe"></ion-icon>
                    </ion-fab-button>
                </ion-fab-list>
            </ion-fab>
            <Menu></Menu>
        </ion-page>
    </ion-app>
</template>
  
<script lang="ts" setup name="defaultLayout">
import { IonPage, IonApp } from '@ionic/vue';
import Menu from '@/components/Menu.vue';
</script>
  