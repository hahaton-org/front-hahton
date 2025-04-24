<script setup lang="ts">
import { NAvatar, NText, NFlex } from 'naive-ui'
import { Volunteer } from '../classes/Volunteer'
import { Achievement } from '../classes/Achievement';
const props = defineProps<{
  volunteer: Volunteer
  // achievement: Achievement
}>()
</script>
<template>
  <NFlex>
    <NAvatar round lazy :size="64" src="https://avatar.iran.liara.run/public" />
    <NText>{{ volunteer.lastName }} {{ volunteer.firstName }} {{ volunteer.middleName }}</NText>
    <!-- <NText>{{ achievement.description }} </NText> -->
  </NFlex>
</template>
<style scoped>
</style>
