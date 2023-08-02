<template>
    <div class="headerRock">
        <header>
            <div class="logo">
                <router-link class="custom-link" to="/">
                    <img class="img_logo" src="@/assets/img/afishaLogo.png" alt="">
                </router-link>
            </div>
            <div class="buttons">
                <button v-if="!isUserLoggedIn" @click="showModal = true">Вход</button>
                <div class="btnUser" v-else>
                    <button>
                        <router-link to="/CartRock">
                            <img class="img_icon" src="@/assets/icon/bucketIcon.svg">
                        </router-link>
                    </button>
                    <button @click="logout">Выход</button>
                </div>
                <AuthRock v-if="showModal" @eventName="handleEvent" />
            </div>
        </header>
    </div>
</template>

<script>
import AuthRock from '@/components/AuthRock';

export default {
    name: 'HeaderRock',
    components: {
        AuthRock
    },
    data() {
        return {
            showModal: false,
            isUserLoggedIn: false
        };
    },
    methods: {
        handleEvent(eventData) {
            this.showModal = eventData;
            this.checkLoginStatus();
        },
        checkLoginStatus() {
            const user = localStorage.getItem('user');
            this.isUserLoggedIn = user ? true : false;
        },
        logout() {
            localStorage.removeItem('user');
            this.isUserLoggedIn = false;
        }
    },
    mounted() {
        this.checkLoginStatus();
    }
}
</script>

<style scoped>
.headerRock header {
    width: 1fr;
    height: 50px;
    border-radius: 2px;
    display: flex;
    flex-direction: row;
    background-color: black;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}

.logo {
    width: 250px;
}

.img_logo {
    width: 250px;
}

button {
    width: 70px;
    height: 50px;
    font-size: larger;
    background-color: rgb(255, 145, 0);
    outline: none;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: transform 0.3s ease;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
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

.img_icon {
    width: 35px;
}

.buttons {
    display: flex;
    gap: 10px;
}
.btnUser{
    display: flex;
    gap: 20px;
}
@media (max-width: 768px) {
    .headerRock header {
        flex-direction: row;
        padding: 10px 20px;
        gap: 20px;
    }
    
    .logo {
        width: 100%;
    }
    
    .img_logo {
        max-width: 100%;


    }
    
    .buttons {
        gap: 20px;
    }
    
    button {
        max-width: 50px;
        
        font-size: small;
    }

}
</style>