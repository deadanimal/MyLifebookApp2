import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { useAuthStore } from "./auth";
import axios from "axios";

const authStore = useAuthStore();

export const useRecordStore = defineStore({
  id: "recordStore",
  state: () => ({
    loading: false,
    error: null,

    records: useStorage("records", []),
    record: useStorage("record", null),
    noOfRecords: useStorage("noOfRecords", 0),
  }),

  actions: {
    async listRecords() {
      console.log("recordStore: listRecords");
      const url = "https://memoir.my/api/records";

      this.loading = true;
      try {
        await axios.get(url, {
          headers: {
            Authorization: "Bearer " + authStore.userToken,
          },
        })
          .then((response: any) => {
            console.log("Response: ", response);
            this.records = response["data"]["records"];
          });
      } catch (error: any) {
        console.log("Error: ", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async detailRecord(id: string) {
      console.log("recordStore: detailRecord - " + id);
      const url = "https://memoir.my/api/records/" + id;

      this.loading = true;
      try {
        await axios.get(url, {
          headers: {
            Authorization: "Bearer " + authStore.userToken,
          },
        })
          .then((response: any) => {
            console.log("Response: ", response);
            this.record = response["data"]["record"];
          });
      } catch (error: any) {
        console.log("Error: ", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async createTextRecord() {
      console.log("recordStore: createTextRecord");
      const url = "https://memoir.my/api/records";

      this.loading = true;
      try {
        await axios.get(url, {
          headers: {
            Authorization: "Bearer " + authStore.userToken,
          },
        })
          .then((response: any) => {
            console.log("Response: ", response);
            this.records = response["data"]["records"];
          });
      } catch (error: any) {
        console.log("Error: ", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async createAudioRecord() {
      console.log("");
    },
  },
});
