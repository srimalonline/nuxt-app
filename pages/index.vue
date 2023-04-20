<template>
    <div>
      <h1>Events</h1>
      <ul>
        <li v-for="event in events" :key="event.id">{{ event.title }}</li>
      </ul>
      <button @click="handleEventClick">Trigger Event</button>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ app }) {
      const { data } = await app.$strapi.get('/events')
      return { events: data }
    },
  
    methods: {
      handleEventClick() {
        this.$strapi.event('my-event', { message: 'Hello, world!' })
      }
    }
  }
  </script>