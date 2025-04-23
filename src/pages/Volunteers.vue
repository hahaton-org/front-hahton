<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '../api'
import PartnerCard from '../components/PartnerCard.vue'
import { guid } from '../oidc'
import { Partner } from '../classes/Partner'
import { NList, NListItem } from 'naive-ui'
import router from '../Router'
const partners = ref<Partner[]>([])
const fakePartners: Partner[] = [
  { id: 'asdsd', nameOrganization: 'Organization1', type: 'Cafe', listBonus: [] },
  { id: 'asdsd', nameOrganization: 'Organization1', type: 'Cafe', listBonus: [] },
  { id: 'asdsd', nameOrganization: 'Organization1', type: 'Cafe', listBonus: [] },
  { id: 'asdsd', nameOrganization: 'Organization1', type: 'Cafe', listBonus: [] },
  { id: 'asdsd', nameOrganization: 'Organization1', type: 'Cafe', listBonus: [] },
  { id: 'asdsd', nameOrganization: 'Organization1', type: 'Cafe', listBonus: [] },
  { id: 'asdsd', nameOrganization: 'Organization1', type: 'Cafe', listBonus: [] },
]
onMounted(async () => {
  partners.value = await api.get('api/volonter/' + (await guid()) + '/partners').json()
})
const click = (id: string) => router.replace('partnerinfo/' + id)
</script>
<template>
  <NList class="carduser" hoverable clickable>
    <template #header>
      <NText class="cardtitle" type="info">Список организаций</NText>
    </template>
    <NListItem v-for="partner of fakePartners" @click="click(partner.id)"
      ><PartnerCard :partner="partner"
    /></NListItem>
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
