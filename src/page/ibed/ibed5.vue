//在Echarts.vue文件中
<template>
    <div class="Echarts">
        <!-- <div id="main" style="width: 600px;height: 400px;"></div> -->
        <div id="main" style="width: 100%;height: 400px;"></div>
    </div>
</template>
<script>
import util from '../utils/util'


export default {


    name: 'Echarts',
    methods: {
        myEcharts() {
            var myChart = this.$echarts.init(document.getElementById('main'));
            //配置图表
            var option = {
                yAxis: {
                    data: ['am1', 'am2', 'otm1', 'otm2']
                },
                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false
                    },
                    interval: 3600, // 设置x轴时间间隔
                    axisLabel: {
                        formatter: function (value, index) {
                            return util.unix2hm(value)
                        }
                    }
                },
                series: [
                    {
                        data: [1665309085, 1665309085, 1665309085,1665309085],
                        type: 'bar',
                        stack: 'x'
                    }
                    // ,{
                    //     data: [1, 1, 1, 1],
                    //     type: 'bar',
                    //     stack: 'x'
                    // },
                    // {
                    //     data: [1, 1, 1, 2],
                    //     type: 'bar',
                    //     stack: 'x'
                    // }
                ]
            };
            option && myChart.setOption(option);
        }
    },

   
    mounted() {
        this.myEcharts();
    }
}




</script>
 
<style>

</style>