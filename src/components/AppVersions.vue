<template>
    <div class="backgrounded-area">
        <p class="centred-topic">{{$t('appVersions')}}</p>
        <ul>
            <li v-for="appVersion in getAppVersions()" :key="appVersion">
                <AppVersion :version-publication-date="appVersion.versionPublicationDate"
                            :version="appVersion.version"
                            :updates="appVersion.updates"></AppVersion>
            </li>
        </ul>
    </div>
</template>

<script>
    import AppVersion from "@/components/AppVersion";

    export default {
        name: "AppVersions",

        components: {
            AppVersion
        },

        watch: {
            '$route': 'getAppVersions'
        },

        methods: {
            getAppVersions() {
                return  [
                    {
                        versionPublicationDate: this.$t('february') + ' 2020',
                        version: "2.0",
                        updates: [this.$t("v2_0Update1"), this.$t("v2_0Update2"), this.$t("v2_0Update3")]
                    },
                    {
                        versionPublicationDate: this.$t('december') + ' 12 2017',
                        version: "1.01",
                        updates: [this.$t("v1_01Fix1"), this.$t("v1_01Fix2")]
                    },
                    {
                        versionPublicationDate: this.$t('december') + ' 7 2017',
                        version: "1.0",
                        updates: [this.$t("v1_0")]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>