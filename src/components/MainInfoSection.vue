<template>
    <div class="backgrounded-area">
        <p id="app-main-description">
            <span class="colored-text">{{$t('appName')}}</span>
            {{" - "}}
            {{$t("appMainDescription")}}
        </p>
        <NavigateToAppSection/>
    </div>
</template>

<script>
    import NavigateToAppSection from "@/components/NavigateToAppSection";

    export default {
        name: "MainInfoSection",

        components: {NavigateToAppSection}
    }
</script>

<style scoped>

</style>