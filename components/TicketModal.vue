<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <button class="closeBtn" @click="closeModal">X</button>
      <div class="ticket-info">
        <h1 class="ticket-name">Название: {{ modalData.name }}</h1>
        <p class="ticket-description"><strong>Описание:</strong> {{ modalData.description }}</p>
        <p class="ticket-date"><strong>Дата:</strong> {{ modalData.date }}</p>
        <p class="ticket-count"><strong>Количество:</strong> {{ modalData.count }}</p>
        <div class="image-container"
          :style="{ 'background-image': `url(${require('@/assets/img/imgTicket/' + modalData.img)})` }">
          <!-- <img :src="require(`@/assets/img/imgTicket/${modalData.img}`)" :alt="modalData.name" :style="getImageStyle" /> -->
        </div>
        <iframe :src="modalData.map" width="100%" height="200px"></iframe>
        <p class="ticket-price"><strong>Цена:</strong> {{ modalData.price }}</p>
        <p class="ticket-street"><strong>Улица:</strong> {{ modalData.street }}</p>
        <p class="ticket-genres"><strong>Жанры:</strong> {{ modalData.genres }}</p>
      </div>
      <div class="user-actions" v-if="isUserLoggedIn">
        <button class="addToCartBtn" @click="addToCart">Добавить в корзину</button>
      </div>
      <div class="user-actions" v-else>
        <p>Вам нужно войти в свой профиль, чтобы оформлять покупки.</p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'TicketModal',
  data() {
    return {
      isUserLoggedIn: false
    };
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    modalData: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    closeModal() {
      this.$emit('close', false);
    },
    checkLoginStatus() {
      const user = localStorage.getItem('user');
      this.isUserLoggedIn = user ? true : false;
    },
    addToCart() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({
        name: this.modalData.name,
        price: this.modalData.price,
        street: this.modalData.street
      });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  },
  created() {
    this.checkLoginStatus();
  },
  computed: {
    getImageStyle() {
      return {
        width: this.modalData.imageWidth ? `${this.modalData.imageWidth}px` : 'auto',
        height: this.modalData.imageHeight ? `${this.modalData.imageHeight}px` : 'auto'
      };
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
  overflow: auto;

}

.modal-content {
  position: relative;
  background-color: #1d1d1d;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 90%;
  color: #f1f1f1;
  top: 20%;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.closeBtn {
  color: #f1f1f1;
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
}


.closeBtn:active {
  color: #f9b208;
}

.ticket-info {
  display: flex;
  flex-direction: column;
}

.ticket-name {
  font-size: 24px;
  margin-bottom: 10px;
}

.ticket-description,
.ticket-date,
.ticket-count,
.ticket-price,
.ticket-street,
.ticket-genres {
  margin-bottom: 10px;
}

/* .image-container {
    max-width: 100%;
    margin-bottom: 20px;
    overflow: hidden;
  } */
.image-container {
  width: 350px;
  height: 250px;
  background-size: cover;
  margin: 0 auto;

}

img {
  width: 300px;
  height: 100px;
}

/* .image-container img {
    width: 100%;
    height: auto;
  } */


.user-actions {
  margin-top: 20px;
}

.addToCartBtn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f9b208;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.addToCartBtn:hover {
  background-color: #ffa726;
}

@media screen and (max-width: 480px) {
  .modal-content {
    padding: 20px;
  }

  .closeBtn {
    right: 10px;
    top: 10px;
  }

  .ticket-name {
    font-size: 20px;
  }
}</style>
  