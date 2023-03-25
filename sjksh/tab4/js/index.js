$(function () {
    echart_1();
    echart_2();
    echart_3();
    echart_4();
    echart_5();
    echart_6();
    echart_7();
/**
 * 近五年人均收入
 */
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var chartDom = document.getElementById('chart_1');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '近五年人均收入（万元）',left:20,top:20,
    textStyle:{
      color:'white',
  },
  },
  tooltip: {
    trigger: 'item',
    animation:1,
    axisPointer: {
      type: 'shadow',
      
    },
    textStyle:{
      fontSize:20
     }
    
  },
  legend: {
    left:'80%',
    top:'20%',
    orient :'vertical',
    textStyle:{
      color:'white',
      fontSize:15
  },
  },
  
  series: [
    {
      
      name: '',
      type: 'pie',
      radius: [20, 80],
      center: ['40%', '48%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      color:['red','blue', 'orange','yellow','gray'],
      data: [
        { value: 3.69, name: '2018' },
        { value: 3.51, name: '2019' },
        { value: 3.22, name: '2020' },
        { value: 3.07, name: '2021' },
        { value: 2.82, name: '2022' },
      ]
    }
  ]
};

option && myChart.setOption(option);


        
    }

    function echart_2() {
        var app = {};
        var chartDom = document.getElementById('chart_2');
        var myChart = echarts.init(chartDom);
var option;

const pathSymbols = {
  reindeer:
    '',
};
const labelSetting = {
  show: true,
  position: 'right',
  offset: [10, 0],
  fontSize: 16,
  color:'white',
};
function makeOption(type, symbol) {
  return {
    color:'pink',
    title: {
      text: '近五年全国GDP（亿元）',left:20,top:20,
      textStyle:{
        color:'#ffffff',
    }
    },
    
    tooltip: {
      trigger: 'axis',
      animation:1,
      axisPointer: {
        type: 'shadow'
      },
    
      
    },
    grid: {
      containLabel: true,
      left: 18,
      top:70
    },
    yAxis: {
      data: ['2018', '2019', '2020', '2021', '2022'],
      inverse: true,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        margin: 30,
        color:'white',
        fontSize: 18
        
      },
      axisPointer: {
        label: {
          fontSize: 18,
          show: true,
          margin: 30
        }
      }
    },
    xAxis: {
      splitLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false }
    },
    animationDurationUpdate: 500,
    series: [
      {
        
        type: type,
        label: labelSetting,
        symbolRepeat: true,
        symbolSize: ['80%', '80%'],
        barCategoryGap: '40%',
        universalTransition: {
          enabled: true,
          delay: function (idx, total) {
            return (idx / total) * 1000;
          }
        },
        data: [
          {
            value: 919281,
            symbol: symbol || pathSymbols.reindeer
          },
          {
            value: 986515,
            symbol: symbol || pathSymbols.ship
          },
          {
            value: 1013567,
            symbol: symbol || pathSymbols.plane
          },
          {
            value: 1149237,
            symbol: symbol || pathSymbols.train
          },
          {
            value: 1210207,
            symbol: symbol || pathSymbols.car
          }
        ]
      },
      {
        id: 'bar2',
        type: type,
        barGap: '10%',
        label: labelSetting,
        symbolRepeat: true,
        symbolSize: ['80%', '60%'],
        universalTransition: {
          enabled: true,
          delay: function (idx, total) {
            return (idx / total) * 1000;
          }
        },
        data: [
        ]
      }
    ]
  };
}
const options = [
  makeOption('pictorialBar'),
  makeOption('bar'),
  makeOption('pictorialBar', 'diamond')
];
var optionIndex = 0;
option = options[optionIndex];
setInterval(function () {
  optionIndex = (optionIndex + 1) % options.length;
  myChart.setOption(options[optionIndex]);
}, 2500);

option && myChart.setOption(option);
}

    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        var option = {
            title:{
                text:'全国省份收入（亿元）',
                left:'10%',
                textStyle:{
                    color:'#ffffff'
                }
            },
            tooltip: {
//                    show: false //不显示提示标签
                formatter: '{b}:{c}',//提示标签格式
                backgroundColor:"#4695d8",//提示标签背景颜色
                textStyle:{color:"#fff"} //提示标签字体颜色
            },
            series: [{
                type: 'map',
                mapType: 'china',
                /**实现地图的比例缩放 */
                zoom: 1, //当前视角的缩放比例
                roam: true, //是否开启平游或缩放
                scaleLimit: { //滚轮缩放的极限控制
                min: 1,
                max: 2
                },
                label: {
                    normal: {
                        show: true,//显示省份标签
                        textStyle:{color:"#c71585"}//省份标签字体颜色
                    },    
                    emphasis: {//对应的鼠标悬浮效果
                        show: true,
                        textStyle:{color:"#118ae7"}
                    } 
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,//区域边框宽度
                        borderColor: '#009fe8',//区域边框颜色
                        areaColor:"#0c2134",//区域颜色
                    },
                    emphasis: {
                        borderWidth: .5,
                        borderColor: 'rgba(128, 217, 248, 1)',
                        areaColor:"#118ae7",
                    }
                },
                data:[
                    {name:'广东',value:110760},
                    {name:'江苏', value:102719 },
                    {name:'山东', value:73129 },
                    {name:'浙江', value: 64613},
                    {name:'河南', value: 54997},
                    {name:'四川',value:48598},
                    {name:'福建', value:43903 },
                    {name:'湖北', value:43443 },
                    {name:'湖南', value: 41781},
                    {name:'上海', value: 38700},
                    {name:'安徽',value:38680},
                    {name:'河北', value:36206 },
                    {name:'北京', value:36106 },
                    {name:'陕西', value: 26181},
                    {name:'江西', value: 25691},
                    {name:'辽宁',value:25115},
                    {name:'重庆', value:25002 },
                    {name:'云南', value:24500 },
                    {name:'广西', value: 22156},
                    {name:'贵州', value: 17826},
                    {name:'山西', value: 17651},
                    {name:'内蒙古',value:17360},
                    {name:'天津', value:14083 },
                    {name:'新疆', value:13797 },
                    {name:'黑龙江', value: 13698},
                    {name:'吉林', value: 12311},
                    {name:'甘肃', value:9016 },
                    {name:'海南', value:5532 },
                    {name:'宁夏', value: 3920},
                    {name:'青海', value: 3005},
                    {name:'台湾', value: 3005},
                    {name:'南海诸岛', value: 3005},
                    {name:'西藏', value: 1902}
                ]
            }],
        };
        
        myChart.setOption(option);
        myChart.on('mouseover', function (params) {
            var dataIndex = params.dataIndex;
            console.log(params);
        });
    }
/**
 * 国民总收入
 */
    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));
        var data = [34, 60, 69, 71, 78];
        var titlename = ['2016年', '2017年', '2018年', '2019年', '2020年'];
        var valdata = [406, 505, 664, 702, 793];
        var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
        option = {
            title: {
                text: '国民总收入(万元)',
                x: 'center',
                textStyle: {
                    color: '#FFF'
                },
                left: '6%',
                top: '10%'
            },
            //图标位置
            grid: {
                top: '20%',
                left: '32%'
            },
            xAxis: {
                show: false
            },
            yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#fff',
                    formatter: (value, index) => {
                        return [

                            `{lg|${index+1}}  ` + '{title|' + value + '} '
                        ].join('\n')
                    },
                    rich: {
                        lg: {
                            backgroundColor: '#339911',
                            color: '#fff',
                            borderRadius: 15,
                            // padding: 5,
                            align: 'center',
                            width: 15,
                            height: 15
                        },
                    }
                },


            }, {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: '#fff',
                    },
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },

            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: data,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}%'
                    }
                },
            }, {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [100, 100, 100, 100, 100],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: 'none',
                        borderColor: '#00c1de',
                        borderWidth: 3,
                        barBorderRadius: 15,
                    }
                }
            }, ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        // window.addEventListener("resize", function () {
        //     myChart.resize();
        // });
    }
    /**
     * 三大产业增加值
     */
    function echart_5(){
        var chartDom = document.getElementById('chart_5');
        var myChart = echarts.init(chartDom,  {
            renderer: 'svg'
          });
          var option;
          
          option = {
       
            title: {
                top:10,left:20,
            textStyle:{
                color:'#fff'
            },
              text: '行业GDP（亿元）'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#black'
                }
              }
            },
            legend: {color:'white',
                textStyle:{
                    color:'#fff'
                },
              data: []
            },
            toolbox: {
             
            },
            grid: {
              left: '5%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },
            textStyle:{
                color:'#fff'
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                
                data: ['16年','18年', '20年     ',]
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '工业',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [245406, 301089, 313071]
              },
              {
                name: '批发、零售',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [73724, 88903, 95686]
              },
              {
                name: '金融',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [59964, 70610, 84070]
              },
              {
                name: '地产',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [49969, 64623, 74552]
              },
              {
                name: '农林牧',
                type: 'line',
                stack: 'Total',
                label: {
                  position: 'top'
                },
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [64660, 67558, 81103]
              }
            ]
          };
          
          option && myChart.setOption(option);
          
	}
    function echart_6(){
        var myChart = echarts.init(document.getElementById('chart_6'));
        var option;
        option = {
            angleAxis: {
                type: 'category',
                data: ['2014', '2015', '2016', '2017', '2018','2019','2020'],
                axisLine:{
                    lineStyle:{
                        color:'#fff',
                        width:1,//这里是为了突出显示加上的
                    }
                } 
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                data: [1, 2, 3, 4, 3, 5, 1],
                coordinateSystem: 'polar',
                name: '第一产业',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            }, {
                type: 'bar',
                data: [2, 4, 6, 1, 3, 2, 1],
                coordinateSystem: 'polar',
                name: '第二产业',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            }, {
                type: 'bar',
                data: [1, 2, 3, 4, 1, 2, 5],
                coordinateSystem: 'polar',
                name: '第三产业',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            }],
            legend: {
                show: true,
                data: ['第一产业', '第二产业', '第三产业'],
                color:"#ffffff",
                textStyle:{
                    icon:"pin",
                    color:"#ffffff"
                }
            }
        };
        myChart.setOption(option);
    }

    function echart_7(){
        var chartDom = document.getElementById('chart_7');
        var myChart = echarts.init(chartDom);
        var option;
        
        option = {
          title: {
            top:10,left:20,
        textStyle:{
            color:'#fff'
        },
          text: '全国居民消费水平（元）'
        },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            
                    type: 'shadow'       
                }
            },
            
            grid: {
                left: '3%',
                right: '4%',
                bottom: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine:{
                    /* lineStyle:{
                        color:'#fff'
                    } */
                }
            },
            yAxis: {
                type: 'category',
                data: ['2016', '2017', '2018', '2019', '2020'],
                axisLine:{
                    lineStyle:{
                        color:'#fff'
                        
                    }
                }
            },
            series: [
                {
                    name: '居民消费水平',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [18976, 20938, 23131, 25427, 27702]
                },
                {
                    name: '城镇居民消费水平',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [26795, 28998, 31354, 33671, 36218]
                },
                {
                    name: '农村居民消费水平',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [9249, 10372, 11805, 13538, 14878]
                }
            ]
        };
        option && myChart.setOption(option);

    }
});