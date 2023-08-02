<template>
    <div class="search">
        <input type="text" placeholder="Search">
        <button><img src="@/assets/icon/searchIcon.svg" alt=""></button>
    </div>
</template>

<script>
export default {
    name: 'SearchRock',
}
</script>

<style scoped>
.search {
    display: flex;
    align-items: center;
}

input {
    width: 550px;
    height: 30px;
    border: 2px solid rgb(255, 145, 0);
    border-radius: 1px;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    transition: transform 0.3s ease;
    color: white;
    padding-left: 10px;
    font-family: 'Courier New', Courier, monospace;
    cursor: pointer;
}

input:hover {
    box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.486);
    transition: 0.3s;
    transform: translateY(-5px);
}

button {
    width: 32px;
    height: 32px;
    margin-left: 10px;
    background-color: rgb(255, 145, 0);
    outline: none;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

button:hover {
    background-color: rgb(255, 154, 23);
    transform: translateY(-5px);
    box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.486);
    transition: 0.3s;
}

button:active {
    background-color: rgb(181, 102, 0);
}

img {
    width: 20px;
}
</style>