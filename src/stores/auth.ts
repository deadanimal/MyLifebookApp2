/* eslint-disable */
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import axios from "axios";
import router from "../router/index";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    loading: false,
    error: null,

    userId: useStorage("userId", ""),
    profileId: useStorage("profileId", ""),
    isAuthenticated: useStorage("isAuthenticated", false),
    userToken: useStorage("userToken", ""),

    name: useStorage("name", ""),
    username: useStorage("username", ""),
    email: useStorage("email", ""),

    canRecordAudio: useStorage("canRecordAudio", false),
  }),

  actions: {

    async login(email: string, password: string) {
      console.log("Authentication - Login");
      this.loading = true;
      try {
        await axios.post("https://memoir.my/api/login", {
          email: email,
          password: password,
          device_name: "123",
        }).then((response) => {
          console.log("Response: ", response);

          if (response["data"]["token"]) {
            console.log(response["data"]["token"]);
            this.isAuthenticated = true;
            this.userId = response["data"]["userId"];
            this.profileId = response["data"]["profileId"];
            this.userToken = response["data"]["token"];

            this.name = response["data"]["name"];
            this.username = response["data"]["username"];
            this.email = response["data"]["email"];

            console.log(router);
            router.push("/home");
          } else {
            console.log(response["data"]["error"]);
            this.isAuthenticated = false;
            this.userId = "";
            this.profileId = "";
            this.userToken = "";

            this.name = "";
            this.username = "";
            this.email = "";
          }
        });
      } catch (error: any) {
        console.log("Error: ", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      console.log("Authentication - Logout");
      this.loading = true;      
      try {
        const options = {
          method: "POST",
          url: "https://memoir.my/api/logout",
          headers: {
            Authorization: "Bearer " + this.userToken,
          },
        };

        await axios.request(options).then((response) => {
          console.log("Response: ", response);

          if (response["data"]["status"] == "OK") {
            localStorage.clear();

            this.isAuthenticated = false;
            this.userId = "";
            this.profileId = "";
            this.userToken = "";

            this.name = "";
            this.username = "";
          }
        });
      } catch (error: any) {
        console.log("Error: ", error);
        this.error = error;
      } finally {
        this.loading = false;        
      }
    },

    async changePassword(oldPassword: string, newPassword: string) {
      console.log("Authentication - Change Password");
      this.loading = true;      
      try {
        const options = {
          method: "POST",
          url: "https://memoir.my/api/change-password",
          headers: {
            Authorization: "Bearer " + this.userToken,
          },
          data: {
            oldPassword: oldPassword,
            newPassword: newPassword,
          }
    
        };

        await axios.request(options).then((response) => {
          console.log("Response: ", response);

        });
      } catch (error: any) {
        console.log("Error: ", error);
        this.error = error;
      } finally {
        this.loading = false;        
      }      
    }
  },
});
