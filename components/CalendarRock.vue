<template>
  <div>
    <div class="calendar">
      <div class="header">
        <button @click="changeMonth(-1)">&lt;</button>
        <h2>{{ currentMonth.toLocaleString('ru-RU', { month: 'long', year: 'numeric' }) }}</h2>
        <button @click="changeMonth(1)">&gt;</button>
      </div>
      <div class="days">
        <div v-for="day in days" :key="day" class="day" :class="{ selected: isSelected(day) }" @click="selectDay(day); sendGreeting(`${this.date}`);">
          {{ day }}
        </div>
      </div>
      <button style="margin-top: 20px" @click="sendGreeting(null);">Сбросить</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentMonth: new Date(),
      selectedDays: [],
      date: "",
    };
  },
  mounted() {
    this.setCurrentMonth();
  },
  computed: {
    days() {
      const year = this.currentMonth.getFullYear();
      const month = this.currentMonth.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      return Array.from({ length: daysInMonth }, (_, index) => index + 1);
    },
  },
  methods: {
    setCurrentMonth() {
      this.currentMonth = new Date();
    },
    sendGreeting(data) {
      this.$emit('greetingFromCalendar', data);
    },
    changeMonth(offset) {
      const year = this.currentMonth.getFullYear();
      const month = this.currentMonth.getMonth();
      this.currentMonth = new Date(year, month + offset, 1);
    },
    isSelected(day) {
      return this.selectedDays.includes(day);
    },
    selectDay(day) {
      if (this.selectedDays.includes(day)) {
        this.selectedDays = this.selectedDays.filter(d => d !== day);
      } else {
        this.selectedDays.push(day);
      }

      const selectedDate = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), day);
      const selectedDay = selectedDate.getDate();
      const selectedMonth = selectedDate.getMonth() + 1;
      const selectedYear = selectedDate.getFullYear();

     this.date = `${selectedDay}, ${selectedMonth}, ${selectedYear}`;
    },
  },
};
</script>
  
<style scoped>
.calendar {
  background-color: black;
  color: rgb(255, 145, 0);
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.days {
  display: flex;
  gap: 10px;
}

.day {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  background-color: rgb(255, 145, 0);
  color: black;
  cursor: pointer;
}

.day:active {
  background-color: rgb(181, 102, 0);
}
.day:hover {
  background-color: rgb(255, 154, 23);
  transform: translateY(-5px);
  box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.486);
  transition: 0.3s;
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

button:active {
  background-color: rgb(181, 102, 0);
}

button:hover {
  background-color: rgb(255, 154, 23);
  transform: translateY(-5px);
  box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.486);
  transition: 0.3s;
}


@media (max-width: 769px) {
  .days {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
  