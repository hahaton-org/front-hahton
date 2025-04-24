<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '../api'
import VolunteerCard from '../components/VolunteerCard.vue'
import { Volunteer } from '../classes/Volunteer'
import router from '../Router'
import { NList, NListItem, NText } from 'naive-ui'
const volunteers = ref<Volunteer[]>([])
onMounted(async () => {
  volunteers.value = await api.get('api/volunteers').json()
})
const click = (id: string) => router.replace(`volunteer/${id}`);
</script>
<template>
  <NList class="carduser" hoverable clickable>
    <template #header>
      <NText class="cardtitle" type="info">Список волонтеров</NText>
    </template>
    <NListItem v-for="volunteer of volunteers" @click="click(volunteer.id)">
      <VolunteerCard :volunteer="volunteer" />
    </NListItem>
  </NList>
</template>
<style scoped>
.cardtitle {
  font-size: large;
  font-weight: bold;
}

.carduser {
  border-radius: 0.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.09);
  padding: 1rem;
  min-width: 16rem;
}
</style>
