<template>
  <div>
    <h1>Файловый менеджер</h1>
    <div id="ckfinder-widget"></div>
  </div>
</template>

<script>
export default {
  name: 'FileManager',
  mounted() {
    this.loadCKFinder();
  },
  methods: {
    loadCKFinder() {
      const script = document.createElement('script');
      script.src = '/ckfinder/ckfinder.js';
      script.onload = () => {
        try {
          // eslint-disable-next-line no-undef
          CKFinder.widget('ckfinder-widget', {
            width: '100%',
            height: 600,
            connectorPath: '/ckfinder/core/connector/php/connector.php',
          });
        } catch (error) {
          console.error('Ошибка при инициализации CKFinder:', error);
          alert('Ошибка при инициализации CKFinder: ' + error.message);
        }
      };
      script.onerror = () => {
        console.error('Не удалось загрузить ckfinder.js');
        alert('Не удалось загрузить ckfinder.js');
      };
      document.body.appendChild(script);
    },
  },
};
</script>

<style scoped>
#ckfinder-widget {
  width: 100%;
  height: 600px;
}
</style>
