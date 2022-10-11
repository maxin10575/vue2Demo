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
            // let legend = ["bed1","bed2"]
            let legend = ["bed1"]
            let onTime = ["2022-10-10 23:00:10.0", "2022-10-11 08:00:10.0", "2022-10-11 13:00:10.0", "2022-10-11 23:00:10.0"]
            let offTime = ["2022-10-11 07:00:10.0", "2022-10-11 12:00:10.0", "2022-10-11 16:00:10.0", "2022-10-12 07:00:10.0"]
            // let BASE_TIME = "2022-10-10"
            //配置图表
            var option = {
                title: {
                    text: '智能床使用情况',
                    // subtext: 'By mx',
                    // sublink: 'https://github.com/ecomfe/echarts-stat',
                    left: 'center'
                },

                grid: {
                    left: '3%',
                    right: '8%',
                    bottom: '10%',
                    height: 200,
                    containLabel: true
                },
                color: ['#1685ff', '#f22222', '#09cb4e', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
                yAxis: {
                    type: 'category',

                    axisLabel: {
                        interval: 0,
                        formatter: function (value, index) {
                            return '{a|' + value + '}'
                        },
                        rich: {
                            a: {
                                width: 10, // 只要有就行,无论大小
                            }
                        }
                    },
                    // axisLabel: {
                    //     interval: 0,
                    //     fontSize: 15
                    // },
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: true,
                        lineStyle: {
                            color: '#333'
                        }
                    },
                    data: legend
                    // data: me.legend
                },
                xAxis: {
                    type: 'time',
                    // splitLine: {
                    //     lineStyle: {
                    //         type: 'dashed',
                    //         color: '#DDD'
                    //     }
                    // },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#333'
                        }
                    },
                    // nameTextStyle: {
                    //     color: '#303133',
                    //     fontSize: 10,
                    // },
                    // splitArea: {
                    //     show: true
                    // },
                    // min: `2022-10-01 0:00:00`,
                    // max: `2022-10-15 23:59:59`,
                    // splitNumber: 5,
                    axisLabel: {
                        // interval: 10,
                        // formatter: (value) => {
                        //     // 1小时=3600秒
                        //     return `${(value / 3600).toFixed(0)}h`;
                        // },
                        // inside: true,
                        color: '#333',
                        fontSize: 10,
                        // fontWeight: 'bold'
                        // formatter: function (value) {
                        // return (moment(value).format('YYYY-MM-DD HH:mm')).substr(11, 20)
                        // return value
                        // }
                    }
                },
                series: [
                    {
                        type: 'scatter',
                        symbolSize: '10',
                        data: offTime,
                    },
                    {
                        label: {
                            show: true
                        },
                        cursor: 'pointer',
                        legendHoverLink: true,
                        symbol: 'circle',
                        type: 'scatter',
                        symbolSize: '10',
                        data: onTime,
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