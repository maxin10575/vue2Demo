<!-- 可点击交互的chart -->
<template>
    <div class="Echarts">
        <!-- <div id="main" style="width: 600px;height: 400px;"></div> -->
        <div id="main" style="width: 100%;height: 400px;"></div>
    </div>
</template>
<script>
const BASE_TIME = "2021-01-01";
export default {
    name: "Echarts",
    props: {
        data: {
            type: Array,
            require: true
        },
        legend: {
            type: Array,
            require: true
        },
        options: {
            type: Object,
            default: () => ({})
        }
    },
    mixins: {},
    components: {},
    data() {
        return {
            instance: ""
        };
    },
    created() { },
    mounted() {
        let that = this;
        this.updateChart();
        this.instance.on("click", function (params) {
            that.$emit("tlick", params.name);
        });
    },
    filters: {},
    computed: {},
    watch: {
        data() {
            this.updateChart();
        }
    },
    methods: {
    
            chartOpts() {
                
                const ydata = [];
                for (let i = 0; i < this.data.length; i++) {
                    ydata.push(`${BASE_TIME} ${this.data[i].value}`);
                }
                const option = {
                    title: {
                        text: this.options.title || "图表"
                    },
                    xAxis: {
                        type: "category",
                        data: this.legend,
                        axisLabel: {
                            rotate: 45
                        }
                    },
                    yAxis: {
                        type: "time",
                        min: `${BASE_TIME} 0:00:00`,
                        max: `${BASE_TIME} 23:59:59`
                    },
                    series: [
                        {
                            data: ydata,
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                                color: "rgba(180, 180, 180, 0.2)"
                            }
                        }
                    ]
                };
                return option;
            },
            updateChart() {
                // 基于准备好的dom，初始化echarts实例
                const chart = echarts.init(document.getElementById("chart"));
                // 绘制图表
                chart.setOption(this.chartOpts());
                this.instance = chart;
            }
    }
};
</script>


<style lang="less" scoped>
.chart-wrap {
    width: 100%;
    height: 300px;

    #chart {
        width: 100%;
        height: 100%;

        & /deep/ canvas {
            width: 100% !important;
            height: 100% !important;
        }
    }
}
</style>