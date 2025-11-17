<template>
    <a-layout-content >
        <a-breadcrumb style="margin-bottom: 30px;">
            <a-breadcrumb-item href="/">Главная</a-breadcrumb-item>
            <a-breadcrumb-item href="/blog">Блог</a-breadcrumb-item>
            <a-breadcrumb-item>Список постов</a-breadcrumb-item>
        </a-breadcrumb>
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between;">
            <a-button type="primary">+ Добавить категорию</a-button>
            <a-input-search placeholder="Поиск" style="max-width: 300px;" v-model="searchText" @search="onSearch" />
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
                        <div class="action-column">
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
                        </div>
                    </template>
                </template>
            </a-table>
        </div>
    </a-layout-content>
</template>

<script>
import { defineComponent, reactive, ref, computed } from 'vue';
import { Button, Table, Switch, Input, Checkbox } from 'ant-design-vue';
import { HighlightOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons-vue';

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
        EyeOutlined
    },
    setup() {
        const searchText = ref('');
        const selectAll = ref(false);
        const columns = [
            { title: '', key: 'select', width: 50, className: 'select-column' },
            { title: 'ID', dataIndex: 'id', key: 'id', width: 100, className: 'id-column' },
            { title: 'Название', dataIndex: 'name', key: 'name', width: 200, className: 'name-column' },
            { title: 'Статус', key: 'status', width: 100, className: 'status-column' },
            { title: 'Дата создания', dataIndex: 'creation', key: 'creation', width: 150, className: 'creation-column' },
            { title: 'Действия', key: 'action', align: 'right', width: 200, className: 'action-column' }
        ];

        const data = reactive([
            {
                id: '1',
                name: 'Уход за лицом',
                creation: '2021-12-19',
                status: true,
                selected: false
            },
            {
                id: '2',
                name: 'Уход за волосами',
                creation: '2021-12-19',
                status: false,
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
.action-column {
    display: flex;
    justify-content: flex-end;
}

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
