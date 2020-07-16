<template>
    <div style="white-space: nowrap">
        <label>
            <select v-model="newLanguage" style="font-weight: bold; color: #212121"
                    @change="selectLanguage()">
                <option v-for="lang in ['en', 'ru']" :key="lang" :value="lang">
                    {{getLangName(lang)}}
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
            '$route': 'onUrlChange'
        },

        created() {
            this.onUrlChange();
        },

        methods: {
            onUrlChange() {
                let urlLang = this.$route.params.lang;
                if (urlLang !== this.newLanguage) {
                    this.newLanguage = urlLang;
                    this.$i18n.locale = this.newLanguage;
                }
            },

            selectLanguage() {
                this.$router.push({name: "home", params: {lang: this.newLanguage}});
                this.$i18n.locale = this.newLanguage;
            },

            getLangName(langCode) {
                if (langCode === 'ru') {
                    return 'Русский';
                }
                return "English";
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