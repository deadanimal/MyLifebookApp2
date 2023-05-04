<template>
    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button color="secondary">
            <ion-icon :icon="briefcase"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
            <ion-fab-button color="dark">
                <ion-icon :icon="home"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="dark">
                <ion-icon :icon="camera" @click="takePicture()"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="dark">
                <ion-icon :icon="mic"></ion-icon>
            </ion-fab-button>
        </ion-fab-list>
    </ion-fab>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonIcon, IonFab, IonFabButton, IonFabList } from '@ionic/vue';
import { ellipse, camera, mic, home, documents, chatbubbles, person, briefcase, search, image } from 'ionicons/icons';
import { OverlayEventDetail } from '@ionic/core/components';
import { Camera, CameraResultType } from '@capacitor/camera';



export default defineComponent({
    name: 'ActionButton',
    components: { IonIcon, IonFab, IonFabList, IonFabButton },
    setup() {
        return {
            ellipse,
            camera,
            mic,
            home, documents, chatbubbles, person, briefcase, search, image

        }
    },
    data() {
        var isModalVisible = true;
        return {
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

        recordAudio() {
            // VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value))


            // VoiceRecorder.startRecording()
            //     .then((result: GenericResponse) => console.log(result.value))
            //     .catch(error => console.log(error))

            // var recordingDataBase64: any;
            // var recordingDataMimeType;

            // setTimeout(() => {
            //     VoiceRecorder.stopRecording()
            //         .then((result: RecordingData) => {
            //             console.log(result.value)
            //             recordingDataBase64 = result.value['recordDataBase64']
            //             recordingDataMimeType = result.value['mimeType']

            //             setTimeout(() => {
            //                 const base64Sound = recordingDataBase64 // from plugin
            //                 const mimeType = "audio/webm;codecs=opus"  // from plugin        
            //                 const audioRef = new Audio(`data:${mimeType};base64,${base64Sound}`)
            //                 audioRef.oncanplaythrough = () => audioRef.play()
            //                 audioRef.load()
            //             }, 1000)

            //         })
            //         .catch(error => console.log(error))


            // }, 5000)            
        },

        async takePicture() {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            });
            var imageUrl = image.webPath;
            console.log(imageUrl);
        }
    }
});
</script>
  