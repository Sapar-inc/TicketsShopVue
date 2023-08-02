<template>
    <div>
        <HeaderRock />
        <AboutNav />
        <div class="concert-halls-container">
            <h1>Концертные залы в Алматы</h1>
            <div v-for="hall in concertHalls" :key="hall.name" class="hall-card">
                <h2>{{ hall.name }}</h2>
                <p><strong>Описание:</strong> {{ hall.description }}</p>
                <p><strong>Адрес:</strong> {{ hall.address }}</p>
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
    name: 'ConcertHalls',
    components: {
        HeaderRock,
        FooterRock,
        AboutNav
    },
    data() {
        return {
            concertHalls: [
                {
                    name: 'Дворец Республики (Palace of the Republic)',
                    description: 'Один из крупнейших залов в Алматы, подходит для масштабных рок-концертов.',
                    address: 'ул. Достык, 52/2, Алматы',
                },
                {
                    name: 'Motor Club Republic',
                    description: 'Популярное место среди рок-групп и их поклонников.',
                    address: 'Неизвестно',
                },
                {
                    name: 'Hard Rock Cafe Almaty',
                    description: 'Известный ресторан и музыкальная площадка для живых концертов, включая рок-выступления.',
                    address: 'ул. Гоголя, 53, Алматы',
                },
                {
                    name: 'AFTERPARTY Club',
                    description: 'Клуб, в котором проводятся концерты и музыкальные мероприятия, в том числе рок-концерты.',
                    address: 'Неизвестно',
                },
            ],
        };
    },
};
</script>

<style scoped>
.concert-halls-container {
    padding: 20px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}

.hall-card {
    background-color: #f9f9f9;
    margin-bottom: 20px;
    padding: 10px;
}

.hall-card h2 {
    margin: 0;
}

.hall-card p {
    margin: 5px 0;
}
</style>
