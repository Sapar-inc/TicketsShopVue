<template>
    <div>
        <HeaderRock />
        <AboutNav />

        <div class="genres-container">
            <h1>Популярные жанры рок-музыки</h1>
            <ul class="genres-list">
                <li v-for="(genre, index) in genres" :key="index">
                    <h2>{{ genre.name }}</h2>
                    <p>{{ genre.description }}</p>
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
    name: 'GenresRock',
    components: {
        HeaderRock,
        FooterRock,
        AboutNav
    },
    data() {
        return {
            genres: [
                {
                    name: 'Хард-рок',
                    description: 'Жанр рок-музыки, характеризующийся простыми мелодиями, мощным звуком гитары и ударных.',
                },
                {
                    name: 'Панк-рок',
                    description: 'Жанр рок-музыки, который развился в середине 1970-х годов и характеризуется простыми мелодиями, быстрым темпом и антиэстаблишментской лирикой.',
                },
                {
                    name: 'Гранж',
                    description: 'Поджанр альтернативного рока, возникший в середине 1980-х годов в Сиэтле, отличается «грязным» звуком гитары, контрастами между тихими стихами и громкими припевами.',
                },
                {
                    name: 'Метал',
                    description: 'Жанр рок-музыки, характеризующийся агрессивным ритмом, высокой громкостью и использованием гитарных риффов.',
                },
                {
                    name: 'Прогрессив-рок',
                    description: 'Жанр рок-музыки, который сочетает элементы классической музыки, джаза и экспериментальных звуков, часто с длинными и сложными композициями.',
                }
            ],
        };
    },
};
</script>

<style scoped>
.genres-container {
    padding: 20px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}

.genres-list {
    list-style: none;
    padding: 0;
}

.genres-list li {
    background-color: #f9f9f9;
    margin-bottom: 10px;
    padding: 10px;
}

.genres-list h2 {
    margin: 0;
}

.genres-list p {
    margin: 5px 0;
}
</style>
