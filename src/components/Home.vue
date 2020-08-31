<template>
    <div id="website-main-div">
        <Header/>
        <MotorcycleGallery/>
        <MainInfoSection/>
        <div class="backgrounded-area">
            <div v-if="$route.params.lang === 'en'">
                <p style="text-align: center; font-weight: bold">
                    For business
                </p>
                <br><br>
                The app has a feature that allows the user to easily find a store where he can buy a product at a good price. On the other hand, this feature serves as a good ad for good sellers
                <br><br>
                <p style="font-weight: bold">About the feature</p>
                <br>
                <ul>
                    <li>
                        Each item in the app contains a "Where to buy" section
                    </li>
                    <li>
                        The "Where to buy" section provides the list of links to this item in e-stores that follows the concept "1 Seller Per Country"
                    </li>
                    <li>
                        Thus, each link on the list can be described as “the best deal in the country”
                    </li>
                </ul>
                <br>
                <div style="text-align: center">
                    <a href="https://i.postimg.cc/Dy7pnw9Y/for-business-en-1.png"
                       target="_blank">
                        <img class="clickable-screenshot"
                             src="https://i.postimg.cc/Dy7pnw9Y/for-business-en-1.png"
                             alt="where-to-buy-list-en"/>
                    </a>
                    <a href="https://i.postimg.cc/L6vCXMR4/for-business-en-2.png"
                       target="_blank">
                        <img class="clickable-screenshot"
                             src="https://i.postimg.cc/L6vCXMR4/for-business-en-2.png"
                             alt="where-to-buy-list-en"/>
                    </a>
                </div>
                <br>
                <p style="font-weight: bold">
                    What business is interested in this feature?
                </p>
                <br>
                <p>1. Sellers</p>
                1.1 Do you have an e-store (store on eBay, FB, VK, ect.)? - Add a link to your product in the "Where to Buy" section
                <br>
                1.2 Do you think your offer is the best for the price? - Change the existing link for this product in your country to a link for this product in your e-store. If your change is approved, it'll remain in effect
                <br>
                <br>
                <p>2. Small and "DIY" manufacturers</p>
                Do you make parts and components yourself? - You can add your products to the app. They will be displayed in the list of analogs along with serial factory products
                <br><br>
                <p>
                    This feature is free. You can perform the described actions yourself using the app UI. Also feel free to contact me by email, FB or VK. I'll be glad to help you
                </p>
            </div>
            <div v-if="$route.params.lang === 'ru'">
                <p style="text-align: center; font-weight: bold">
                    Для бизнеса
                </p>
                <br>
                В приложении реализована фича, которая позволяет пользователю легко найти магазин, в котором он может купить товар по хорошей цене. С другой стороны, эта функция служит хорошей рекламой для хороших продавцов
                <br><br>
                <p style="font-weight: bold">О фиче</p>
                <ul>
                    <li>
                        Каждая запчасть в приложении содержит раздел «Где купить»
                    </li>
                    <li>
                        В разделе «Где купить» представлен список ссылок на эту запчасть в интернет-магазинах, который соответствует концепции «1 продавец на страну»
                    </li>
                    <li>
                        Таким образом, каждую ссылку в списке можно охарактеризовать как «лучшее предложение в стране»
                    </li>
                </ul>
                <br>
                <div style="text-align: center">
                    <a href="https://i.postimg.cc/fRbkmYdn/for-business-ru-1.png"
                       target="_blank">
                        <img class="clickable-screenshot"
                             src="https://i.postimg.cc/fRbkmYdn/for-business-ru-1.png"
                             alt="where-to-buy-list-en"/>
                    </a>
                    <a href="https://i.postimg.cc/FHnzZ1bf/for-business-ru-2.png"
                       target="_blank">
                        <img class="clickable-screenshot"
                             src="https://i.postimg.cc/FHnzZ1bf/for-business-ru-2.png"
                             alt="where-to-buy-list-en"/>
                    </a>
                </div>
                <br>
                <p style="font-weight: bold">
                    Какой бизнес заинтересован в этой фиче?
                </p>
                <p>1. Продавцы</p>
                1.1 У вас интернет-магазин (магазин на FB, VK, eBay, постоянное объявление)? - Добавьте ссылку на свой товар в раздел "Где купить"
                <br>
                1.2 Вы считаете свое предложение лучшим по цене? - Замените уже существующую ссылку в вашей стране на этот товар в вашем магазине. Если ваша ссылка будет одобрена модератором, то ваше изменение останется в силе
                <br>
                <br>
                <p>2. Мелкие и "гаражные" производители запчастей</p>
                Сами изготавливаете запчасти и комплектующие? - Можете добавить их в приложение. Они будут отображаться в списке аналогов наравне с серийными заводскими изделиями
                <br><br>
                <p>
                    Эта фича бесплатна. Вы можете самостоятельно выполнять описанные действия с помощью интерфейса приложения. Или можно написать мне на email, FB или VK. Буду рад помочь
                </p>
            </div>
        </div>
        <div class="backgrounded-area" style="text-align: center">
            <p>{{$t("dontForgetToRate")}}</p>
            <GooglePlayLink/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header";
import MotorcycleGallery from "@/components/MotorcycleGallery";
import Footer from "@/components/Footer";
import MainInfoSection from "@/components/MainInfoSection";
import GooglePlayLink from "@/components/GooglePlayLink";

export default {
        name: "Home",

        components: {
            GooglePlayLink,
            MainInfoSection,
            Header,
            MotorcycleGallery,
            Footer
        }
    }
</script>

<style>
    .backgrounded-area {
        background: #212121;
        margin: 20px;
        padding: 20px;
    }

    .default-padding {
        padding: 20px;
    }

    .colored-text {
        color: #617d89;
    }

    .centred-topic {
        text-align: center;
    }

    .topic, .centred-topic {
        font-weight: bold;
    }

    .clickable-screenshot {
        width: 260px;
        margin: 10px;
    }

    @media only screen and (max-width: 640px) {
        #yandex-donate-form {
            width: 100%;
        }
    }
</style>