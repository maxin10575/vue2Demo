<template>
    <div class="Echarts">
        <!-- <div id="main" style="width: 100%;height: 400px;"></div> -->
        <div ref="chart" style="width:100%;height:400px"></div>
    </div>
</template>
<script>
export default {
    name: 'Echarts',
    methods: {
        myEcharts() {
            var myChart = this.$echarts.init(this.$refs.chart)
            // var myChart = this.$echarts.init(document.getElementById('main'));
            console.log("myChat==" + myChart)
            let state = ["m1", "m2"]
            let data = [1665387695, 1665389695]
            //配置图表
            var option = {
                legend: {
                    //图例
                    show: this.legendShow,
                    data: state,
                    selectedMode: true, // 图例设为不可点击
                    left: this.left,
                    bottom: this.bottom,
                    textStyle: {
                        color: this.legendColor,
                    },
                },
                grid: {
                    //绘图网格
                    left: "3%",
                    right: "3%",
                    top: "1%",
                    bottom: "10%",
                    containLabel: true,
                },
                xAxis: {
                    type: "time",
                    interval: 3600 * 1000, //以一个小时递增
                    // min: '2009/6/1 1:00', //将data里最小时间点
                    axisLabel: {
                        formatter: function (value) {
                            var date = new Date(value);
                            return getmd(date);
                            function getmd(date) {
                                const y = date.getFullYear().toString();
                                const m = (date.getMonth() + 1).toString();
                                const d = date.getDate().toString();
                                return m + "月" + d + "日";
                            }
                        },
                        color: this.xaxisLabelColor,
                        fontSize: this.axisLabelFont,
                        rotate: this.xaxisLabelRotate,
                    },
                    nameTextStyle: {
                        color: this.xaxisLabelColor,
                    },
                    splitLine: {
                        show: this.splitLine,
                        lineStyle: {
                            type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
                            color: this.splitLineColor,
                            width: this.splitLineWidth,
                            lineDash: [this.splitLineDash],
                        },
                    },
                },
                yAxis: {
                    data: state,
                    nameTextStyle: {
                        color: this.yaxisLabelColor,
                    },
                    axisLabel: {
                        color: this.yaxisLabelColor,
                        fontSize: this.axisLabelFont,
                        rotate: this.yaxisLabelRotate,
                    },
                },
                series: [
                    // 用空bar来显示三个图例
                    { name: state[0], type: "bar", data: [] },
                    { name: state[1], type: "bar", data: [] },
                    { name: state[2], type: "bar", data: [] },
                    { name: state[3], type: "bar", data: [] },
                    {
                        type: "custom", // 自定义
                        renderItem: function (params, api) {
                            //开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
                            var categoryIndex = api.value(0); //这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
                            var start = api.coord([api.value(1), categoryIndex]); // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
                            var end = api.coord([api.value(2), categoryIndex]);

                            return {
                                type: "rect", // 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
                                shape: echarts.graphic.clipRectByRect(
                                    {
                                        // 矩形的位置和大小。
                                        x: start[0],
                                        y: start[1] - barWidth / 2,
                                        width: end[0] - start[0],
                                        height: barWidth,
                                    },
                                    {
                                        // 当前坐标系的包围盒。
                                        x: params.coordSys.x,
                                        y: params.coordSys.y,
                                        width: params.coordSys.width,
                                        height: params.coordSys.height,
                                    }
                                ),
                                style: api.style(),
                            };
                        },
                        labelLine: {
                            show: true,
                        },
                        encode: {
                            x: [1, 2], // data 中『维度1』和『维度2』对应到 X 轴
                            y: 0, // data 中『维度0』对应到 Y 轴
                        },
                        data: data
                    },
                ],
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