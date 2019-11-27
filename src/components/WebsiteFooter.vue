<template>
    <div class="footer">
        <span>
            <a target="_blank"
                 href="https://jobs.tut.by/resume/1a7671d3ff044d40850039ed1f364774384363"
                 title="My resume">Developer's CV</a>
        </span>
        <span>Email: pazukdev@gmail.com</span>
        <a target="_blank"
           href="https://www.facebook.com/groups/1979481172318899/?ref=bookmarks"
           title="Soviet Boxers Seals & Bearings tech support community on Facebook">
            <img src="../assets/logo_facebook.png" alt="fb logo"/></a>
        <span>
            <a target="_blank"
                 href="https://vk.com/club158920167"
                 title="Soviet Boxers Seals & Bearings tech support community on vk.com">
            <img src="../assets/logo_vk.png" alt="vk logo"/></a>
        </span>
        <span>&#169; 2019 Soviet Boxers Seals & Bearings</span>
    </div>
</template>

<script>
    export default {
        name: "WebsiteFooter"
    }
</script>

<style scoped>
    .footer {
        background: #101010;
        margin: 20px;
        display: inline-block;
        text-align: center;
        width: 100%;
    }

    span {
        display: inline-block;
        height: 50px;
    }

    img {
        height: 100%;
    }

    .td-logo {
        width: 50px;
        height: 50px;
    }

    .td-wide {
        width: 30%;
    }

    .td-max-wide {
        width: 100%;
    }
</style>