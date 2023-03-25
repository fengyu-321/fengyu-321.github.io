$(function () {
  echart_2();
  echart_4();
  echart_5();
  echart_6();
  echart_7();
  function echart_2() {
    var chartDom = document.getElementById('chart_2');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
       
        text: 'XXXXXXXXXX', left: 20, top: 30,marginBottom: 50,
        textStyle: {
          color: 'white',
        },
      },
      tooltip: {
        trigger: 'item',

        textStyle: {
          fontSize: 20
        }

      },
      legend: {
        left: '5%',
        top: '30%',
        orient: 'vertical',
        textStyle: {
          color: 'white',
          fontSize: 15
        },
      },

      series: [
        {

          name: 'Access From',
          type: 'pie',
          radius: '50%',

          color: ['skyblue', 'blue', 'gold', 'yellow', 'gray'],
          data: [
            { value: 3.69, name: '2018' },
            { value: 3.51, name: '2019' },
            { value: 3.22, name: '2020' },
            { value: 3.07, name: '2021' },
            { value: 2.82, name: '2022' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);

  }
  function echart_5() {
    var chartDom = document.getElementById('chart_5');
    var myChart = echarts.init(chartDom, 'dark');
    var option;

    option = {
      backgroundColor: '#0c1a2c',
      color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
      title: {
        text: 'Gradient Stacked Area Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        top: '7%',
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
      },
      toolbox: {
        feature: {
        }
      },
      grid: {

        left: '1%',
        right: '6%',
        bottom: '6%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Line 1',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgb(1, 191, 236)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [140, 232, 101, 264, 90, 340, 250]
        },
        {
          name: 'Line 2',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(0, 221, 255)'
              },
              {
                offset: 1,
                color: 'rgb(77, 119, 255)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 282, 111, 234, 220, 340, 310]
        },
        {
          name: 'Line 3',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(55, 162, 255)'
              },
              {
                offset: 1,
                color: 'rgb(116, 21, 219)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 132, 201, 334, 190, 130, 220]
        },
        {
          name: 'Line 4',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 0, 135)'
              },
              {
                offset: 1,
                color: 'rgb(135, 0, 157)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 402, 231, 134, 190, 230, 120]
        },
        {
          name: 'Line 5',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 191, 0)'
              },
              {
                offset: 1,
                color: 'rgb(224, 62, 76)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 302, 181, 234, 210, 290, 150]
        }
      ]
    };

    option && myChart.setOption(option);

  }
  function echart_4() {
    var chartDom = document.getElementById('chart_4');

    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: 'XXXXXXXX1', top: 'bottom', left: 'center',
        textStyle: {
          color: 'white',
        },
      },
      tooltip: {

        trigger: 'item'
      },

      series: [
        {
          itemStyle: {
            borderRadius: 1,
          },
          color: ['gold', '#052639'],
          name: 'Access From',
          type: 'pie',
          radius: ['50%', '80%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            label: {
              color: 'white',
              show: true,
              fontSize: 18,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: 1
          },
          data: [
            { value: 75, name: 'Search Engine' },
            { value: 25, name: 'Direct' },

          ]
        }
      ]
    };

    option && myChart.setOption(option);

  }
  function echart_6() {
    var chartDom = document.getElementById('chart_6');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      
      title: {
        text: 'XXXXXXXX2', top: 'bottom', left: 'center',
        textStyle: {
          color: 'white',

        },
      },
      tooltip: {

        trigger: 'item'
      },

      series: [
        {
          itemStyle: {
            borderRadius: 1,
          },
          color: ['#037724', '#052639'],
          name: 'Access From',
          type: 'pie',
          radius: ['50%', '80%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            label: {
              color: 'white',
              show: true,
              fontSize: 18,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: 1
          },
          data: [
            { value: 52, name: 'Search Engine' },
            { value: 48, name: 'Direct' },

          ]
        }
      ]
    };

    option && myChart.setOption(option);
  }
  function echart_7() {
    var chartDom = document.getElementById('chart_7');

    var myChart = echarts.init(chartDom, 'dark');
    var option;

    const colors = ['#5470C6', '#EE6666'];
    option = {
      title: {
        
        text: 'XXXXXXXXXX', left: 20, top: 20,
        textStyle: {
          color: 'white',
        },
      },
      top:'150px',
      backgroundColor: '#0c1a2c',
      color: colors,
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross',

        }
      },
      legend: {},
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1]
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  'Precipitation  ' +
                  params.value +
                  (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                );
              }
            }
          },
          // prettier-ignore
          data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[0]
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  'Precipitation  ' +
                  params.value +
                  (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                );
              }
            }
          },
          // prettier-ignore
          data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
        }
      ],
      yAxis: [

        {
          axisLabel: {
            color: 'white',
            fontSize: 18

          },
          axisPointer: {
            label: {
              backgroundColor: 'black',
              fontSize: 18,
              show: true,
              margin: 30
            }
          },
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Precipitation(2015)',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: 'Precipitation(2016)',
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [
            3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
          ]
        }
      ]
    };

    option && myChart.setOption(option);
  }
});