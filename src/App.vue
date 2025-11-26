<template>
  <ConfigProvider :theme="computedTheme">
    <div
      id="app"
      :class="{ dark: isDarkTheme }"
      :style="{
        background: computedTheme.token.colorBgContainer,
        color: computedTheme.token.colorText,
        minHeight: '100vh'
      }"
    >
      <router-view />
    </div>
  </ConfigProvider>
</template>

<script>
import { ConfigProvider } from 'ant-design-vue';
import { ref, computed, provide, watchEffect } from 'vue';

export default {
  name: 'App',
  components: {
    ConfigProvider
  },
  setup() {
    const darkTheme = ref(false);
    const isDarkTheme = computed(() => darkTheme.value);

    const themes = {
      light: {
        token: {
          colorPrimary: '#7775ff',
          colorBgContainer: '#ffffff',
          colorText: '#000000',
          colorBgHeader: '#ffffff',
        },
      },
      dark: {
        token: {
          colorPrimary: '#7775ff',
          colorBgContainer: '#0f0f0f',
          colorText: '#ffffff',
          colorBgHeader: '#1d1d1d',
        },
      }
    };

    const computedTheme = computed(() => (darkTheme.value ? themes.dark : themes.light));

    const toggleTheme = () => {
      darkTheme.value = !darkTheme.value;
    };

    watchEffect(() => {
      const isDark = darkTheme.value;
      const bg = computedTheme.value.token.colorBgContainer;
      const textColor = computedTheme.value.token.colorText;

      document.documentElement.classList.toggle('dark', isDark);
      document.body.classList.toggle('dark', isDark);
      document.documentElement.style.backgroundColor = bg;
      document.body.style.backgroundColor = bg;
      document.body.style.color = textColor;
    });

    provide('theme', computedTheme);
    provide('toggleTheme', toggleTheme);
    provide('isDarkTheme', isDarkTheme);

    return {
      computedTheme,
      toggleTheme,
      isDarkTheme
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
