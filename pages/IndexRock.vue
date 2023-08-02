<template>
  <div class="main">
    <HeaderRock />
    <AboutNav />
    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11629.88933127969!2d76.8931061!3d43.2205557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368e717da5439%3A0x4865537ead7da251!2z0JbQtdGB0YLRjA!5e0!3m2!1sru!2skz!4v1687814387811!5m2!1sru!2skz" width="600" height="450" ></iframe> -->
    <SliderRock />
    <CalendarRock @greetingFromCalendar="handleGreetingFromCalendar"/>
    <TicketsRock :greeting="greeting" />
    <FooterRock />

  </div>
</template>

<script>
import AboutNav from "@/components/AboutNav.vue";
import HeaderRock from "@/components/HeaderRock.vue"
import SliderRock from '@/components/SliderRock.vue'
import CalendarRock from "@/components/CalendarRock.vue";
import TicketsRock from "@/components/TicketsRock.vue"
import FooterRock from "@/components/FooterRock.vue";
export default {
  name: 'IndexRock',
  components: {
    HeaderRock,
    AboutNav,
    SliderRock,
    CalendarRock,
    TicketsRock,
    FooterRock
  },
  data() {
    return {
      greeting: ''
    }
  },
  methods: {
    handleGreetingFromCalendar(greetings) {
      this.greeting = greetings;
    }
  },
}
</script>

<style scoped></style>
