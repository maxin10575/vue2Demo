
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


            //配置图表
            var option = {
               
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