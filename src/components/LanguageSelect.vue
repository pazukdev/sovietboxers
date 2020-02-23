<template>
    <div>
        <label>
            <select v-model="newLanguage"
                    @change="selectLanguage()">
                <option v-for="lang in ['en', 'ru']" :key="lang">
                    {{lang}}
                </option>
            </select>
        </label>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "LanguageSelect",

        computed: {
            ...mapState({
                appLanguage: state => state.dictionary.appLanguage
            })
        },

        data() {
            return {
                newLanguage: ""
            }
        },

        watch: {
            '$route': 'setLocale'
        },

        created() {
            this.setLocale();
        },

        methods: {
            setLocale() {
                this.newLanguage = this.appLanguage;
                if (this.$route.params.lang !== this.newLanguage) {
                    this.changeLanguageInUrl(this.newLanguage);
                }
                this.$i18n.locale = this.newLanguage;
            },

            selectLanguage() {
                this.$store.dispatch("setAppLanguage", this.newLanguage.toLowerCase());
                this.changeLanguageInUrl(this.newLanguage.toLowerCase());
            },

            changeLanguageInUrl(language) {
                this.$router.replace({
                    path: this.$router.currentRoute.path.replace(/\/[^/]*$/, "/" + language)
                });
            }
        }
    }
</script>

<style scoped>
    select {
        color: #101010;
    }

    option {
        background: #617D89;
        color: #101010;
    }
</style>