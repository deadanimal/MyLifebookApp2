import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import axios from "axios"
import router from '../router/index';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({

        loading: false,
        error: null,

        userId: useStorage('userId', ''),
        profileId: useStorage('profileId', ''),
        isAuthenticated: useStorage('authenticated', false),
        userToken: useStorage('token', '')

        name: useStorage('name', ''),
        username: useStorage('username', ''),
        email: useStorage('email', ''),
    }),

    actions: {

        async login(email, password) {
            
            this.loading = true;
            try {
                await axios.post('https://memoir.my/api/login', {
                    email: email, 
                    password: password, 
                    device_name: '123'
                }).then((response)=> {
                    if (response['data']['token']) {
                        console.log(response['data']['token']);
                        this.isAuthenticated = true;
                        this.userId = response['data']['userId'];
                        this.profileId = response['data']['profileId'];
                        this.userToken = response['data']['token'];

                        this.name = response['data']['name'];
                        this.username = response['data']['username'];
                        this.email = response['data']['email'];

                        console.log(router);
                        router.push('/home');
                    } else {
                        console.log(response['data']['error']);
                        this.isAuthenticated = false;
                        this.userId = '';
                        this.profileId = ''
                        this.userToken = '';    
                        
                        this.name = '';
                        this.username = '';
                        this.email = '';
                    }
                })

            } catch (error) {
                console.log('error: ', error);
                this.error = error;
            } finally {
                this.loading = false;
            }
        },

        async logout() {
            this.loading = true
            try {
                await fetch("https://memoir.my/api/logout", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authentication': 'Bearer ' + this.token
                    },
                })
                    .then((response) => {                                            
                        var responseJson = response.json()
                        console.log(responseJson)    
                        if (responseJson['status'] == 'OK') {
                            
                            localStorage.clear();
                            
                            this.isAuthenticated = false;
                            this.userId = '';
                            this.profileId = ''
                            this.userToken = '';

                            this.name = '';
                            this.username = '';
                            this.email = '';

                            router.push('/login');
                        }
                    })
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;


            }
        },
    }
})