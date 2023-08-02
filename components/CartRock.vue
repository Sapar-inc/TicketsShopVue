<template>
    <div class="cart-container">
        <h1>Корзина</h1>
        <ul class="cart-list">
            <li v-for="(item, index) in cartItems" :key="index">
                <p><strong>Наименование:</strong> {{ item.name }}</p>
                <p><strong>Цена:</strong> {{ item.price }}</p>
                <p><strong>Адрес:</strong> {{ item.street }}</p>
                <button @click="removeFromCart(index)">Удалить</button>
            </li>
        </ul>
        <p><strong>Общая сумма:</strong> {{ totalSum }}</p>
        <button @click="purchaseItems" v-if="cartItems.length > 0">Купить</button>
        <router-link to="/">Вернуться на главную</router-link>
        
    </div>
</template>

<script>
export default {
    name: 'CartRock',
    data() {
        return {
            cartItems: []
        };
    },
    computed: {
        totalSum() {
            return this.cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
        }
    },
    created() {
        this.loadCart();
    },
    methods: {
        loadCart() {
            const cart = JSON.parse(localStorage.getItem('cart'));
            if (cart) {
                this.cartItems = cart;
            }
        },
        removeFromCart(index) {
            this.cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(this.cartItems));
        },
        async purchaseItems() {
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

            const itemCounts = cartItems.reduce((counts, item) => {
                counts[item.name] = (counts[item.name] || 0) + 1;
                return counts;
            }, {});

            try {
                const response = await fetch('http://localhost:3000/purchase', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ itemCounts })
                });

                const result = await response.json();

                if (result.success) {
                    localStorage.setItem('cart', JSON.stringify([]));
                    alert("Покупка совершена успешно!");
                } else {
                    alert("Произошла ошибка при покупке.");
                }
            } catch (error) {
                console.error('Ошибка при совершении покупки:', error);
            }
        }
    }
};
</script>

<style scoped>
.cart-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto; 
}

.cart-list {
    list-style: none;
    padding: 0;
}

.cart-list li {
    background-color: #f9f9f9;
    margin-bottom: 10px;
    padding: 10px;
}

.cart-list p {
    margin: 0;
}

button {
    margin-right: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

@media screen and (max-width: 480px) {
    .cart-container {
        padding: 10px;
    }

    .cart-list li {
        padding: 5px;
    }

    button {
        padding: 5px 10px;
        font-size: 14px;
    }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
    button {
        padding: 10px 15px;
        font-size: 14px;
    }
}
</style>
