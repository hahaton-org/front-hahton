import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
  NConfigProvider,
  NMessageProvider,
  NButton,
  NCard,
  NTag,
  NGrid,
  NGridItem,
  NStatistic,
  NAvatar,
  NIcon,
  NDivider,
  NSpace,
  NImage,
  NCarousel,
} from 'naive-ui'

const app = createApp(App)

// Глобальные компоненты Naive UI
app.component('NConfigProvider', NConfigProvider)
app.component('NMessageProvider', NMessageProvider)
app.component('NButton', NButton)
app.component('NCard', NCard)
app.component('NTag', NTag)
app.component('NGrid', NGrid)
app.component('NGridItem', NGridItem)
app.component('NStatistic', NStatistic)
app.component('NAvatar', NAvatar)
app.component('NIcon', NIcon)
app.component('NDivider', NDivider)
app.component('NSpace', NSpace)
app.component('NImage', NImage)
app.component('NCarousel', NCarousel)

app.use(router)
app.mount('#app')
