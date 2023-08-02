<template>
  <div class="grid">
    <div class="ticket" v-for="item in displayedTickets" @click="handleClick(item)"
      :class="{ hidden: (greeting && item.data !== greeting) || isDatePassed(item.data) }" :key="item.id"
      :style="{ 'background-image': `url(${require('@/assets/img/imgTicket/' + item.img)})` }">
      <h2 v-if="!greeting || item.data == greeting">{{ item.name }} {{ item.price }}Тг</h2>
    </div>


  </div>
  <div class="pagination">
    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
  <TicketModal :isVisible="showModal" :modalData="selectedItem" @close="handleClose"/>
</template>

<script>
// import axios from 'axios';
import ticketsData from "@/data/Ticket.json"
import TicketModal from "@/components/TicketModal.vue"
export default {
  components: {
    TicketModal
  },
  data() {
    return {
      tickets: [],
      showModal: false,
      selectedItem: null,
      currentPage: 1, 
      itemsPerPage: 9 
    };
  },
  props: ['greeting'],
  created() {
  },
  mounted() {
    this.fetchTickets();
  },
  methods: {
    fetchTickets() {
      this.tickets = ticketsData;
      console.log(this.tickets.length)
    },
    handleClick(item) {
    this.selectedItem = item;
    this.showModal = true;
  },
    handleClose(value) {
      this.showModal = value;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    isDatePassed(date) {
      const ArrayDate = date.split(",")
      let temp = ArrayDate[0];
      ArrayDate[0] = ArrayDate[1];
      ArrayDate[1] = temp;
      const reformattedDate = ArrayDate.join(",")
      const currentDate = new Date();
      const itemDate = new Date(reformattedDate);
      return itemDate < currentDate;
    },

  },
  computed: {
    totalPages() {
      return Math.ceil(this.tickets.length / this.itemsPerPage);
    },
    displayedTickets() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.tickets.slice(startIndex, endIndex);
    }
  },


};


</script>


<style scoped>
.grid {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
  gap: 50px;
  justify-content: center;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.ticket {
  display: flex;
  /* width: 100px; */
  height: 350px;
  background-size: 450px 350px;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.3s ease;
}

h2 {
  color: white;

}

.ticket:hover {
  background-size: 550px 420px;
  background-position: -50px 0;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px;
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

.hidden {
  display: none;
}
@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));
  }
}

.ticket {
  display: flex;
  width: 100%;
  height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.3s ease;
}

h2 {
  color: white;
}

.ticket:hover {
  background-size: 110%;
  background-position: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px;
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

.hidden {
  display: none;
}
</style>
