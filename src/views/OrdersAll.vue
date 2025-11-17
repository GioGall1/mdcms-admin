<template>
  <a-layout-content >
    <a-breadcrumb style="margin-bottom: 30px;">
      <a-breadcrumb-item href="/">Главная</a-breadcrumb-item>
      <a-breadcrumb-item href="/products">Заказы</a-breadcrumb-item>
      <a-breadcrumb-item>Все</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="table-container">
      <a-table :columns="columns" :dataSource="data" rowKey="id">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-button-group>
              <a-button type="primary" @click="editRecord(record)">
                <HighlightOutlined />
              </a-button>
              <a-button type="primary" danger @click="deleteRecord(record)">
                <DeleteOutlined />
              </a-button>
            </a-button-group>
          </template>
          <template v-else-if="column.key === 'status'">
            <a-badge :status="statusType(record.status)" :text="record.status" />
          </template>
        </template>
      </a-table>
    </div>
  </a-layout-content>
</template>

<script>
import { defineComponent } from 'vue';
import { Button, Table, Badge } from 'ant-design-vue';
import { HighlightOutlined, DeleteOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    'a-button': Button,
    'a-button-group': Button.Group,
    'a-table': Table,
    'a-badge': Badge,
    HighlightOutlined,
    DeleteOutlined
  },
  data() {
    return {
      columns: [
        {
          title: '№ заказа',
          dataIndex: 'orderNumber',
          key: 'orderNumber',
        },
        {
          title: 'Дата',
          dataIndex: 'date',
          key: 'date'
        },
        {
          title: 'ФИО',
          dataIndex: 'customer',
          key: 'customer'
        },
        {
          title: 'Телефон',
          dataIndex: 'phone',
          key: 'phone'
        },
        {
          title: 'Сумма',
          dataIndex: 'amount',
          key: 'amount'
        },
        {
          title: 'Способ оплаты',
          dataIndex: 'paymentMethod',
          key: 'paymentMethod'
        },
        {
          title: 'Способ доставки',
          dataIndex: 'deliveryMethod',
          key: 'deliveryMethod'
        },
        {
          title: 'Статус заказа',
          key: 'status'
        },
        {
          title: 'Действие',
          key: 'action'
        }
      ],
      data: [
        {
          id: '1',
          orderNumber: '1111',
          date: '2024-02-11 11:11',
          customer: 'Василий Пупкин',
          phone: '+7955555555',
          amount: 5000,
          paymentMethod: 'Картой при получении',
          deliveryMethod: 'boxberry',
          status: 'новый',

        },
        {
          id: '2',
          orderNumber: '2222',
          date: '2024-02-11 11:11',
          customer: 'Василий Пупкин',
          phone: '+7955555555',
          amount: 5000,
          paymentMethod: 'Картой при получении',
          deliveryMethod: 'boxberry',
          status: 'в процессе',

        },
        {
          id: '3',
          orderNumber: '3333',
          date: '2024-02-11 11:11',
          customer: 'Василий Пупкин',
          phone: '+7955555555',
          amount: 5000,
          paymentMethod: 'Картой при получении',
          deliveryMethod: 'boxberry',
          status: 'выполнен',

        },
        {
          id: '4',
          orderNumber: '4444',
          date: '2024-02-11 11:11',
          customer: 'Василий Пупкин',
          phone: '+7955555555',
          amount: 5000,
          paymentMethod: 'Картой при получении',
          deliveryMethod: 'boxberry',
          status: 'отменен',


        },
        {
          id: '5',
          orderNumber: '5555',
          date: '2024-02-11 11:11',
          customer: 'Василий Пупкин',
          phone: '+7955555555',
          amount: 5000,
          paymentMethod: 'Картой при получении',
          deliveryMethod: 'boxberry',
          status: 'удален',


        },
      ]
    };
  },
  methods: {
    editRecord(record) {
      console.log('Редактировать', record);
    },
    deleteRecord(record) {
      console.log('Удалить', record);
    },
    statusType(status) {
      switch (status) {
        case 'новый':
          return 'error';
        case 'в процессе':
          return 'processing';
        case 'выполнен':
          return 'success';
        case 'отменен':
          return 'default';
        case 'удален':
          return 'default';
      }
    }
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
