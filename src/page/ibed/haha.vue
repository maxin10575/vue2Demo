<template>
    <div>
      <div ref="chart" style="width:100%;height:376px"></div>
    </div>
  </template>
  <script>
  
    export default {
      data() {
  
      },
      mounted() {
        this.getEchartData()
      },
      methods: {
        getEchartData() {
          const chart = this.$refs.chart
          if (chart) {
            const myChart = this.$echarts.init(chart)
            const option = { legend: {},
              tooltip: {},
              dataset: {
                source: [
                  ['订单', 43.3, 85.8],
                  ['订单1', 83.1, 73.4],
                  ['订单2', 86.4, 65.2],
                  ['订单3', 72.4, 53.9],
                  ['订单4', 82.4, 53.9],
                  ['订单5', 42.4, 53.9],
                  ['订单6', 72.4, 53.9],
                  ['订单7', 72.4, 53.9]
                ]
              },
              xAxis: { type: 'category' },
              yAxis: {},
  
              series: [ { type: 'bar' }, { type: 'bar' }]}
            myChart.setOption(option)
            window.addEventListener("resize", function() {
              myChart.resize()
            })
          }
          this.$on('hook:destroyed',()=>{
            window.removeEventListener("resize", function() {
              myChart.resize();
            });
          })
        },
      },
      watch: {},
      created() {
      }
    }
  </script>
  