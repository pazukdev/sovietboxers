<template>
    <div style="white-space: nowrap">
        <label>
            {{$t("language")}}
            <select v-model="newLanguage"
                    @change="selectLanguage()">
                <option v-for="lang in ['en', 'ru']" :key="lang" :value="lang">
                    {{lang.toUpperCase()}}
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