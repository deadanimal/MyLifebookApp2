import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { useAuthStore } from "./auth";
import axios from "axios";

const authStore = useAuthStore();

export const useChatStore = defineStore({
  id: "chatStore",
  state: () => ({
    loading: false,
    error: null,

    chats: useStorage("chats", []),
    chat: useStorage("chat", null),

    noOfChats: useStorage("noOfChats", 0),
  }),

  actions: {
    async listChats() {
      console.log("chatStore: listChats");
      const url = "https://memoir.my/api/chats";

      this.loading = true;
      try {
        await axios.get(url, {
          headers: {
            Authorization: "Bearer " + authStore.userToken,
          },
        })
          .then((response: any) => {
            console.log('Response: ', response);
            this.chats = response["data"]["chats"];
          });
      } catch (error: any) {
        console.log('Error: ', error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async detailChat(id: string) {
      console.log("chatStore: detailChat - " + id);
      const url = "https://memoir.my/api/chats/" + id;

      this.loading = true;
      try {
        await axios.get(url, {
          headers: {
            Authorization: "Bearer " + authStore.userToken,
          },
        })
          .then((response: any) => {
            console.log('Response: ', response);
            this.chat = response["data"]["chat"];
          });
      } catch (error: any) {
        console.log('Error: ', error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async createTextChat() {
      const url = "https://memoir.my/api/chats";

      this.loading = true;
      try {
        await axios.post(url, {
            chat_type: 0,
            raw_message: 'My Name is Afeez'
        } ,{
          headers: {
            Authorization: "Bearer " + authStore.userToken,
          },
        })
          .then((response: any) => {
            console.log('Response: ', response);
          });
      } catch (error: any) {
        console.log('Error: ', error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async createAudioChat() {
      console.log("");
    },


  },
});
