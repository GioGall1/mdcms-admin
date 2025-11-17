<template>
    <div>
      <canvas id="orderChart"></canvas>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default {
    name: 'OrderChart',
    setup() {
      onMounted(() => {
        const ctx = document.getElementById('orderChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            datasets: [
              {
                label: 'Сумма всех заказов',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              },
              {
                label: 'Сумма выполненных заказов',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              },
              {
                label: 'Сумма отмененных заказов',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              x: {
                beginAtZero: true
              },
              y: {
                beginAtZero: true
              }
            }
          }
        });
      });
    }
  };
  </script>
  
  <style>
  </style>
  