import { App, URLOpenListenerEvent } from '@capacitor/app';
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // DEFAULT LAYOUT
  {
    path: "",
    redirect: "/login",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "/home",
        component: () => import("@/views/home.vue"),
      },
      {
        path: "/asks",
        component: () => import("@/views/asks.vue"),
      },  
      {
        path: "/asks/:askId",
        component: () => import("@/views/ask.vue"),
      },         
      {
        path: "/chats",
        component: () => import("@/views/chats.vue"),
      },  
      {
        path: "/chats/:chatId",
        component: () => import("@/views/chat.vue"),
      },            
      {
        path: "/records",
        component: () => import("@/views/records.vue"),
      }, 
      {
        path: "/records/:recordId",
        component: () => import("@/views/record.vue"),
      },    
      {
        path: "/videos",
        component: () => import("@/views/videos.vue"),
      }, 
      {
        path: "/videos/:videoId",
        component: () => import("@/views/video.vue"),
      },            
      {
        path: "/profile",
        component: () => import("@/views/profile.vue"),
      },       
      {
        path: "/about",
        component: () => import("@/views/about.vue"),
      },
    ],
  },

  // BLANK LAYOUT
  {
    path: "",
    component: () => import("@/layouts/blank.vue"),
    children: [
      {
        path: "/blank",
        component: () => import("@/views/blank.vue"),
      },
      {
        path: "/login",
        component: () => import("@/views/login.vue"),
      },
      {
        path: "/register",
        component: () => import("@/views/register.vue"),
      },
    ],
  },

  // NOT FOUND
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

App.addListener('appUrlOpen', function (event: URLOpenListenerEvent) {
  // Example url: https://beerswift.app/tabs/tabs2
  // slug = /tabs/tabs2
  const slug = event.url.split('.app').pop();

  // We only push to the route if there is a slug present
  if (slug) {
    router.push({
      path: slug,
    });
  }
});

export default router;
