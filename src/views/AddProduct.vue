<template>
  <a-layout-content style="padding: 24px; background: #fff; min-height: 360px">
    <a-breadcrumb style="margin-bottom: 30px;">
      <a-breadcrumb-item href="/">Главная</a-breadcrumb-item>
      <a-breadcrumb-item href="/products">Товар</a-breadcrumb-item>
      <a-breadcrumb-item>Добавить товар</a-breadcrumb-item>
    </a-breadcrumb>
    <a-form layout="vertical">
      <a-form-item>
        <h2>Добавление товара</h2>
      </a-form-item>
      <a-card>
        <a-form-item>
          <div class="custom-title">
            <ArrowRightOutlined class="custom-icon" />
            <h4>Параметры товара</h4>
          </div>
        </a-form-item>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item label="Наименование">
              <a-input v-model="product.name" placeholder="Наименование товара" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="Активен">
              <a-switch v-model="product.active" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="Доступен для покупки">
              <a-switch v-model="product.availableForPurchase" />
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
          <a-col :span="12">
            <a-form-item label="Артикул товара">
              <a-input v-model="product.sku" placeholder="Артикул" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Бренд">
              <a-select v-model="product.brand" placeholder="Выберите бренд">
                <a-select-option value="brand1">Бренд 1</a-select-option>
                <a-select-option value="brand2">Бренд 2</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item label="Категория">
              <a-select v-model="product.category" placeholder="Выберите категорию">
                <a-select-option value="category1">Категория 1</a-select-option>
                <a-select-option value="category2">Категория 2</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="Текущая цена">
              <a-input-number v-model="product.currentPrice" placeholder="Цена" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Старая цена">
              <a-input-number v-model="product.oldPrice" placeholder="Старая цена" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Скидка">
              <a-input-number v-model="product.discount" placeholder="%" />
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
              <a-input v-model="product.pageUrl" addon-before="product/" placeholder="alias" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item label="Meta заголовок">
              <a-input v-model="product.metaTitle" placeholder="Meta-Title" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Meta описание">
              <a-input v-model="product.metaDescription" placeholder="Meta-Description" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item>
          <div class="custom-title">
            <ArrowRightOutlined class="custom-icon" />
            <h4>Теги товара</h4>
          </div>
        </a-form-item>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-input v-model="product.tags" placeholder="Теги товара" />
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
            <a-textarea v-model="product.description" rows="4" placeholder="Описание" />
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
import { Form, Input, Select, Button, Switch, Upload, Modal } from 'ant-design-vue';
import { PlusOutlined, ArrowRightOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-input': Input,
    'a-input-number': Input.Number,
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
    const product = reactive({
      name: '',
      active: false,
      availableForPurchase: false,
      sku: '',
      brand: '',
      category: '',
      currentPrice: null,
      oldPrice: null,
      discount: null,
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
      console.log('Submitted', product);
    };

    return {
      product,
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
}
</style>