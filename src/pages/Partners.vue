<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import api from '../api';
  import VolonterCard from '../components/VolonterCard.vue';
  import { Volunteer } from '../classes/Volunteer';
  import router from '../Router';
  import { NList, NListItem } from 'naive-ui'
  const volonters = ref<Volunteer[]>([]);
  const fakeVolonters: Volunteer[] = [
    {id:"asdsd", firstName:"asdg", lastName:"sdfghg", middleName:"sdfg" },
    {id:"asdsd", firstName:"asdg", lastName:"sdfghg", middleName:"sdfg" },
    {id:"asdsd", firstName:"asdg", lastName:"sdfghg", middleName:"sdfg" },
    {id:"asdsd", firstName:"asdg", lastName:"sdfghg", middleName:"sdfg" },
  ];
  onMounted(async () => {
    volonters.value = await api.get('api/volonter').json();
  });
  const click = (id: string) => router.replace('volonterinfo/' + id);
</script>
<template>
  <NList class="carduser" hoverable clickable>
    <template #header>
      <NText class="cardtitle" type="info">Список волонтеров</NText>
    </template>
    <NListItem v-for="volonter of fakeVolonters" @click="click(volonter.id)"><VolonterCard :volonter="volonter" /></NListItem>
  </NList>
</template>
<style scoped>
  .cardtitle {
    font-size: large;
    font-weight: bold;
  }
  .carduser{
    border-radius: 0.5rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.09);
    padding: 1rem;
    min-width: 16rem;
  }
</style>
