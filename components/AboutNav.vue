<template>
    <div class="aboutNav">
        <div>
            <ul>
                <li>
                    <h2><router-link class="custom-link" to="/ConcertHalls">Концертные залы</router-link></h2>
                </li>
                <li>
                    <h2><router-link class="custom-link" to="/MusiciansRock">Музыканты</router-link></h2>
                </li>
                <li>
                    <h2><router-link class="custom-link" to="/GenresRock">Жанры</router-link></h2>
                </li>
                <li>
                    <h2><router-link class="custom-link" to="/FaqRock">Вопросы и Контакты</router-link></h2>
                </li>
                <li>
                    <h2><router-link class="custom-link" to="/AboutRock">О нас</router-link></h2>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutNav',
}
</script>

<style scoped>
.aboutNav{

}
ul {
    list-style: none;
    user-select: none;
    display: flex;
    gap: 20px;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
}

h2{
    cursor: pointer;
    transition: font-size 0.3s ease;
}

h2:hover {
    font-size: 130%;
}
h2:active{
    color: rgb(210, 119, 0);
}
.custom-link {
  text-decoration: none;
  color: inherit;
}
@media (max-width: 768px) {
    ul {
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    h2 {
        font-size: 16px;
    }
}
</style>