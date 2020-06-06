<template>
    <div class="app-version-div">
        <p v-if="versionPublicationDate !== undefined">{{versionPublicationDate}}</p>
        <p class="colored-text" v-if="version !== undefined">{{"v " + version}}</p>
        <ul>
            <li v-for="update in updates" :key="update">
                {{update}}
            </li>
        </ul>
        <div v-if="version === '1.01'" style="width: 200px">
            <p>{{"Download v " + version}}</p>
            <a id="google-play-link-v-1.01"
               target="_blank"
               :title="'Download v ' + version"
               href='https://play.google.com/store/apps/details?id=by.pazukdev.sovietboxersbearings&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img id="google-play-img" class="google-play-img" alt='Get it on Google Play'
                     src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
            </a>
        </div>
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

    @media only screen and (max-width: 640px) {
        .app-version-div {
            margin: 20px 0;
        }

        li {
            margin: 20px 0;
        }

    }

</style>