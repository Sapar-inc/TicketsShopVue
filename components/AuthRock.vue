<template>
    <div class="modal">
      <div class="modal-content">
        <button class="closeBtn" @click="handleClick">X</button>
        <div class="AuthBtn">
          <button
            @click="toggleModal(true)"
            class="BtnAuth"
            :class="{ active: showModal, nonActive: !showModal }"
          >
            Войти
          </button>
          <button
            @click="toggleModal(false)"
            class="BtnAuth"
            :class="{ active: !showModal, nonActive: showModal }"
          >
            Зарегистрироваться
          </button>
        </div>
  
        <br>
  
        <div v-if="showModal" class="Auth">
          <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
            <input v-model="loginOrEmail" type="text" placeholder="Login or Email">
            <input v-model="password" type="password" placeholder="Password">
            <br>
            <button @click="login">Войти</button>
          </div>
        </div>
        <div v-else class="Auth">
          <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
            <input v-model="registerData.login" type="text" placeholder="Login">
            <input v-model="registerData.name" type="text" placeholder="Name">
            <input v-model="registerData.email" type="email" placeholder="Email">
            <input v-model="registerData.password" type="password" placeholder="Password">
            <input v-model="registerData.passwordTry" type="password" placeholder="Try Password">
            <br>
            <button @click="register">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'AuthRock',
    data() {
        return {
            showModal: true,
            loginOrEmail: '',
            password: '',
            registerData: {
                login: '',
                name: '',
                email: '',
                password: '',
                passwordTry: ''
            }
        };
    },
    methods: {
        handleClick() {
            const eventData = false;
            this.$emit('eventName', eventData);
        },
        toggleModal(show) {
            this.showModal = show;
        },
        login() {
            const loginData = {
                loginOrEmail: this.loginOrEmail,
                password: this.password
            };

            axios.post('http://localhost:3000/login', loginData)
                .then(response => {
                    console.log(response.data);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    this.showModal = false;
                })
                .catch(error => {
                    console.error(error);
                    if (error.response) {
                        alert(error.response.data.message);
                    } else {
                        alert('Ошибка входа');
                    }
                });
        },
        register() {
            if (this.registerData.password !== this.registerData.passwordTry) {
                alert('Пароли не совпадают!');
                return;
            }

            const registrationData = {
                login: this.registerData.login,
                name: this.registerData.name,
                email: this.registerData.email,
                password: this.registerData.password
            };

            axios.post('http://localhost:3000/register', registrationData)
                .then(response => {
                    alert('Успешная регистрация');
                    console.log(response.data);
                    this.showModal = false;
                })
                .catch(error => {
                    console.error(error);
                    if (error.response) {
                        alert(error.response.data.message);
                    } else {
                        alert('Ошибка регистрации');
                    }
                });
        }
    }
};
</script>
  
  <style scoped>
  .modal {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    position: relative;
    background-color: black;
    padding: 50px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .AuthBtn {
    display: flex;
    gap: 20px;
    background-color: gray;
    border-radius: 30px;
  }
  
  .BtnAutn {
    border: 0;
    width: 250px;
    height: 50px;
    border-radius: 30px;
    cursor: pointer;
  }
  
  button {
    height: 50px;
    font-size: larger;
    background-color: rgb(255, 145, 0);
    outline: none;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }
  
  .active {
    background-color: rgb(255, 145, 0);
  }
  
  .nonActive {
    background-color: rgba(255, 0, 0, 0);
  }
  
  .Auth {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input {
    width: 250px;
    height: 50px;
    border: 2px solid rgb(255, 145, 0);
    border-radius: 1px;
    background-color: black;
    outline: none;
    transition: transform 0.3s ease;
    color: white;
    padding-left: 10px;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    font-size: large;
    font-weight: bold;
  }
  
  .closeBtn {
    color: white;
    width: 25px;
    height: 25px;
    position: absolute;
    right: 10px;
    top: 10px;
    border: 0;
    border-radius: 30px;
    background-color: rgba(128, 128, 128, 0);
    font-size: 20px;
    cursor: pointer;
  }
  
  .closeBtn:active {
    color: orange;
  }
  </style>
  