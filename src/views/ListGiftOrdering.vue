<template>
  <a-layout-content >
    <a-breadcrumb style="margin-bottom: 30px;">
      <a-breadcrumb-item href="/">Главная</a-breadcrumb-item>
      <a-breadcrumb-item href="/products">Маркетинг</a-breadcrumb-item>
      <a-breadcrumb-item>Подарки при заказе</a-breadcrumb-item>
    </a-breadcrumb>
    <div style="margin-bottom: 16px; display: flex; justify-content: space-between;">
      <a-button type="primary">+ Добавить новое свойства товара</a-button>
      <a-input-search placeholder="Поиск товара`" style="max-width: 300px;" v-model="searchText" @search="onSearch" />
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
          <template v-if="column.key === 'status'">
            <a-switch :checked="record.status" @change="() => toggleStatus(record)" />
          </template>
          <template v-else-if="column.key === 'action'">
            <a-button-group>
              <a-button title="Редактировать" type="primary" @click="() => editRecord(record)">
                <HighlightOutlined />
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
import { Button, Table, Switch, Input, Checkbox } from 'ant-design-vue';
import { HighlightOutlined, DeleteOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    'a-button': Button,
    'a-button-group': Button.Group,
    'a-table': Table,
    'a-switch': Switch,
    'a-input-search': Input.Search,
    'a-checkbox': Checkbox,
    HighlightOutlined,
    DeleteOutlined,
  },
  setup() {
    const searchText = ref('');
    const columns = [
      { title: '', key: 'select' },
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'Пользователь', dataIndex: 'name', key: 'name' },
      { title: 'Статус', key: 'status' },
      { title: 'Дата создания', dataIndex: 'creation', key: 'creation' },
      { title: 'Стоимость', dataIndex: 'updates', key: 'updates' },
      { title: 'Действия', key: 'action' },
    ];

    const data = reactive([
      {
        id: '1',
        name: '	test 1',
        creation: '35₽',
        updates: 'до 2021-12-19',
        status: false,
        selected: false
      },
      {
        id: '2',
        name: 'BEITALIAN10',
        creation: '35₽',
        updates: 'до 2023-12-01',
        status: true,
        selected: false
      }

    ]);

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

    const deleteRecord = (record) => {
      console.log('Удалить', record);
    };

    const onSearch = (value) => {
      searchText.value = value;
    };

    return {
      columns,
      data,
      searchText,
      filteredData,
      toggleStatus,
      editRecord,
      deleteRecord,
      onSearch
    };
  }
});
</script>

<style scoped>
@media (max-width: 768px) {
    .ant-table {
        overflow-x: auto;
    }

    .ant-table-thead>tr>th,
    .ant-table-tbody>tr>td {
        white-space: nowrap;
    }

    .select-column,
    .id-column,
    .status-column,
    .creation-column,
    .action-column {
        display: none;
    }

    .name-column {
        display: table-cell;
    }
}
</style>