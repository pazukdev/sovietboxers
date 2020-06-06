<template>
    <div>
        <ul>
            <li v-for="description in descriptions" :key="description">
                <AppVersion :version-publication-date="description.versionPublicationDate"
                            :version="description.version"
                            :updates="description.updates"/>
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

        props: {
            descriptions:Array
        }
    }
</script>

<style scoped>
    ul {
        padding: 0;
        list-style-type: none;
    }
</style>