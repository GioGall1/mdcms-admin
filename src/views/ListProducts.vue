<template>
  <a-layout-content >
    <a-breadcrumb style="margin-bottom: 30px;">
      <a-breadcrumb-item href="/">Главная</a-breadcrumb-item>
      <a-breadcrumb-item href="/products">Товары</a-breadcrumb-item>
      <a-breadcrumb-item>Список товаров</a-breadcrumb-item>
    </a-breadcrumb>
    <div style="margin-bottom: 16px; display: flex; justify-content: space-between;">
      <a-button type="primary">+ Добавить товар</a-button>
      <a-input-search placeholder="Поиск товара" style="max-width: 300px;" v-model="searchText" @search="onSearch" />
    </div>
    <div class="table-container">
      <a-table :columns="columns" :dataSource="filteredData" rowKey="id">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'select'">
            <a-checkbox :checked="selectAll" @change="toggleSelectAll"></a-checkbox>
          </template>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'select'">
            <a-checkbox v-model="record.selected" @change="updateSelectAllState"></a-checkbox>
          </template>
          <template v-else-if="column.key === 'photo'">
            <a-avatar :src="record.photo" />
          </template>
          <template v-else-if="column.key === 'status'">
            <a-switch :checked="record.status" @change="() => toggleStatus(record)" />
          </template>
          <template v-else-if="column.key === 'action'">
            <a-button-group>
              <a-button title="Редактировать" type="primary" @click="() => editRecord(record)">
                <HighlightOutlined />
              </a-button>
              <a-button title="Открыть на сайте" type="primary" @click="() => viewRecord(record)">
                <EyeOutlined />
              </a-button>
              <a-button title="Удалить" type="primary" danger @click="() => deleteRecord(record)">
                <DeleteOutlined />
              </a-button>
            </a-button-group>
          </template>
        </template>
      </a-table>
    </div>
  </a-layout-content>
</template>

<script>
import { defineComponent, reactive, ref, computed } from 'vue';
import { Button, Table, Avatar, Switch, Input, Checkbox } from 'ant-design-vue';
import { HighlightOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    'a-button': Button,
    'a-button-group': Button.Group,
    'a-table': Table,
    'a-avatar': Avatar,
    'a-switch': Switch,
    'a-input-search': Input.Search,
    'a-checkbox': Checkbox,
    HighlightOutlined,
    DeleteOutlined,
    EyeOutlined
  },
  setup() {
    const searchText = ref('');
    const selectAll = ref(false);
    const data = reactive([
      {
        id: '1',
        article: '1241',
        photo: 'https://www.nicepng.com/png/full/126-1261957_-.png',
        name: 'Масло Сладкого Миндаля 250мл',
        stock: '0 шт',
        price: '377 руб',
        category: 'Уход за телом',
        status: true,
        selected: false
      },
      {
        id: '2',
        article: '1242',
        photo: 'https://www.nicepng.com/png/full/126-1261957_-.png',
        name: 'Бальзам для губ с Маслом Сладкого Миндаля 5,5мл',
        stock: '0 шт',
        price: '340 руб',
        category: 'Уход за лицом',
        status: false,
        selected: false
      }
    ]);

    const columns = [
      { title: '', key: 'select', width: 50, className: 'select-column' },
      { title: 'ID', dataIndex: 'id', key: 'id', width: 100, className: 'id-column' },
      { title: 'Артикул', dataIndex: 'article', key: 'article', width: 150, className: 'article-column' },
      { title: 'Фото', key: 'photo', width: 100, className: 'photo-column' },
      { title: 'Наименование', dataIndex: 'name', key: 'name', width: 200, className: 'name-column' },
      { title: 'Склад', dataIndex: 'stock', key: 'stock', width: 100, className: 'stock-column' },
      { title: 'Стоимость', dataIndex: 'price', key: 'price', width: 150, className: 'price-column' },
      { title: 'Категория', dataIndex: 'category', key: 'category', width: 150, className: 'category-column' },
      { title: 'Статус', key: 'status', width: 100, className: 'status-column' },
      { title: 'Действия', key: 'action', width: 200, className: 'action-column' }
    ];

    const filteredData = computed(() =>
      data.filter(item =>
        item.name.toLowerCase().includes(searchText.value.toLowerCase())
      )
    );

    const toggleStatus = (record) => {
      record.status = !record.status;
    };

    const editRecord = (record) => {
      console.log('Редактировать', record);
    };

    const viewRecord = (record) => {
      console.log('Просмотр', record);
    };

    const deleteRecord = (record) => {
      console.log('Удалить', record);
    };

    const onSearch = (value) => {
      searchText.value = value;
    };

    const toggleSelectAll = () => {
      selectAll.value = !selectAll.value;
      data.forEach(record => {
        record.selected = selectAll.value;
      });
    };

    const updateSelectAllState = () => {
      selectAll.value = data.every(record => record.selected);
    };

    return {
      columns,
      data,
      searchText,
      filteredData,
      toggleStatus,
      editRecord,
      viewRecord,
      deleteRecord,
      onSearch,
      selectAll,
      toggleSelectAll,
      updateSelectAllState
    };
  }
});
</script>

<style scoped>

.table-container {
  overflow-x: auto;
}

@media (max-width: 768px) {
  .ant-table {
    overflow-x: auto;
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    white-space: nowrap;
  }

  .select-column,
  .id-column,
  .article-column,
  .photo-column,
  .stock-column,
  .price-column,
  .category-column,
  .status-column,
  .action-column {
    display: none;
  }

  .name-column {
    display: table-cell;
  }
}
</style>
