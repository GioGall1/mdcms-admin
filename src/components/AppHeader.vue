<template>
  <a-layout-header class="custom-header" :style="{
    width: collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)',
    left: collapsed ? '80px' : '200px',
    background: theme.token.colorBgHeader,
    color: theme.token.colorText,
  }">
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center;">
        <a-button type="primary" @click="$emit('toggleCollapsed')" style="margin-left: 16px">
          <template v-if="collapsed">
            <MenuUnfoldOutlined />
          </template>
          <template v-else>
            <MenuFoldOutlined />
          </template>
        </a-button>
        <a-input-search placeholder="Поиск" class="custom-input" />
      </div>
      <div style="display: flex; align-items: center;">
        <a-button @click="toggleTheme" style="margin-right: 16px">
          <template v-if="isDarkTheme">Light Theme</template>
          <template v-else>Dark Theme</template>
        </a-button>
        <a-menu mode="horizontal" :style="{ background: theme.token.colorBgHeader, color: theme.token.colorText }">
          <a-menu-item>
            <router-link to="/profile">Profile</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/logout">Logout</router-link>
          </a-menu-item>
        </a-menu>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { inject } from 'vue';

export default {
  name: 'AppHeader',
  props: {
    collapsed: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const theme = inject('theme');
    const toggleTheme = inject('toggleTheme');

    return {
      theme,
      toggleTheme
    };
  },
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  }
};
</script>

<style scoped>
.custom-header {
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 0;
}

.custom-input {
  margin-left: 16px;
  max-width: 300px;
}
</style>
