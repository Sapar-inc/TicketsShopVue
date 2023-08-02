<template>
    <div>
        <HeaderRock />
        <AboutNav />
        <div class="musicians-container">
            <h1>Популярные рок-музыканты</h1>
            <ul class="musicians-list">
                <li v-for="(musician, index) in musicians" :key="index">
                    <h2>{{ musician.name }}</h2>
                    <p><strong>Жанр:</strong> {{ musician.genre }}</p>
                    <p v-if="musician.band"><strong>Группа:</strong> {{ musician.band }}</p>
                </li>
            </ul>
        </div>

        <FooterRock />
    </div>
</template>

<script>
import HeaderRock from '@/components/HeaderRock.vue';
import FooterRock from '@/components/FooterRock.vue';
import AboutNav from '@/components/AboutNav.vue'

export default {
    name: 'MusiciansRock',
    components: {
        HeaderRock,
        FooterRock,
        AboutNav
    },
    data() {
        return {
            musicians: [
                {
                    name: 'Джимми Хендрикс',
                    genre: 'Психоделический рок',
                    band: 'The Jimi Hendrix Experience',
                },
                {
                    name: 'Фредди Меркьюри',
                    genre: 'Рок',
                    band: 'Queen',
                },
                {
                    name: 'Роберт Плант',
                    genre: 'Хард-рок',
                    band: 'Led Zeppelin',
                },
                {
                    name: 'Дэвид Боуи',
                    genre: 'Глэм-рок',
                },
                {
                    name: 'Курт Кобейн',
                    genre: 'Гранж',
                    band: 'Nirvana',
                },
            ],
        };
    },
};
</script>

<style scoped>
.musicians-container {
    padding: 20px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}

.musicians-list {
    list-style: none;
    padding: 0;
}

.musicians-list li {
    background-color: #f9f9f9;
    margin-bottom: 10px;
    padding: 10px;
}

.musicians-list h2 {
    margin: 0;
}

.musicians-list p {
    margin: 5px 0;
}
</style>
