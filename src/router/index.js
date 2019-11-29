import VueRouter from 'vue-router';
import Vue from "vue";
import Website from "@/components/Website";

Vue.use(VueRouter);

const router = new VueRouter({

    routes: [
        // possible not valid urls
        { path: '/', redirect: { path: '/en' }},
        // urls to components binding
        { path: '/:lang', name: 'home', component: Website }
    ]
});

export default router;

