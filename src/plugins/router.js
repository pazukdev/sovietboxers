import VueRouter from 'vue-router';
import Vue from "vue";
import Home from "@/components/Home";
import PrivacyPolicy from "@/components/PrivacyPolicy";

Vue.use(VueRouter);

const router = new VueRouter({

    routes: [
        // possible not valid urls
        { path: '/', redirect: { path: '/en' }},
        // urls to components binding
        { path: '/:lang', name: 'home', component: Home },
        { path: '/privacy-policy/:lang', name: 'privacy_policy', component: PrivacyPolicy }

    ]
});

export default router;

