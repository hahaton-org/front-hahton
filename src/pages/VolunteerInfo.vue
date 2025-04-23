<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ListBlock from '../components/ListBlock.vue'
import api from '../api'
import { Award } from '../classes/Award'
const fakeAwards: Award[] = [
  { id: 'sdf', name: 'Award1', date: 'ast' },
  { id: 'sdf', name: 'Award1', date: 'ast' },
  { id: 'sdf', name: 'Award1', date: 'ast' },
  { id: 'sdf', name: 'Award1', date: 'ast' },
]
const fakeBonuses: Award[] = [
  { id: 'sdf', name: 'Bonus1', date: 'ast' },
  { id: 'sdf', name: 'Bonus1', date: 'ast' },
  { id: 'sdf', name: 'Bonus1', date: 'ast' },
  { id: 'sdf', name: 'Bonus1', date: 'ast' },
]
const awards = ref<Award[]>([])
const bonuses = ref<Award[]>([])
onMounted(async () => {
  awards.value = await api.get<Award[]>('api/volonter/{guid}/awards').json()
  bonuses.value = await api.get<Award[]>('api/volonter/{guid}/bonuses').json()
})
</script>
<template>
  <NFlex>
    <ListBlock class="listBlock" :data="fakeAwards"></ListBlock>
    <ListBlock class="listBlock" :data="fakeBonuses"></ListBlock>
  </NFlex>
</template>
<style scoped>
.listBlock {
  width: 50%;
}
</style>
