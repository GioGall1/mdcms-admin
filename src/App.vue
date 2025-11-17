<template>
  <ConfigProvider :theme="computedTheme">
    <div id="app">
      <router-view />
    </div>
  </ConfigProvider>
</template>

<script>
import { ConfigProvider } from 'ant-design-vue';
import { ref, computed, provide } from 'vue';

export default {
  name: 'App',
  components: {
    ConfigProvider
  },
  setup() {
    const darkTheme = ref(false);

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
          colorBgContainer: '#000000',
          colorText: '#ffffff',
          colorBgHeader: '#1d1d1d',
        },
      }
    };

    const computedTheme = computed(() => (darkTheme.value ? themes.dark : themes.light));

    const toggleTheme = () => {
      darkTheme.value = !darkTheme.value;
    };

    provide('theme', computedTheme);
    provide('toggleTheme', toggleTheme);

    return {
      computedTheme,
      toggleTheme
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
