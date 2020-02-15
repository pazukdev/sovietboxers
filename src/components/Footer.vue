<template>
    <div>
        <div class="backgrounded-area">
            <span>Email: pazukdev@gmail.com</span>
            <span>
                <a target="_blank"
                   href="https://www.facebook.com/groups/1979481172318899/?ref=bookmarks"
                   title="Soviet Boxers Seals & Bearings tech support community on Facebook">
                <img src="../assets/logo_facebook.png" alt="fb logo"/></a>
                <a target="_blank"
                   href="https://vk.com/club158920167"
                   title="Soviet Boxers Seals & Bearings tech support community on vk.com">
                <img src="../assets/logo_vk.png" alt="vk logo"/></a>
            </span>
            <span>&#169; 2017-2020 {{$t("appName")}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WebsiteFooter"
    }
</script>

<style scoped>
    .backgrounded-area {
        background: #050505;
        padding: initial;
        text-align: center;
    }

    .backgrounded-area span, a {
        display: inline-block;
        margin: 5px;
        vertical-align: middle;
    }

    .backgrounded-area img {
        height: 50px;
    }
</style>