//在Echarts.vue文件中
<template>
    <div class="Echarts">
        <!-- <div id="main" style="width: 600px;height: 400px;"></div> -->
        <div id="main" style="width: 100%;height: 400px;"></div>
    </div>
</template>
<script>
export default {
    name: 'Echarts',
    methods: {
        myEcharts() {
            var myChart = this.$echarts.init(document.getElementById('main'));
            var data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
            var help = [];
            var positive = [];
            var negative = [];
            for (var i = 0, sum = 0; i < data.length; ++i) {
                if (data[i] >= 0) {
                    positive.push(data[i]);
                    negative.push('-');
                } else {
                    positive.push('-');
                    negative.push(-data[i]);
                }

                if (i === 0) {
                    help.push(0);
                } else {
                    sum += data[i - 1];
                    if (data[i] < 0) {
                        help.push(sum + data[i]);
                    } else {
                        help.push(sum);
                    }
                }
            }

            //配置图表
            var option = {
                title: {
                    text: 'Waterfall'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis: {
                    type: 'category',
                    splitLine: { show: false },
                    data: (function () {
                        var list = [];
                        for (var i = 1; i <= 11; i++) {
                            list.push('Oct/' + i);
                        }
                        return list;
                    })()
                },
                xAxis: {
                    type: 'value'
                },
                series: [
                    {
                        type: 'bar',
                        stack: 'all',
                        itemStyle: {
                            normal: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            },
                            emphasis: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: help
                    },
                    {
                        name: 'positive',
                        type: 'bar',
                        stack: 'all',
                        data: positive
                    },
                    {
                        name: 'negative',
                        type: 'bar',
                        stack: 'all',
                        data: negative,
                        itemStyle: {
                            color: '#f33'
                        }
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
 
<style>

</style>