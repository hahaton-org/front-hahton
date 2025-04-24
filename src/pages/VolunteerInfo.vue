<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NFlex, NDataTable } from 'naive-ui'
import api from '../api'
import { Bonus } from '../classes/Bonus'
import { useRoute } from 'vue-router'
const vbonuses = ref<Bonus[]>(null);
const vachievements = ref<Bonus[]>(null);
const route = useRoute();
const volunteerId = route.params.id;
onMounted(async () => {
  vbonuses.value = await api.get<Bonus[]>(`api/volunteers/${volunteerId}/bonuses`).json();
  vachievements.value = await api.get<Bonus[]>(`api/volunteers/achievement?volunteerId=${volunteerId}`).json();
  // bonuses.value = await api.get<Bonus[]>(`api/partner/bonuses?category=${vbonus.value.category}`).json()
});

const acolumns = [
  {
    title: 'Категория волонтера',
    key: 'category'
  },
  {
    title: 'Дата получения',
    key: 'createdAt',
  },
  {
    title: 'Описание достижения',
    key: 'createdAt',
  },
];

const bcolumns = [
  {
    title: 'Название организации',
    key: 'partnerName',
  },
  {
    title: 'Тип организации',
    key: 'partnerType',
  },
  {
    title: 'Категория бонуса',
    key: 'category'
  },
  {
    title: 'Описание бонуса',
    key: 'description',
  },
];

</script>
<template>
  <NFlex>
    <NDataTable :columns="acolumns" :data="vachievements"> </NDataTable>
    <NDataTable :columns="bcolumns" :data="vbonuses"> </NDataTable>
  </NFlex>
</template>
<style scoped>
</style>
