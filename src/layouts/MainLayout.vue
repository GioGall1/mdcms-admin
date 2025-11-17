<template>
  <a-layout :style="{ background: theme.token.colorBgContainer }">
    <a-layout-sider class="custom-sider" :collapsed="collapsed" @collapse="handleCollapse"
      :style="{ background: theme.token.colorBgContainer, color: theme.token.colorText, position: 'fixed', left: 0, top: '0', bottom: '0', height: '100vh', zIndex: 1000, overflow: 'auto' }">
      <div class="logo">
        <a-image :width="45" :height="45" src="/assets/img/logo-sm.svg"
          :preview="false" />
        <span class="logo-text" v-show="!collapsed" :style="{ color: theme.token.colorText }">MD.CMS</span>
      </div>
      <SidebarMenu :menu="menu" :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout :style="{ marginLeft: collapsed ? '80px' : '200px' }">
      <AppHeader :collapsed="collapsed" @toggleCollapsed="toggleCollapsed" />
      <a-layout-content class="site-layout-content">
        <div class="site-layout-background" :style="{ background: theme.token.colorBgContainer, color: theme.token.colorText }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center', background: theme.token.colorBgContainer, color: theme.token.colorText }">
        2024 © MD
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent, inject } from 'vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import AppHeader from '@/components/AppHeader.vue';

export default defineComponent({
  components: {
    SidebarMenu,
    AppHeader
  },
  setup() {
    const theme = inject('theme');

    return {
      theme
    };
  },
  data() {
    return {
      collapsed: false,
      menu: [
        {
          title: 'Dashboard',
          link: '/dashboard',
          icon: 'DashboardOutlined',
          section: 'store',
          subitems: [],
        },
        {
          title: 'Заказы',
          link: '/orders-management',
          icon: 'ShopOutlined',
          section: 'store',
          subitems: [
            {
              title: 'Новые',
              link: '/orders-management/new-orders',
              count: 31,
              type: 'new'
            },
            {
              title: 'В процессе',
              link: '/orders-management/in-progress-orders',
              count: 1,
              type: 'inProgress'
            },
            {
              title: 'Выполненые',
              link: '/orders-management/completed-orders',
              count: 171,
              type: 'completed'
            },
            {
              title: 'Отмененные',
              link: '/orders-management/canceled-orders',
              count: 168,
              type: 'canceled'
            },
            {
              title: 'Удаленные',
              link: '/orders-management/delete-orders',
              count: 8,
              type: 'deleted'
            },
            {
              title: 'Все',
              link: '/orders-management/all-orders',
              count: 379,
              type: 'all'
            },
          ],
        },
        {
          title: 'Товары',
          link: '/products',
          icon: 'BarcodeOutlined',
          section: 'store',
          subitems: [
            {
              title: 'Список товаров',
              link: '/products/products-list',
            },
            {
              title: 'По категориям',
              link: '/products/categories',
              subitems: [
                {
                  title: 'Уход за лицом',
                  link: '/products/categories/face-care',
                },
                {
                  title: 'Уход за волосами',
                  link: '/products/categories/hair-care',
                },
                {
                  title: 'Уход за телом',
                  link: '/products/categories/body-care',
                },

              ],
            },
            {
              title: 'По брендам',
              link: '/products/brands',
              section: 'store',
              subitems: [
                {
                  title: 'Уход за лицом',
                  link: '/products/categories/face-care',
                },
                {
                  title: 'Уход за волосами',
                  link: '/products/categories/hair-care',
                },
                {
                  title: 'Уход за телом',
                  link: '/products/categories/body-care',
                },

              ],
            },
            {
              title: 'Добавить товар',
              link: '/products/add-product',
            },
            {
              title: 'Свойства товара',
              link: '/products/product-properties',
            },
          ],
        },
        {
          title: 'Покупатели',
          link: '/buers',
          icon: 'UserSwitchOutlined',
          section: 'store',
        },
        {
          title: 'Маркетинг',
          link: '/marketing',
          icon: 'TagOutlined',
          section: 'store',
          subitems: [
            {
              title: 'Подписки',
              link: '/marketing/marketing-subscriptions',
            },
            {
              title: 'Скидочные купоны',
              link: '/marketing/discount-coupons',
            },
            {
              title: 'Подарки при заказе',
              link: '/marketing/gift-ordering',
            },
          ],
        },
        {
          title: 'Бренды',
          link: '/brends',
          icon: 'TagsOutlined',
          section: 'store',
          subitems: [
            {
              title: 'Список брендов',
              link: '/brends/list-brends',
            },
            {
              title: 'Добавить бренд',
              link: '/brends/add-brend',
            },
          ],
        },
        {
          title: 'Категории',
          link: '/categories',
          icon: 'UnorderedListOutlined',
          section: 'store',
          subitems: [
            {
              title: 'Список категорий',
              link: '/categories/list-categories',
            },
            {
              title: 'Добавить категорию',
              link: '/categories/add-category',
            },
          ],
        },
        {
          title: 'Блог',
          link: '/blog',
          icon: 'BookOutlined',
          section: 'content',
          subitems: [
            {
              title: 'Список постов',
              link: '/blog/post-list',
            },
            {
              title: 'Добавить пост',
              link: '/blog/add-post',
            },
          ],
        },
        {
          title: 'Бегущая строка',
          link: '/ticker',
          icon: 'DoubleRightOutlined',
          section: 'content',
          subitems: [],
        },
        {
          title: 'Слайдер',
          link: '/slider',
          icon: 'FileImageOutlined',
          section: 'content',
          subitems: [],
        },
        {
          title: 'CustomBlock',
          link: '/CustomBlock',
          icon: 'AppstoreAddOutlined',
          section: 'content',
          subitems: [],
        },
        {
          title: 'Файловый менеджер',
          link: '/file-manager',
          icon: 'FolderAddOutlined',
          section: 'content',
          subitems: [],
        },
        {
          title: 'Обратная связь',
          link: '/feedback',
          icon: 'MessageOutlined',
          section: 'content',
          subitems: [],
        },
        {
          title: 'Теги',
          link: '/tags',
          icon: 'TagOutlined',
          section: 'line',
          subitems: [
            {
              title: 'Список тегов',
              link: '/tags/tags-list',
            },
            {
              title: 'Добавить тег',
              link: '/tags/add-tag',
            },
          ],
        },
        {
          title: 'Настройки',
          link: '/settings',
          icon: 'SettingOutlined',
          section: 'line',
          subitems: [],
        },
      ],
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    handleCollapse(collapsed) {
      this.collapsed = collapsed;
    },
  }
});
</script>

<style scoped>
.logo {
  height: 32px;
  margin: 9px;
}

.logo-text {
  font-size: 17px;
  font-weight: bold;
}

.custom-header {
  background: #fff;
  padding: 0;
}

.custom-sider {
  overflow: auto;
}

.site-layout {
  margin-left: 200px;
}

.site-layout-background {
  padding: 24px;
  min-height: 360px;
}

.site-layout-content {
  margin: 64px 16px 0;
  padding: 24px;
  overflow: initial;
}
</style>
