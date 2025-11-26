<template>
    <a-layout-content style="padding: 24px; min-height: 360px">
        <a-breadcrumb style="margin-bottom: 30px;">
            <a-breadcrumb-item href="/">Главная</a-breadcrumb-item>
            <a-breadcrumb-item href="/categories">Блог</a-breadcrumb-item>
            <a-breadcrumb-item>Добавить пост</a-breadcrumb-item>
        </a-breadcrumb>
        <a-form layout="vertical">
            <a-form-item>
                <h2>Добавление поста</h2>
            </a-form-item>
            <a-card>
                <a-form-item>
                    <div class="custom-title">
                        <ArrowRightOutlined class="custom-icon" />
                        <h4>Параметры поста</h4>
                    </div>
                </a-form-item>
                <a-row :gutter="24">
                    <a-col :span="12">
                        <a-form-item label="Заголовок">
                            <a-input v-model="category.name" placeholder="Заголовок " />
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="Активен">
                            <a-switch v-model="category.active" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-form-item>
                    <div class="custom-title">
                        <ArrowRightOutlined class="custom-icon" />
                        <h4>Параметры страницы</h4>
                    </div>
                </a-form-item>
                <a-row :gutter="24">
                    <a-col :span="24">
                        <a-form-item label="Адрес страницы">
                            <a-input v-model="category.pageUrl" addon-before="category/" placeholder="alias" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="24">
                    <a-col :span="12">
                        <a-form-item label="Meta заголовок">
                            <a-input v-model="category.metaTitle" placeholder="Meta-Title" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="Meta описание">
                            <a-input v-model="category.metaDescription" placeholder="Meta-Description" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-form-item>
                    <div class="custom-title">
                        <ArrowRightOutlined class="custom-icon" />
                        <h4>Описания</h4>
                    </div>
                </a-form-item>
                <a-row :gutter="24">
                    <a-col :span="24">
                        <a-textarea v-model="category.description" rows="4" placeholder="Описание" />
                    </a-col>
                </a-row>
                <a-row :gutter="24">
                    <a-col :span="24">

                        <a-button class="save-botton" type="primary" @click="handleSubmit">Сохранить</a-button>
                    </a-col>
                </a-row>
            </a-card>
        </a-form>
    </a-layout-content>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { Form, Input, Button, Switch, } from 'ant-design-vue';
import { ArrowRightOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        'a-form': Form,
        'a-form-item': Form.Item,
        'a-input': Input,
        'a-button': Button,
        'a-switch': Switch,
        ArrowRightOutlined
    },
    setup() {
        const category = reactive({
            name: '',
            active: false,
            pageUrl: '',
            metaTitle: '',
            metaDescription: '',
            tags: '',
            description: ''
        });

        const fileList = reactive([]);
        const previewVisible = reactive(false);
        const previewImage = reactive('');

        const handlePreview = (file) => {
            previewImage.value = file.url || file.thumbUrl;
            previewVisible.value = true;
        };

        const handleChange = ({ fileList: newFileList }) => {
            fileList.value = newFileList;
        };

        const handleCancel = () => {
            previewVisible.value = false;
        };

        const handleSubmit = () => {
            console.log('Submitted', category);
        };

        return {
            category,
            fileList,
            previewVisible,
            previewImage,
            handlePreview,
            handleChange,
            handleCancel,
            handleSubmit
        };
    }
});
</script>

<style scoped>
.save-botton {
    margin-top: 30px;
}

.custom-parametr {
    display: flex;
    justify-content: start;
}

.custom-title {
    display: -webkit-box;
}

.custom-icon {
    margin-right: 3px;
    font-size: 13px;
    color: #7775ff;
}
</style>
