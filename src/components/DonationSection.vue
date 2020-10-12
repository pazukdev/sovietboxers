<template>
    <div style="text-align: center">
        <p><b>{{$t("youCanHelpTheProject")}}</b></p>
        <br>
        <details>
            <summary><img src="../assets/beer.png" alt="beer icon" :title="$t('pour')"></summary>
            <br>
            <p>{{$t("projectTakesTime")}}</p>
            <br>
            <details>
                <summary>{{$t("payPalDonationBox")}}</summary>
                <br>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="old.vehicles.app@gmail.com" />
                    <input type="hidden" name="item_name" value="Donation to help the project" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image"
                           src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                           border="0" name="submit"
                           title="Donate with PayPal"
                           alt="Donate with PayPal button"/>
                    <img alt="" border="0" width="1" height="1"
                         src="https://www.paypal.com/en_US/i/scr/pixel.gif"/>
                </form>
            </details>
            <br>
            <details>
                <summary>{{$t("yandexDonationBox")}}</summary>
                <br>
                <iframe id="yandex-donate-form"
                        src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=Donation%20to%20help%20the%20project%20%2F%20%D0%94%D0%BE%D0%BD%D0%B0%D1%82%20%D0%BD%D0%B0%20%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D1%83%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0&targets-hint=&default-sum=&button-text=13&payment-type-choice=on&comment=on&hint=&successURL=https%3A%2F%2Fwww.sovietboxers.com&quickpay=shop&account=4100111880881391"
                        width="423" height="301" frameborder="0" allowtransparency="true" scrolling="no"/>
            </details>
            <br><br>
            <div style="text-align: left">
                <div v-if="$route.params.lang === 'en'">
                    <p style="font-weight: bold">For our supporters</p>
                    <p>If you have your own project (website, app, blog, FB or VK group, YouTube channel) - let us know. Email us or contact us on FB or VK. We'll place your logo with a link to your project in our app.</p>
                    <br>
                    <p style="font-weight: bold">How long will your link be displayed</p>
                    <p>
                        Of course, we cannot leave all links permanently. The list will become huge and meaningless.<br>
                        Display time corresponds to donation: 0.5 EUR = 1 day. But it isn't a strict condition. Probably your link will stay visible longer. We don't sell ad space. It's just a way to thank you for your help. As well as our little help for your project.
                    </p>
                </div>
                <div v-else>
                    <p style="font-weight: bold">Для тех, кто поддержал проект донатом</p>
                    <p>Если у вас есть собственный проект (сайт, приложение, блог, группа в FB или VK, канал на YouTube) - сообщите нам. Напишите нам на email, FB или VK. Мы разместим в приложении ваш логотип со ссылкой на ваш проект.</p>
                    <br>
                    <p style="font-weight: bold">Как долго логотип и ссылка будут в приложении</p>
                    <p>
                        Конечно, мы не можем оставлять все ссылки навсегда. Список станет огромным и потеряет смысл.<br>
                        Время отображения соответствует донату: 0.5 EUR (50 руб.) = 1 день. Но это не строгое условие. Возможно, ваша ссылка будет дольше оставаться видимой. Мы не продаем рекламное место. Это просто способ поблагодарить вас за вашу помощь. А также наша небольшая помощь для вашему проекту.
                    </p>
                </div>
            </div>
        </details>
    </div>
</template>

<script>
    export default {
        name: "DonationSection"
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