import * as echarts from 'echarts'
export const chartOptions = {
  setOption1(data) {
    const option = {
      legend: {
        data: ['Allocated Budget', 'Actual Spending'],
        textStyle: {
          color: '#fff',
          fontSize: 14
        }
      },

      radar: {
        shape: 'circle', // 外环的形状（圆形/多边形）
        splitNumber: 5, // 外环圈数
        indicator: [
          // 每项指标的最大值设置
          // { name: 'Sales', max: 6500 },
          // { name: 'Administration', max: 16000 },
          // { name: 'Information Technology', max: 30000 },
          // { name: 'Customer Support', max: 38000 },
          // { name: 'Development', max: 52000 },
          // { name: 'Marketing', max: 25000 }
          { name: 'Sales' },
          { name: 'Administration' },
          { name: 'Information Technology' },
          { name: 'Customer Support' },
          { name: 'Development' },
          { name: 'Marketing' }
        ],
        splitLine: {
          // 外环分割线样式
          lineStyle: {
            color: '#45BCE4',
            type: 'dashed'
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          // 坐标轴线样式设置
          lineStyle: {
            color: '#45BCE4'
          }
        }
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget',
              itemStyle: {
                // 多边形线颜色
                color: '#47EB99'
              },
              areaStyle: {
                opacity: 0.5
              }
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending',
              itemStyle: {
                color: '#47EAEB'
              },
              areaStyle: {
                opacity: 0.5
              }
            }
          ]
        }
      ]
    }
    return option
  },

  setOption2(data) {
    function Pie() {
      let dataArr = []
      for (var i = 0; i < 150; i++) {
        if (i % 2 === 0) {
          dataArr.push({
            name: (i + 1).toString(),
            value: 50,
            itemStyle: {
              normal: {
                color: '#00AFFF',
                borderWidth: 0,
                borderColor: 'rgba(0,0,0,0)'
              }
            }
          })
        } else {
          dataArr.push({
            name: (i + 1).toString(),
            value: 100,
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: 'rgba(0,0,0,0)'
              }
            }
          })
        }
      }
      return dataArr
    }
    const option = {
      // title: {
      //   text: '',
      //   textStyle: {
      //     fontWeight: 'normal',
      //     fontSize: 25,
      //     color: 'rgb(97, 142, 205)'
      //   }
      // },
      series: [
        {
          // value: 50, //  内容 配合formatter
          type: 'liquidFill',
          radius: '70%', // 控制中间圆球的尺寸（此处可以理解为距离外圈圆的距离控制）
          center: ['50%', '50%'],
          data: [
            0.6,
            {
              value: 0.6,
              direction: 'left' //波浪方向
            }
          ], // data个数代表波浪数
          backgroundStyle: {
            borderWidth: 1,
            color: 'rgba(62, 208, 255, 1)' // 球体本景色
          },
          amplitude: '6%', //波浪的振幅
          // 修改波浪颜色
          // color: ['#0286ea', 'l#0b99ff'], // 每个波浪不同颜色，颜色数组长度为对应的波浪个数
          color: [
            {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 1,
                  color: '#6CDEFC'
                },
                {
                  offset: 0,
                  color: '#429BF7'
                }
              ],
              globalCoord: false
            }
          ],
          label: {
            // formatter: 0.87 * 100 + '\n%',
            formatter: 0.6 * 100 + '{d|%}',
            //  formatter: function(params){
            //     return params.value* 100 + " \n%";
            // },
            rich: {
              d: {
                fontSize: 36
              }
            },
            textStyle: {
              fontSize: 48,
              color: '#fff'
            }
          },
          outline: {
            show: false
          }
        },
        {
          type: 'pie',
          z: 1,
          center: ['50%', '50%'],
          radius: ['72%', '73.5%'], // 控制外圈圆的粗细
          hoverAnimation: false,
          data: [
            {
              name: '',
              value: 500,
              labelLine: {
                show: false
              },
              itemStyle: {
                color: '#00AFFF'
              },
              emphasis: {
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: '#00AFFF'
                }
              }
            }
          ]
        },
        {
          //外发光
          type: 'pie',
          z: 1,
          zlevel: -1,
          radius: ['70%', '90.5%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          clockWise: false,
          itemStyle: {
            normal: {
              borderWidth: 20,
              color: 'rgba(224,242,255,0.3)'
            }
          },
          label: {
            show: false
          },
          data: [100]
        },
        {
          //底层外发光
          type: 'pie',
          z: 1,
          zlevel: -2,
          radius: ['70%', '100%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          clockWise: false,
          itemStyle: {
            normal: {
              borderWidth: 20,
              color: 'rgba(224,242,255,.2)'
            }
          },
          label: {
            show: false
          },
          data: [100]
        },
        {
          type: 'pie',
          zlevel: 0,
          silent: true,
          radius: ['78%', '80%'],
          z: 1,
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          data: Pie()
        }
      ]
    }
    return option
  }
}
