<template>
    <div>
        <a id="google-play-link"
           target="_blank"
           :title="$t('googlePlayLinkTitle')"
           :href="getGooglePlayLink($route.params.lang)">
            <img style="width: 260px" id="google-play-img" alt='Get it on Google Play'
                 :src="getGooglePlayImg($route.params.lang)"/>
        </a>
    </div>
</template>

<script>
    export default {
        name: "GooglePlayLink",

        methods: {
            getGooglePlayLink(lang) {
                lang = lang === "ru" ? "&hl=ru" : "";
                return "https://play.google.com/store/apps/details?id=com.pazukdev.oldvehicles" + lang;
            },

            getGooglePlayImg(lang) {
                lang = lang === "ru" ? "ru" : "en";
                return "https://play.google.com/intl/en_us/badges/images/generic/" + lang + "_badge_web_generic.png";
            }
        }
    }
</script>

<style scoped>

</style>