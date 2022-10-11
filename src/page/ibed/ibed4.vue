<template>
	<div>
		<!-- 柱状图 -->
		<el-row :gutter="80">
			<!-- 柱状图两侧间距 最大24 -->
			<el-col :span="24">
				<div class="border-card ">
					<el-row>
						<div class="chart-wrapper">
							<bar-chart ref="chartOne" v-if="chartOneShow" style="width:100%;height:400px"
								:option="chartOptionOne" />
						</div>
					</el-row>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
 
<script>
    //保存的柱状图组件路径
	import BarChart from "../../dashboard/chart.vue";
    export default {
      //使用的柱状图组件
	  components: {
	  	BarChart,
	  },
	  data(){
	  	return{
			//表图选项
			chartOptionOne: {},
			//表图显示
			chartOneShow: true,
            //前端接收到的数据
			tableData: [],
        }
      },
      created() {
	    this.getList();
	  },
      methods: {
	    getList() {
	      this.loading = true;
		  let data=[];
		  let data1=[];
		  let data2=[];
		  let data3=[];
	      taskStatisticsRwpf(this.queryParams).then(response => {
	        this.tableData = response.data;
			for (var i = 0; i < this.tableData.length; i++) {
				data.push(this.tableData[i].字段名)//此data为x坐标展示的文字
				data1.push(this.tableData[i].字段名)
				data2.push(this.tableData[i].字段名)
				data3.push(this.tableData[i].字段名)
			}
			this.getChartsData(data,data1,data2,data3);
	        this.loading = false;
	      });
	    },
		getChartsData(data,data1,data2,data3) {
			this.chartOneShow = false
			this.chartTwoShow = false
			let that = this;
			taskStatisticsRwpf({
				queryType: "chart"
			}).then(response => {
			that.chartOptionOne = {
				title: {
				    text: "柱状图标题名",
					x:'center',
					y:'top',
					textAlign:'left',   //位置
					textStyle:{
					    //文字颜色
					    color:'#000000',
					    //字体风格,'normal','italic','oblique'
					    fontStyle:'normal',
					    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
					    fontWeight:'400',
					    //字体系列
					    // fontFamily:'sans-serif',
					    //字体大小
					    fontSize:20,
					}
				},
				grid: {
				  left: '1%',
				  right: '1%',
				  containLabel: true
				},
				legend: {
				    data: data1,data2,data3
				},
                //鼠标悬停显示数据
				tooltip: {
				    trigger: 'axis',
				    axisPointer: {
				      type: 'shadow'
				    }
				},
                //x坐标
				xAxis: {
					type: 'category',
                    //x坐标显示的文字
					data: data,
					axisLabel: {
					//x轴文字间距
					interval:0,
					//x轴文字倾斜度
					rotate:0
					}
				},
                //y坐标
				yAxis: {
					type: 'value'
				},
				series: [{
					      name: '文字名',
					      type: 'bar',
					      stack: 'total',
					      label: {
					        show: true
					      },
					      emphasis: {
					        focus: 'series'
					      },
					      data: data1
					    },
					    {
					      name: '文字名',
					      type: 'bar',
					      stack: 'total',
					      label: {
					        show: true
					      },
					      emphasis: {
					        focus: 'series'
					      },
					      data: data2
					    },
					    {
					      name: '文字名',
					      type: 'bar',
					      stack: 'total',
					      label: {
					        show: true
					      },
					      emphasis: {
					        focus: 'series'
					      },
					      data: data3
					    },
					    {
					      stack: 'total',
					type: 'bar',
					//设置柱状图大小
					barWidth: 30,
					label: {
					      // 柱图头部显示值
					      show: true,
					      position: "right",
					      color: "#333",
					      fontSize: "12px",
					      formatter: (params) => {
					        return params.value[params.encode.x[0]];
					      },
					}
				}]
			};
                //表图显示
				this.chartOneShow = true
			})
		},
	  }
    }    
</script>