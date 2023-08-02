    <template>
        <div class="admin-panel">
            <h1>Админ Панель</h1>

            <h2 v-if="editing">Редактировать билет</h2>
            <h2 v-else>Добавить билет</h2>
            <form @submit.prevent="editing ? updateTicket() : addTicket()">
                <input v-model="formData.name" placeholder="Название" />
                <input v-model="formData.description" placeholder="Описание" />
                <input v-model="formData.data" placeholder="Дата" />
                <input v-model="formData.count" type="number" placeholder="Количество" />
                <input v-model="formData.img" placeholder="URL изображения" />
                <input v-model="formData.street" placeholder="Улица" />
                <input v-model="formData.genre" placeholder="Жанр" />
                <input v-model="formData.price" placeholder="Цена" />
                <input v-model="formData.map" placeholder="URL карты" />
                <button type="submit">{{ editing ? 'Обновить' : 'Добавить' }}</button>
                <button v-if="editing" @click.prevent="cancelEdit">Отменить</button>
            </form>

            <h2>Список билетов</h2>
            <ul>
                <li v-for="(ticket, index) in tickets" :key="index">
                    <div>
                        {{ ticket.name }} ({{ ticket.genre }})
                    </div>
                    <button @click="startEdit(ticket)">Редактировать</button>
                    <button @click="deleteTicket(ticket.id)">Удалить</button>
                </li>
            </ul>
        </div>
    </template>

    <script>
    export default {
        data() {
            return {
                tickets: [],
                formData: {
                    id: '',
                    name: '',
                    description: '',
                    data: '',
                    count: '',
                    img: '',
                    street: '',
                    genre: '',
                    price: '',
                    map: ''
                },
                editing: false
            };
        },
        created() {
            this.fetchTickets();
        },
        methods: {
            async fetchTickets() {
                try {
                    const response = await fetch('http://localhost:3000/tickets');
                    const data = await response.json();
                    this.tickets = data;
                } catch (error) {
                    console.error('Ошибка при загрузке билетов:', error);
                }
            },
            async addTicket() {
                try {
                    this.formData.id = this.generateUniqueId();
                    const response = await fetch('http://localhost:3000/tickets', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(this.formData)
                    });

                    if (response.ok) {
                        const newTicket = await response.json();
                        this.tickets.push(newTicket);
                        this.resetForm();
                    } else {
                        console.error('Ошибка при добавлении билета');
                    }
                } catch (error) {
                    console.error('Ошибка при добавлении билета:', error);
                }
            },
            generateUniqueId() {
            // Генерируем уникальный id на основе текущего времени и случайного числа
            const timestamp = Date.now().toString();
            const random = Math.floor(Math.random() * 1000).toString();
            return timestamp + random;
        },
            startEdit(ticket) {
                this.editing = true;
                this.formData = { ...ticket };
            },
            async updateTicket() {
                try {
                    const response = await fetch(`http://localhost:3000/tickets/${this.formData.id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(this.formData)
                    });

                    if (response.ok) {
                        const index = this.tickets.findIndex(t => t.id === this.formData.id);
                        if (index > -1) {
                            this.tickets.splice(index, 1, this.formData);
                        }
                        this.cancelEdit();
                    } else {
                        console.error('Ошибка при обновлении билета');
                    }
                } catch (error) {
                    console.error('Ошибка при обновлении билета:', error);
                }
            },
            cancelEdit() {
                this.editing = false;
                this.resetForm();
            },
            async deleteTicket(id) {
                try {
                    const response = await fetch(`http://localhost:3000/tickets/${id}`, {
                        method: 'DELETE'
                    });

                    if (response.ok) {
                        const index = this.tickets.findIndex(t => t.id === id);
                        if (index > -1) {
                            this.tickets.splice(index, 1);
                        }
                    } else {
                        console.error('Ошибка при удалении билета');
                    }
                } catch (error) {
                    console.error('Ошибка при удалении билета:', error);
                }
            },
            resetForm() {
                this.formData = {
                    id: '',
                    name: '',
                    description: '',
                    data: '',
                    count: '',
                    img: '',
                    street: '',
                    genre: '',
                    price: '',
                    map: ''
                };
            }
        }
    };
    </script>

    <style scoped>
    </style>
