<template>
    <div style="text-align: center">
        <a target="_blank" :href="url">
            <img :src="imgUrl" alt="logo" class="logo-max-size"/>
        </a>
        <br>
        <p>{{websiteName}}</p>
        <p>{{text}}</p>
    </div>

</template>

<script>
export default {
    name: "PartnerLogo",
    props: {
        imgUrl: String,
        url: String,
        websiteName: String,
        text: String
    }
}
</script>

<style scoped>

</style>