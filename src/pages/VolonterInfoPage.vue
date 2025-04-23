<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ListBlock from '../components/ListBlock.vue'
import api from '../api'
import { Award } from '../classes/Award'
const awards: Award[] = [
  {
    id: 'sdf',
    name: 'asd',
    date: 'ast',
  },
]
const bonuses = ref<Award[]>([])
onMounted(async () => {
  // awards.value = await api.get<Award[]>('api/volonter/{guid}/awards').json();
  bonuses.value = await api.get<Award[]>('api/volonter/{guid}/bonuses').json()
})
</script>
<template>
  <ListBlock :data="awards"></ListBlock>
  <ListBlock :data="bonuses"></ListBlock>
</template>
<style scoped></style>
