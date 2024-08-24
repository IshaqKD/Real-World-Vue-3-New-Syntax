<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue';

const events = ref([
  {
    id: 112,
    title: 'Cat Adoption Date',
    time: '12:00',
    date: 'march 12, 2021',
  },
  {
    id: 113,
    title: 'Cat Adoption Date',
    time: '12:00',
    date: 'march 12, 2021',
  },
  {
    id: 114,
    title: 'Cat Adoption Date',
    time: '12:00',
    date: 'march 12, 2021',
  },
])
</script>

<template>
  <h1>Events For Learning</h1>
  <div class="events">
    <EventCard v-for="event in events" :event="event" :key="event.id"></EventCard>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
