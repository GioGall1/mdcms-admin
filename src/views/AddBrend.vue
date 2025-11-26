<template>
  <a-layout-content style="padding: 24px; min-height: 360px">
    <a-breadcrumb style="margin-bottom: 30px;">
      <a-breadcrumb-item href="/">Главная</a-breadcrumb-item>
      <a-breadcrumb-item href="/brands">Бранды</a-breadcrumb-item>
      <a-breadcrumb-item>Добавить Бренд</a-breadcrumb-item>
    </a-breadcrumb>
    <a-form layout="vertical">
      <a-form-item>
        <h2>Добавление бренда</h2>
      </a-form-item>
      <a-card>
        <a-form-item>
          <div class="custom-title">
            <ArrowRightOutlined class="custom-icon" />
            <h4>Параметры бренда</h4>
          </div>
        </a-form-item>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item label="Наименование">
              <a-input v-model="brand.name" placeholder="Наименование бренда" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="Активен">
              <a-switch v-model="brand.active" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item label="Изображение">
              <a-upload list-type="picture-card" :file-list="fileList" :on-preview="handlePreview"
                :on-change="handleChange">
                <a-button>
                  <PlusOutlined /> Добавить
                </a-button>
              </a-upload>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item label="Теги">
              <a-select v-model="brand.brand" placeholder="Выберите Тег">
                <a-select-option value="Tag1">Тег 1</a-select-option>
                <a-select-option value="Tag2">Тег 2</a-select-option>
              </a-select>
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
              <a-input v-model="brand.pageUrl" addon-before="brand/" placeholder="alias" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item label="Meta заголовок">
              <a-input v-model="brand.metaTitle" placeholder="Meta-Title" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Meta описание">
              <a-input v-model="brand.metaDescription" placeholder="Meta-Description" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item>
          <div class="custom-title">
            <ArrowRightOutlined class="custom-icon" />
            <h4>Описание</h4>
          </div>
        </a-form-item>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-textarea v-model="brand.description" rows="4" placeholder="Описание" />
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
import { Form, Input, Select, Button, Switch, Upload, Modal, } from 'ant-design-vue';
import { PlusOutlined, ArrowRightOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-input': Input,
    'a-select': Select,
    'a-select-option': Select.Option,
    'a-button': Button,
    'a-switch': Switch,
    'a-upload': Upload,
    'a-modal': Modal,
    PlusOutlined,
    ArrowRightOutlined
  },
  setup() {
    const brand = reactive({
      name: '',
      active: false,
      availableForPurchase: false,
      sku: '',
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
      console.log('Submitted', brand);
    };

    return {
      brand,
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

.custom-title {
  display: -webkit-box;
}

.custom-icon {
  margin-right: 3px;
  font-size: 13px;
  color: #7775ff;
  ;
}
</style>
