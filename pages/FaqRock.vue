<template>
    <div>
        <HeaderRock />
        <AboutNav />
        <div class="faq-container">
            <h1>Часто Задаваемые Вопросы</h1>
            <ul class="faq-list">
                <li v-for="(faq, index) in faqs" :key="index">
                    <h2>{{ faq.question }}</h2>
                    <p>{{ faq.answer }}</p>
                </li>
            </ul>

            <div class="contact-container">
                <h1>Контакты</h1>
                <p><strong>Email:</strong> info@rockconcerts.com</p>
                <p><strong>Телефон:</strong> +7 123 456 7890</p>
                <p><strong>Адрес:</strong> г. Алматы, ул. Рокеров, д.1</p>
            </div>
        </div>

        <FooterRock />
    </div>
</template>

<script>
import HeaderRock from '@/components/HeaderRock.vue';
import FooterRock from '@/components/FooterRock.vue';
import AboutNav from '@/components/AboutNav.vue'
export default {
    name: 'FaqRock',
    components: {
        HeaderRock,
        FooterRock,
        AboutNav
    },
    data() {
        return {
            faqs: [
                {
                    question: 'Как купить билет на концерт?',
                    answer: 'Для покупки билета на концерт, выберите интересующее вас мероприятие и следуйте инструкциям на сайте.'
                },
                {
                    question: 'Можно ли вернуть билет?',
                    answer: 'Да, билет можно вернуть. Для этого свяжитесь с нашей службой поддержки не позднее, чем за 48 часов до начала мероприятия.'
                },
                {
                    question: 'Какие формы оплаты принимаются?',
                    answer: 'Мы принимаем все основные кредитные карты, а также электронные платежи через системы PayPal и WebMoney.'
                }
            ],
        };
    },
};
</script>

<style scoped>
.faq-container {
    padding: 20px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}

.faq-list {
    list-style: none;
    padding: 0;
}

.faq-list li {
    background-color: #f9f9f9;
    margin-bottom: 10px;
    padding: 10px;
}

.faq-list h2 {
    margin: 0;
}

.faq-list p {
    margin: 5px 0;
}

.contact-container {
    margin-top: 20px;
}
</style>
