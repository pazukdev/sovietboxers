<template>
    <div style="text-align: center" class="backgrounded-area">
        <p style="text-align: left; margin-top: 10px; margin-bottom: 4px">
            {{$t("ourAffiliates")}}
        </p>
        <div>
            <PartnerLogo style="display: inline-block" class="logo-margin"
                         img-url="https://cdn.admitad-connect.com/public/campaign/images/2015/05/12/a81cc17e95c570a41c661fb1aa6c6439.jpg"
                         url="https://alitems.com/g/1e8d11449450754f973b16525dc3e8/"
                         website-name="aliexpress.com" :text="$t('aliexpress')"/>
            <PartnerLogo style="display: inline-block" class="logo-margin"
                         img-url="https://cdn.admitad-connect.com/public/campaign/images/2019/8/2/21466-9d0a5a14f372e49b.jpg"
                         url="https://ad.admitad.com/g/a7kx4wj7mu50754f973b3b993522d4/"
                         website-name="dok.ua" :text="$t('dok')"/>
        </div>
    </div>
</template>

<script>
import PartnerLogo from "@/components/PartnerLogo";

export default {
    name: "PartnerGroup",
    components: {PartnerLogo}
}
</script>

<style>
.logo-max-size {
    max-width: 300px;
    max-height: 300px;
    border-radius: 4px;
}

.logo-width {
    width: 110px;
}

.logo-margin {
    margin: 6px;
}
</style>