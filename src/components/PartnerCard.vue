<script setup lang="ts">
  import { NAvatar, NText, NFlex} from 'naive-ui'
  import { Partner } from '../classes/Partner'
  const props = defineProps<{
    partner: Partner
  }>();
</script>
<template>
  <NFlex>
    <NAvatar round lazy :size="64" src="https://avatar.iran.liara.run/public" />
    <NText>{{ partner.name }}</NText>
  </NFlex>
</template>
<style scoped>
</style>
