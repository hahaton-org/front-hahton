<script setup lang="ts">
  import { NLayout, NLayoutContent, NLayoutHeader, NLayoutFooter, NText, NButton } from 'naive-ui'
  import { computed } from 'vue'
  import router from './Router'
  import { useRoute } from 'vue-router';

  const route = useRoute()
  const isHome = computed(() => route.path === '/');
</script>
<template>
  <NLayout>
    <NLayoutHeader class="headfoot">
      <!-- <NButton class="loginoutbtn" v-if="auth" :onClick="logout">Войти</NButton> -->
      <!-- <NButton class="loginoutbtn" v-else="auth" :onClick="login">Выйти</NButton> -->
    </NLayoutHeader>
    <NLayoutContent content-style="min-height: calc(100dvh - 3rem); padding: 1rem; min-width: 320px;">
      <RouterView />
    </NLayoutContent>
  </NLayout>
</template>
<style scoped>
.routerview {
  padding: 0 1rem;
  min-width: calc(200px + 4rem);
}

.headfoot {
  font-size: large;
  font-weight: bold;
  display: flex;
  text-wrap-mode: nowrap;
  justify-content: center;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
}

.loginoutbtn {
  margin-left: 1rem;
}
</style>
