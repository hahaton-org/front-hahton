<template>
  <footer class="footer">
    <div class="container">
      <n-grid cols="1 s:2 m:4" x-gap="24" y-gap="24" responsive="screen">
        <n-grid-item>
          <div class="footer-column">
            <h3>Волонтерские Бонусы</h3>
            <p style="margin-bottom: 16px">
              Платформа для поощрения лучших волонтеров Донецкого региона.
            </p>
            <n-space>
              <n-button circle size="large">
                <template #icon>
                  <n-icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="currentColor"
                        d="M15.07,2H8.93C6.27,2 4.13,4.13 4.13,6.79V17.21C4.13,19.87 6.27,22 8.93,22H15.07C17.73,22 19.87,19.87 19.87,17.21V6.79C19.87,4.13 17.73,2 15.07,2M10.45,17.18C9.45,17.18 8.65,16.38 8.65,15.38C8.65,14.38 9.45,13.58 10.45,13.58C11.45,13.58 12.25,14.38 12.25,15.38C12.25,16.38 11.45,17.18 10.45,17.18M15.55,17.18C14.55,17.18 13.75,16.38 13.75,15.38C13.75,14.38 14.55,13.58 15.55,13.58C16.55,13.58 17.35,14.38 17.35,15.38C17.35,16.38 16.55,17.18 15.55,17.18M16.35,10.73H7.65V6.79C7.65,5.69 8.54,4.8 9.64,4.8H14.36C15.46,4.8 16.35,5.69 16.35,6.79V10.73Z"
                      />
                    </svg>
                  </n-icon>
                </template>
              </n-button>
              <n-button circle size="large">
                <template #icon>
                  <n-icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M8.43,14.44L7.07,13.83C7.35,13.27 7.5,12.66 7.5,12.03C7.5,11.4 7.35,10.78 7.07,10.22L8.43,9.61C8.81,10.38 9,11.19 9,12.03C9,12.87 8.81,13.68 8.43,14.44M11.53,15.94L10.22,15.29C10.74,14.16 11,12.91 11,11.62C11,10.33 10.74,9.08 10.22,7.96L11.53,7.29C12.13,8.59 12.43,10 12.43,11.62C12.43,13.24 12.13,14.65 11.53,15.94M14.57,14.44C14.19,13.68 14,12.87 14,12.03C14,11.19 14.19,10.38 14.57,9.61L15.93,10.22C15.65,10.78 15.5,11.4 15.5,12.03C15.5,12.66 15.65,13.27 15.93,13.83L14.57,14.44M12.47,15.94C11.87,14.65 11.57,13.24 11.57,11.62C11.57,10 11.87,8.59 12.47,7.29L13.78,7.96C13.26,9.08 13,10.33 13,11.62C13,12.91 13.26,14.16 13.78,15.29L12.47,15.94Z"
                      />
                    </svg>
                  </n-icon>
                </template>
              </n-button>
              <n-button circle size="large">
                <template #icon>
                  <n-icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                      />
                    </svg>
                  </n-icon>
                </template>
              </n-button>
            </n-space>
          </div>
        </n-grid-item>

        <n-grid-item>
          <div class="footer-column">
            <h3>Для волонтеров</h3>
            <n-space vertical>
              <n-button text type="tertiary" block style="justify-content: flex-start"
                >Как это работает</n-button
              >
              <n-button text type="tertiary" block style="justify-content: flex-start"
                >Доступные бонусы</n-button
              >
              <n-button text type="tertiary" block style="justify-content: flex-start"
                >Частые вопросы</n-button
              >
              <n-button text type="tertiary" block style="justify-content: flex-start"
                >История операций</n-button
              >
            </n-space>
          </div>
        </n-grid-item>

        <n-grid-item>
          <div class="footer-column">
            <h3>Для партнеров</h3>
            <n-space vertical>
              <n-button text type="tertiary" block style="justify-content: flex-start"
                >Присоединиться</n-button
              >
              <n-button text type="tertiary" block style="justify-content: flex-start"
                >Настройка бонусов</n-button
              >
              <n-button text type="tertiary" block style="justify-content: flex-start"
                >Отчеты</n-button
              >
              <n-button text type="tertiary" block style="justify-content: flex-start"
                >Рекомендации</n-button
              >
            </n-space>
          </div>
        </n-grid-item>

        <n-grid-item>
          <div class="footer-column">
            <h3>Контакты</h3>
            <n-space vertical>
              <n-button text type="tertiary" block style="justify-content: flex-start">
                <template #icon>
                  <n-icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        fill="currentColor"
                        d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                      />
                    </svg>
                  </n-icon>
                </template>
                г. Донецк, ул. Артема, 58
              </n-button>
              <n-button text type="tertiary" block style="justify-content: flex-start">
                <template #icon>
                  <n-icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        fill="currentColor"
                        d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                      />
                    </svg>
                  </n-icon>
                </template>
                +7 (949) 123-45-67
              </n-button>
              <n-button text type="tertiary" block style="justify-content: flex-start">
                <template #icon>
                  <n-icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        fill="currentColor"
                        d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                      />
                    </svg>
                  </n-icon>
                </template>
                info@volbonus.ru
              </n-button>
            </n-space>
          </div>
        </n-grid-item>
      </n-grid>

      <n-divider />

      <div class="copyright">
        <p>© 2023 Волонтерские Бонусы. Все права защищены.</p>
        <n-space justify="center">
          <n-button text type="tertiary" size="tiny">Политика конфиденциальности</n-button>
          <n-button text type="tertiary" size="tiny">Пользовательское соглашение</n-button>
        </n-space>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { NGrid, NGridItem, NButton, NIcon, NSpace, NDivider } from 'naive-ui'
</script>

<style scoped>
.footer {
  background-color: var(--dark-gray);
  color: var(--white);
  padding: 60px 0 20px;
}

.footer-column h3 {
  color: var(--white);
  margin-bottom: 20px;
  font-size: 18px;
}

.copyright {
  text-align: center;
  padding-top: 20px;
  color: #aaa;
  font-size: 14px;
}

.copyright p {
  margin-bottom: 12px;
}
</style>
