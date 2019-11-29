<template>
    <div class="app-version-div">
        <p>{{versionPublicationDate}}</p>
        <p class="colored-text">{{version}}</p>
        <ul id="example-1">
            <li v-for="update in updates" :key="update">
                {{update}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "AppVersion",

        props: {
            versionPublicationDate: String,
            version: String,
            updates: Array
        }
    }
</script>

<style scoped>
    .app-version-div {
        margin: 20px;
    }

    p {
        text-align: center;
        margin: 20px;
    }

    li {
        margin: 20px;
    }
</style>