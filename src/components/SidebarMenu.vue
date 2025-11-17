<template>
  <a-menu :mode="'inline'" :default-selected-keys="['/dashboard']" :default-open-keys="openKeys" class="custom-menu">
    <template v-for="section in sections" :key="section.title">
      <template v-if="section.title">
        <div v-if="!collapsed" class="menu-section-title">{{ section.title }}</div>
      </template>
      <template v-for="item in section.items" :key="item.link">
        <a-sub-menu v-if="item.subitems && item.subitems.length" :key="`sub_${item.link}`" :popupClassName="collapsed ? 'ant-menu-popup-collapsed' : ''">
          <template #title>
            <span class="menu-item-content" :class="{ collapsed }">
              <component :is="item.icon" />
              <span v-if="!collapsed">{{ item.title }}</span>
            </span>
          </template>
          <template v-for="subitem in item.subitems" :key="subitem.link">
            <a-sub-menu v-if="subitem.subitems && subitem.subitems.length" :key="`sub_${subitem.link}`">
              <template #title>
                <span class="menu-item-content">
                  <component :is="subitem.icon" />
                  <span>{{ subitem.title }}</span>
                </span>
              </template>
              <a-menu-item v-for="subsubitem in subitem.subitems" :key="subsubitem.link">
                <router-link :to="subsubitem.link" class="menu-item-content">
                  <span class="tooltip-container">
                    <span>{{ subsubitem.title }}</span>
                  </span>
                </router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else :key="subitem.link">
              <router-link :to="subitem.link" class="menu-item-content">
                <span class="tooltip-container">
                  <component :is="subitem.icon" />
                  <span v-if="!collapsed">{{ subitem.title }}</span>
                  <span v-if="collapsed" class="tooltip-text">{{ subitem.title }}</span>
                  <span class="menu-badge" :class="badgeClass(subitem.type)">{{ subitem.count }}</span>
                </span>
              </router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
        <a-menu-item v-else :key="`item_${item.link}`">
          <router-link :to="item.link" class="menu-item-content">
            <span class="tooltip-container">
              <component :is="item.icon" />
              <span v-if="!collapsed">{{ item.title }}</span>
              <span v-if="collapsed" class="tooltip-text">{{ item.title }}</span>
            </span>
          </router-link>
        </a-menu-item>
      </template>
      <hr class="menu-divider" />
    </template>
  </a-menu>
</template>

<script>
import { defineComponent, ref, computed, watch } from 'vue';
import { DashboardOutlined, ShopOutlined, UserOutlined, SettingOutlined, FileOutlined, BarcodeOutlined, AppstoreOutlined, TrademarkOutlined, PlusOutlined, UserSwitchOutlined, TagOutlined, TagsOutlined, UnorderedListOutlined, BookOutlined, DoubleRightOutlined, FileImageOutlined, AppstoreAddOutlined, FolderAddOutlined, MessageOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'SidebarMenu',
  props: {
    menu: {
      type: Array,
      required: true,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DashboardOutlined,
    ShopOutlined,
    UserOutlined,
    SettingOutlined,
    FileOutlined,
    BarcodeOutlined,
    AppstoreOutlined,
    TrademarkOutlined,
    PlusOutlined,
    UserSwitchOutlined,
    TagOutlined,
    TagsOutlined,
    UnorderedListOutlined,
    BookOutlined,
    DoubleRightOutlined,
    FileImageOutlined,
    AppstoreAddOutlined,
    FolderAddOutlined,
    MessageOutlined,
  },
  setup(props) {
    const openKeys = ref([]);
    const sections = computed(() => [
      {
        title: 'Магазин',
        items: props.menu.filter(item => item.section === 'store')
      },
      {
        title: 'Контент',
        items: props.menu.filter(item => item.section === 'content')
      },
      {
        title: '',
        items: props.menu.filter(item => item.section === 'line')
      },
    ]);

    const badgeClass = (type) => {
      switch (type) {
        case 'new':
          return 'badge-new';
        case 'inProgress':
          return 'badge-inProgress';
        case 'completed':
          return 'badge-completed';
        case 'canceled':
          return 'badge-canceled';
        case 'deleted':
          return 'badge-deleted';
        default:
          return 'badge-default';
      }
    };

    watch(() => props.menu, (newMenu) => {
      if (newMenu) {
        openKeys.value = newMenu.filter(item => item.subitems && item.subitems.length).map(item => item.link);
      }
    }, { immediate: true });

    return {
      openKeys,
      sections,
      badgeClass,
    };
  }
});
</script>

<style scoped>
.custom-menu {
  height: 100%;
  border-right: 0;
}

.menu-item-content {
  display: flex;
  align-items: center;
  position: relative;
}

.menu-item-content .anticon {
  margin-right: 8px;
}

.tooltip-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.menu-badge {
  margin-left: auto;
  padding: 0px 5px;
  border-radius: 16px;
  font-size: 10px;
  line-height: 20px;
}

.badge-new {
  background-color: #ff4d4f94;
  color: #ff1616;
}

.badge-inProgress {
  background-color: #1890ff78;
  color: #000;
}

.badge-completed {
  background-color: #52c41a7a;
  color: #000;
}

.badge-canceled {
  background-color: #d9d9d994;
  color: #000;
}

.badge-deleted {
  background-color: #d9d9d994;
  color: #000;
}

.badge-default {
  background-color: #d9d9d994;
  color: #000;
}

.menu-section-title {
  font-size: 10px;
  font-weight: bold;
  padding: 12px 16px;
  color: #8c8c8c;
  text-transform: uppercase;
  margin-right: 100px;
  margin-top: 15px;
}
.menu-divider {
  border: 0;
  border-top: 2px solid #f0f0f0;
  margin: 12px 0;
}

:deep(.ant-menu-item), 
:deep(.ant-menu-item-only-child), 
:deep(.ant-menu-submenu-title) {
  padding-left: 20px !important; 
}
</style>
