<template>
  <a-layout-content class="custom-layout">
    <a-breadcrumb style="margin-bottom: 30px;">
      <a-breadcrumb-item href="/">Главная</a-breadcrumb-item>
    </a-breadcrumb>
    <a-row gutter="16">
      <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <a-card title="Users" :bordered="false">
          <a-statistic :value="1128">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <a-card title="Orders" :bordered="false">
          <a-statistic :value="93">
            <template #prefix>
              <ShoppingCartOutlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <a-card title="Revenue" :bordered="false">
          <a-statistic :value="112893">
            <template #prefix>
              <DollarOutlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <a-card title="Visits" :bordered="false">
          <a-statistic :value="2023">
            <template #prefix>
              <EyeOutlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
    <a-row gutter="16" style="margin-top: 24px;">
      <a-col :xs="24" :md="12">
        <a-card title="Сумма заказов по месяцам" :bordered="false">
          <OrderChart />
        </a-card>
      </a-col>
      <a-col :xs="24" :md="12">
        <a-card title="Общая информация" class="info-card">
          <a-list item-layout="horizontal" :dataSource="data" :renderItem="renderItem">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta :title="item.title" />
                <div class="item-meta-bold">{{ item.value }}</div>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
import { UserOutlined, ShoppingCartOutlined, DollarOutlined, EyeOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import OrderChart from '@/components/OrderChart.vue';

export default defineComponent({
  name: 'DashboardView',
  components: {
    OrderChart,
    UserOutlined,
    ShoppingCartOutlined,
    DollarOutlined,
    EyeOutlined,
  },
  data() {
    return {
      data: [
        { title: 'Доход за текущий месяц', value: '0 руб' },
        { title: 'Кол-во товаров, всего', value: '273' },
        { title: 'Кол-во товаров со скидкой', value: '157' },
        { title: 'Кол-во товаров со скидкой, доступных к покупке', value: '120' },
        { title: 'Активных товаров', value: '207' },
        { title: 'Доступных к покупке товаров', value: '207' },
        { title: 'Всего тегов', value: '20' },
        { title: 'Активных тегов', value: '20' },
        { title: 'Всего записей в блоге', value: '7' },
      ],
    };
  },
});
</script>

<style scoped>
.info-card {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.item-meta-bold {
  width: 50px;
  background: #d5d1d17a;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .info-card {
    max-width: 100%;
  }

  .ant-card-body {
    padding: 12px;
  }

  .ant-statistic-title {
    font-size: 14px;
  }

  .ant-statistic-content-value {
    font-size: 20px;
  }

  .ant-statistic .anticon {
    font-size: 16px;
    margin-right: 8px;
  }
}
</style>
