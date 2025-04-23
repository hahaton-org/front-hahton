<script setup lang="ts">
import { NAvatar, NText, NFlex } from 'naive-ui'
import { Volonter } from '../classes/Volonter'
const props = defineProps<{
  volonter: Volonter
}>()
</script>
<template>
  <NFlex>
    <NAvatar round lazy :size="64" src="https://avatar.iran.liara.run/public" />
    <NText>{{ volonter.lastName }} {{ volonter.firstName }} {{ volonter.middleName }}</NText>
  </NFlex>
</template>
<style scoped></style>
