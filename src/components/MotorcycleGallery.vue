<template>
    <div class="backgrounded-area" id="motorcycle-gallery">
        <img :title="'К-750' + ', ' + $t('kmz') + ' ' + '1958-1964'"
             alt="kmz k-750 sidecar boxer motorcycle"
             src='../assets/model_k750_small.png'/>
        <img :title="'K-750B' +', ' + $t('kmz') + ' ' +'1958-1964'"
             alt="kmz k-750v k-750B sidecar boxer motorcycle"
             src='../assets/model_k750v_small.png'/>
        <img :title="'M-63' + ' ' + $t('ural') + '-2' +', ' + $t('imz') + ' ' + '1963-1980'"
             alt="imz m-63 ural-2 sidecar boxer motorcycle"
             src='../assets/model_m63_small.png'/>
        <img :title="'K-650' + ', ' + $t('kmz') + ' ' + '1968-1971'"
             alt="kmz k-650 sidecar boxer motorcycle"
             src='../assets/model_k650_small.png'/>
        <img :title="'M-66' + ' ' + $t('ural') + '-3' +', ' + $t('imz') + ' ' + '1971-1975'"
             alt="imz m-66 ural-3 sidecar boxer motorcycle"
             src='../assets/model_m66_small.png'/>
        <img :title="'МВ-750М' +', ' + $t('kmz') + ' ' +'1973-1976'"
             alt="kmz mv-750m MB-750M sidecar boxer motorcycle"
             src='../assets/model_mv750m_small.png'/>
        <img :title="$t('dnepr') + ' MT-10' + ', ' + $t('kmz') + ' ' +'1974-1976'"
             alt="kmz dnepr mt-10 sidecar boxer motorcycle"
             src='../assets/model_mt10_small.png'/>
        <img :title="$t('dnepr') + '-11' + ', ' + $t('kmz') + ' ' +'1985-2008'"
             alt="kmz dnepr-11 sidecar boxer motorcycle"
             src='../assets/model_mt11_small.png'/>
    </div>
</template>

<script>
    export default {
        name: "MotorcycleGallery"
    }
</script>

<style scoped>
    @media only screen and (max-width: 640px) {
      #motorcycle-gallery {
          display: none;
      }
    }
</style>