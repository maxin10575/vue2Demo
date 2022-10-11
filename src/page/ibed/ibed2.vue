//在Echarts.vue文件中
<template>
    <div class="Echarts">
        <div id="main" style="width: 100%;height: 400px;"></div>
    </div>
</template>
<script>
export default {
    name: 'Echarts',
    methods: {
        myEcharts() {
            var myChart = this.$echarts.init(document.getElementById('main'));
            //配置图表
            var option = {
  yAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  xAxis: {},
  series: [
    {
      data: [10, 22, 28, 43, 49],
      type: 'bar',
      stack: 'x'
    },
    {
      data: [5, 4, 3, 5, 10],
      type: 'bar',
      stack: 'x'
    }
  ]
};


            myChart.setOption(option);
        }
    },
    mounted() {
        this.myEcharts();
    }
}
</script>