<template>
    <div>
        <HeaderRock />
        <AboutNav />

        <div class="about-container">
            <h1>О нас</h1>
            <div class="content">
                <img src="https://i.pinimg.com/originals/e0/ab/17/e0ab177a054b5d16bd5bcd3a7fd7b212.jpg" alt="Rock Concert"
                    class="about-image">
                <div class="text">
                    <h2>Rock Ticketing</h2>
                    <p>
                        Добро пожаловать на Rock Ticketing, ваш надёжный источник для покупки билетов на рок-концерты! Наш
                        сайт предоставляет вам возможность быть всегда в курсе предстоящих событий и приобретать билеты на
                        концерты вашей любимой рок-группы.
                    </p>
                    <p>
                        Мы ценим наших клиентов и стремимся предоставить лучший сервис и качество билетов. Не упустите шанс
                        стать частью незабываемых музыкальных событий!
                    </p>
                </div>
            </div>
        </div>

        <FooterRock />
    </div>
</template>

<script>
import HeaderRock from '@/components/HeaderRock.vue';
import FooterRock from '@/components/FooterRock.vue';
import AboutNav from "@/components/AboutNav.vue"

export default {
    name: 'AboutRock',
    components: {
        HeaderRock,
        FooterRock,
        AboutNav
    }
}
</script>

<style scoped>
.about-container {
    padding: 40px 10%;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
}

.about-image {
    max-width: 45%;
    height: auto;
    border-radius: 8px;
}

.text {
    max-width: 50%;
}

.text h2 {
    margin-bottom: 20px;
    font-size: 24px;
}

.text p {
    font-size: 18px;
    line-height: 1.6;
}

@media screen and (max-width: 768px) {
    .content {
        flex-direction: column;
    }

    .about-image {
        max-width: 100%;
        margin-bottom: 20px;
    }

    .text {
        max-width: 100%;
    }
}</style>
