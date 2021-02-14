<template>
    <div style="text-align: center">
        <details open>
            <summary>{{getDonateAndGetTheAppText(amountEqualTo)}}</summary>
            <br/>

            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" :value="payPalId" />
                <input type="image"
                       src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                       border="0" name="submit"
                       title="Donate with PayPal"
                       alt="Donate with PayPal"/>
                <img alt="" border="0" width="1" height="1"
                     src="https://www.paypal.com/en_US/i/scr/pixel.gif"/>
            </form>


            <br/>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png">
            <br/>
            <a target="_blank" :href="'https://gourl.io/' + bitcoinLink">
                {{getDonateAndGetTheAppText("Bitcoin")}}
            </a>
            <br/><br/>
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png">
            <br/>
            <a target="_blank" :href="'https://gourl.io/' + dogLink">
                {{getDonateAndGetTheAppText("Dogecoin")}}
            </a>
            <br/><br/>
            <details open>
                <summary>{{"Yandex (RUR)"}}</summary>
                <br>
                <iframe class="yandex-donate-form"
                        :src="'https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=' + getDonateAndGetTheAppText(amountRUR + ' ' + $t('rub')) + '&targets-hint=&default-sum=' + amountRUR + '&button-text=13&payment-type-choice=on&mobile-payment-type-choice=on&comment=off&hint=&successURL=' + successUrlYandex + '&quickpay=shop&account=4100111880881391'"
                        width="423" height="329" frameborder="0" allowtransparency="true" scrolling="no"/>
            </details>
        </details>
    </div>
</template>

<script>

export default {
    name: "PaidApp",

    props: {
        dogLink: String,
        bitcoinLink: String,
        amountEqualTo: String,
        amountRUR: String,
        successUrlYandex: String,
        payPalId: String
    },

    methods: {
        getDonateAndGetTheAppText(whatToDonate) {
            return this.$t('donate') + " " + whatToDonate + " " + this.$t('getTheApp');
        }
    }

}
</script>

<style scoped>
input, img {
    background: initial;
    height: initial;
    width: initial;
    max-height: initial;
    max-width: initial;
    border-radius: initial;
    margin: initial;
}
</style>