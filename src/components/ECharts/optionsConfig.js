import * as echarts from 'echarts'
import 'echarts-gl'
import wlimg from '../../assets/images/wl.png'

export const chartOptions = {
  setOption2() {
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
  },
  setSbxxOption(data) {
    const option = {
      grid: {
        top: '0%',
        left: '0',
        right: '0',
        bottom: '-5%'
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: '#031e559c',
        formatter: '{b}: {c}',
        textStyle: {
          color: '#fff'
        }
      },
      legend: {
        data: ['在线', '离线', '故障', '身份认证失败', '证书过期', '视频源头断开'],
        bottom: '0%',
        x: 'center',
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          type: 'pie',
          selectedMode: 'single',
          center: ['50%', '46%'],
          radius: [0, '40%'],
          label: {
            position: 'inner',
            fontSize: 14,
            color: '#fff'
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1, name: '身份认证失败' },
            { value: 1, name: '证书过期' },
            { value: 2, name: '视频源头断开' }
          ]
        },
        {
          type: 'pie',
          radius: ['60%', '80%'],
          center: ['50%', '46%'],
          labelLine: {
            show: false,
            length: 20
          },
          label: {
            color: '#fff',
            position: 'inner',
            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#fff',
                backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4
              }
            }
          },
          data: [
            { value: 70, name: '在线' },
            { value: 10, name: '离线' },
            { value: 2, name: '故障' }
          ]
        }
      ]
    }
    return option
  },
  setYhqkOption(data, type = 0) {
    const color = ['#33B5FF ', '#22E59C']
    const legendData = ['登录次数', '登录人数']
    const series = []
    const xPoint = []
    switch (type) {
      case 0:
        for (let i = 0; i < 10; i++) {
          let currentTime = new Date().getTime() - 3600 * 1000 * i
          let time = new Date(currentTime).toLocaleTimeString()
          xPoint.push(time)
        }
        for (let i = 0; i < legendData.length; i++) {
          const curData = []
          for (let j = 0; j < 10; j++) {
            curData.push(Math.floor(Math.random() * 100))
          }

          let obj = {
            name: legendData[i],
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              color: color[i % color.length],
              borderWidth: 6,
              borderColor: 'rgba(51, 181, 255, .2)'
            },
            lineStyle: {
              normal: {
                width: 2,
                color: color[i % color.length] // 线条颜色
              }
            },
            label: {
              show: false,
              color: 'rgba(255,255,255, 0.6)'
            },
            data: curData
          }
          series.push(obj)
        }
        break
      case 1:
        for (let i = 0; i < 7; i++) {
          // 修改循环次数为7
          let currentTime = new Date().getTime() - 24 * 3600 * 1000 * i // 修改为每天减少一天的时间
          let time = new Date(currentTime).toLocaleDateString() // 使用 toLocaleDateString 获取日期部分
          xPoint.push(time)
        }
        for (let i = 0; i < legendData.length; i++) {
          const curData = []
          for (let j = 0; j < 7; j++) {
            curData.push(Math.floor(Math.random() * 100))
          }

          let obj = {
            name: legendData[i],
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              color: color[i % color.length],
              borderWidth: 6,
              borderColor: 'rgba(51, 181, 255, .2)'
            },
            lineStyle: {
              normal: {
                width: 2,
                color: color[i % color.length] // 线条颜色
              }
            },
            label: {
              show: false,
              color: 'rgba(255,255,255, 0.6)'
            },
            data: curData
          }
          series.push(obj)
        }
        break
      case 2:
        for (let i = 0; i < 30; i++) {
          // 修改循环次数为30
          let currentTime = new Date().getTime() - 24 * 3600 * 1000 * i // 修改为每天减少一天的时间
          let time = new Date(currentTime).toLocaleDateString() // 使用 toLocaleDateString 获取日期部分
          xPoint.push(time)
        }
        for (let i = 0; i < legendData.length; i++) {
          const curData = []
          for (let j = 0; j < 30; j++) {
            curData.push(Math.floor(Math.random() * 100))
          }

          let obj = {
            name: legendData[i],
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              color: color[i % color.length],
              borderWidth: 6,
              borderColor: 'rgba(51, 181, 255, .2)'
            },
            lineStyle: {
              normal: {
                width: 2,
                color: color[i % color.length] // 线条颜色
              }
            },
            label: {
              show: false,
              color: 'rgba(255,255,255, 0.6)'
            },
            data: curData
          }
          series.push(obj)
        }
        break
    }

    const option = {
      grid: {
        top: '15%',
        bottom: '15%',
        left: '10%',
        right: '5%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          // X轴刻度标签
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: 12
        },
        axisLine: {
          // X轴线
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, .4)'
          }
        },
        splitLine: {
          // 网格线
          show: true,
          lineStyle: {
            type: 'dashed',
            width: 1,
            color: 'rgba(255, 255, 255, .2)'
          }
        },
        axisTick: {
          show: false
        },
        data: xPoint
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: 12
        },
        splitLine: {
          // 网格线
          show: true,
          lineStyle: {
            type: 'dashed',
            width: 1,
            color: 'rgba(255, 255, 255, .2)'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      legend: {
        show: false,
        data: legendData,
        left: 'center',
        top: 0,
        itemHeight: 8,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        },
        itemStyle: {
          borderWidth: 6,
          borderColor: 'rgba(51, 181, 255, .2)'
        }
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(33, 85, 154, .6)',
        borderWidth: 1,
        borderColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(85, 149, 233, .6)' // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(85, 149, 233, 0)' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        padding: 8,
        textStyle: {
          color: '#fff'
        },
        axisPointer: {
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255, .6)'
          }
        },
        extraCssText: 'box-shadow: 2px 2px 16px 1px rgba(0, 39, 102, 0.16)',
        formatter: function (params) {
          let content = `<div style='font-size: 14px; color: #fff;'>${params[0].name}</div>`
          if (Array.isArray(params)) {
            for (let i = 0; i < params.length; i++) {
              content += `
                     <div style='display: flex; align-items: center; padding: 4px; background: #21559A; margin-top: 4px; color: #fff;'>
                       <div style='width: 10px; height: 10px; background: ${params[i].color}; margin-right: 8px;'></div>
                       <div style='font-size: 12px; margin-right: 32px;'>${params[i].seriesName}</div>
                       <div style='font-size: 14px;'>${params[i].value}</div>
                     </div>
                   `
            }
          }
          return content
        }
      },
      series
    }
    return option
  },
  setBjzxOption(data, type = 0) {
    const color = ['#379ED7', '#F0BC1E']
    const legendData = ['已处理', '未处理']
    const series = []
    const xPoint = []
    switch (type) {
      case 0:
        for (let i = 0; i < 10; i++) {
          let currentTime = new Date().getTime() - 3600 * 1000 * i
          let time = new Date(currentTime).toLocaleTimeString()
          xPoint.push(time)
        }
        for (let i = 0; i < legendData.length; i++) {
          const curData = []
          for (let j = 0; j < 10; j++) {
            curData.push(Math.floor(Math.random() * 100))
          }

          let obj = {
            name: legendData[i],
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              color: color[i % color.length],
              borderWidth: 6,
              borderColor: 'rgba(51, 181, 255, .2)'
            },
            lineStyle: {
              normal: {
                width: 2,
                color: color[i % color.length] // 线条颜色
              }
            },
            label: {
              show: false,
              color: 'rgba(255,255,255, 0.6)'
            },
            data: curData
          }
          series.push(obj)
        }
        break
      case 1:
        for (let i = 0; i < 7; i++) {
          // 修改循环次数为7
          let currentTime = new Date().getTime() - 24 * 3600 * 1000 * i // 修改为每天减少一天的时间
          let time = new Date(currentTime).toLocaleDateString() // 使用 toLocaleDateString 获取日期部分
          xPoint.push(time)
        }
        for (let i = 0; i < legendData.length; i++) {
          const curData = []
          for (let j = 0; j < 7; j++) {
            curData.push(Math.floor(Math.random() * 100))
          }

          let obj = {
            name: legendData[i],
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              color: color[i % color.length],
              borderWidth: 6,
              borderColor: 'rgba(51, 181, 255, .2)'
            },
            lineStyle: {
              normal: {
                width: 2,
                color: color[i % color.length] // 线条颜色
              }
            },
            label: {
              show: false,
              color: 'rgba(255,255,255, 0.6)'
            },
            data: curData
          }
          series.push(obj)
        }
        break
      case 2:
        for (let i = 0; i < 30; i++) {
          // 修改循环次数为30
          let currentTime = new Date().getTime() - 24 * 3600 * 1000 * i // 修改为每天减少一天的时间
          let time = new Date(currentTime).toLocaleDateString() // 使用 toLocaleDateString 获取日期部分
          xPoint.push(time)
        }
        for (let i = 0; i < legendData.length; i++) {
          const curData = []
          for (let j = 0; j < 30; j++) {
            curData.push(Math.floor(Math.random() * 100))
          }

          let obj = {
            name: legendData[i],
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              color: color[i % color.length],
              borderWidth: 6,
              borderColor: 'rgba(51, 181, 255, .2)'
            },
            lineStyle: {
              normal: {
                width: 2,
                color: color[i % color.length] // 线条颜色
              }
            },
            label: {
              show: false,
              color: 'rgba(255,255,255, 0.6)'
            },
            data: curData
          }
          series.push(obj)
        }
        break
    }

    const option = {
      grid: {
        top: '15%',
        bottom: '15%',
        left: '10%',
        right: '5%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          // X轴刻度标签
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: 12
        },
        axisLine: {
          // X轴线
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, .4)'
          }
        },
        splitLine: {
          // 网格线
          show: true,
          lineStyle: {
            type: 'dashed',
            width: 1,
            color: 'rgba(255, 255, 255, .2)'
          }
        },
        axisTick: {
          show: false
        },
        data: xPoint
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: 12
        },
        splitLine: {
          // 网格线
          show: true,
          lineStyle: {
            type: 'dashed',
            width: 1,
            color: 'rgba(255, 255, 255, .2)'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      legend: {
        show: false,
        data: legendData,
        left: 'center',
        top: 0,
        itemHeight: 8,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        },
        itemStyle: {
          borderWidth: 6,
          borderColor: 'rgba(51, 181, 255, .2)'
        }
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(33, 85, 154, .6)',
        borderWidth: 1,
        borderColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(85, 149, 233, .6)' // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(85, 149, 233, 0)' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        padding: 8,
        textStyle: {
          color: '#fff'
        },
        axisPointer: {
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255, .6)'
          }
        },
        extraCssText: 'box-shadow: 2px 2px 16px 1px rgba(0, 39, 102, 0.16)',
        formatter: function (params) {
          let content = `<div style='font-size: 14px; color: #fff;'>${params[0].name}</div>`
          if (Array.isArray(params)) {
            for (let i = 0; i < params.length; i++) {
              content += `
                     <div style='display: flex; align-items: center; padding: 4px; background: #21559A; margin-top: 4px; color: #fff;'>
                       <div style='width: 10px; height: 10px; background: ${params[i].color}; margin-right: 8px;'></div>
                       <div style='font-size: 12px; margin-right: 32px;'>${params[i].seriesName}</div>
                       <div style='font-size: 14px;'>${params[i].value}</div>
                     </div>
                   `
            }
          }
          return content
        }
      },
      series
    }
    return option
  },
  setBjlxOption(data) {
    var bgImg =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbYAAAARCAYAAACxZ4mSAAAAAXNSR0IArs4c6QAABANJREFUeF7t3O9rG3UcB/D35y5dmjjbLq5JLJsynOgqA2c721lW7HCgCCLI9gf4QHFbQrOBj/dYWFOaqugD/wCHIIIoFKWsiza46kCWFeZQ6ixJusW0m+mP3N1HkiWhe3aPZN69A3lw3/t87+79+jz4EDgi8MFn/w0N7irhgOHA9EFcRqQABSjgawHxQ/rBy/qM7aD8y6is+CEvM1KAAhTws4DnB9vQvMYAdOWG5YafG83sFKAABfwi4OnBduRzDTlP4Om7S1jMn5QtvzSVOSlAAQr4WcC7g01Vhi/h2UoNpcVX5I6fm8zsFKAABfwk4NnBduiy9hmC0MKI3PRTQ5mVAhSggN8FPDnYBq5oWKvY32UjPzsmlt+bzPwUoAAF/CTgvcGmKoez6K/V8NfVMan4qZnMSgEKUIACgOcG29C87hFFYP6I/MEGU4ACFKCA/wQ8Ndj6r+nO0Cr2LdxCHifF9l87mZgCFKAABR4YbHsmNGQZSEIRqtOoYsNcw9RyBHbcRgLAzub6ll1D5vZNbEQPIGEAXY11gbWpmK6kpIITasZGcFoUkfo5R+AELHy0fA534mm8B0G0ya92DZ+svC+FaFrfMYC+xroB3bLwWfmc/OmqTarG4A/or5hY+m1Y1lztYREFKEABCnhO4IHB1juhr5qC4VZKB5gppSQbS+sxAUa3pZ8tpGS2d1JHTcWxdr0gWxqXmfpxbFKHRPHatj0/FVLy9e60vhAA3th2j6ullHwZy+hBsfBWu15wrTAuF92KH8rqk4YDXTgqS273sI4CFKAABbwn0B5sXRMa6RScNnD//xQVqBRXMR2JINxhIyFAR/OX191SBZnYI+hAAEkBgk2WamEVUzgvGzivnfFuJAGEm9fahIWp4j+oxXuQgOLR5nqtZiJTLqMa68YZAXoa9wDszSCmV0/J327IB2a0W8LYe+Ul5CHiuNnDGgpQgAIU8KZAe7DFJ/UEFM+1YmoAXxQT8ms0rW8awPOtdQv46nZKfo6n9XUAh9v1gm+K45KrH0cn9bihGGmds018t5KUuXhaXwZQ/zY+ClwqpuT7aFpHDOB4u14xv3JWvnVFrmoO/Ij+9U38nh+Te672sIgCFKAABTwr0BhskQu6d0cAb8O5/5akAyyXUvJp7wcaNzvwLlpvTypKhRQ+7ruAx6wAThkKozGgBOViFh/iotg9ae0JCs7U30xsXmutdB2Z3U+h0wwiIYodTc17BROZvjJMuwtJEXQ21gXrBQdTOCvrbtRfzOk+qaKWG5NbbupZQwEKUIAC3hb4X78VeXBOd4UVj+eO4jpE1NutYjoKUIACFHAjIENzOuCm8GGssRSKMBYXBqX6MD4fn4kCFKAABf57gX8BSq0+Tbg1W4gAAAAASUVORK5CYII='

    var datalist = [
      {
        name: '物品出界报警',
        value: 189
      },
      {
        name: '围界入侵报警',
        value: 168
      },
      {
        name: '检测未穿戴工服',
        value: 45
      },
      {
        name: '烟雾报警',
        value: 9
      },
      {
        name: '火焰报警',
        value: 2
      }
    ]

    const option = {
      //你的代码
      grid: {
        left: '15%',
        right: '5%',
        bottom: '10%',
        top: '5%'
      },
      xAxis: {
        show: false,
        type: 'value'
      },
      yAxis: [
        {
          type: 'category',
          inverse: true,
          axisLabel: {
            color: '#fff',
            fontSize: 14,
            margin: 10,
            formatter: (name, index) => {
              const id = index + 1
              return `{count|TOP}{num${index}|0${id}}`
            },
            rich: {
              count: {
                width: 32,
                height: 22,
                fontStyle: 'italic',
                fontWeight: 'bold',
                align: 'center',
                color: '#ffffff',
                fontSize: 16
              },
              num0: {
                width: 22,
                height: 22,
                fontStyle: 'italic',
                fontWeight: 'bold',
                align: 'center',
                color: '#f43339',
                fontSize: 16
              },
              num1: {
                width: 22,
                height: 22,
                fontStyle: 'italic',
                fontWeight: 'bold',
                align: 'center',
                color: '#ffff64',
                fontSize: 16
              },
              num2: {
                width: 22,
                height: 22,
                fontStyle: 'italic',
                fontWeight: 'bold',
                align: 'center',
                color: '#3b9bf8',
                fontSize: 16
              },
              num3: {
                width: 22,
                height: 22,
                fontStyle: 'italic',
                fontWeight: 'bold',
                align: 'center',
                color: '#0ec289',
                fontSize: 16
              },
              num4: {
                width: 22,
                height: 22,
                fontStyle: 'italic',
                fontWeight: 'bold',
                align: 'center',
                color: '#0ec289',
                fontSize: 16
              }
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: datalist.map((el) => {
            return el.name
          })
        },
        {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: true,
          axisLabel: {
            verticalAlign: 'top',
            textStyle: {
              color: '#ffffff',
              fontSize: '14',
              padding: [-5, 0, 0, -20]
            }
          },
          data: datalist.map((el) => {
            return el.value
          })
        }
      ],
      series: [
        {
          name: '值',
          type: 'bar',
          itemStyle: {
            normal: {
              // barBorderRadius: 30,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(24, 144, 254, 1)'
                },
                {
                  offset: 0.5,
                  color: '#16599b'
                },
                {
                  offset: 1,
                  color: '#0f4581'
                }
              ]),
              barBorderRadius: 2
            }
          },
          barWidth: 8,
          data: datalist,
          label: {
            show: true,
            // offset: [30, -16],
            padding: [10, 0, 10, 10],
            verticalAlign: 'top',
            color: '#75d8ff',
            fontWeight: 500,
            position: 'left',
            fontSize: 16,
            align: 'left',
            formatter: function (params) {
              return params.data.name
            }
          }
        },
        {
          type: 'pictorialBar',
          barWidth: '18',
          z: 99,
          silent: true,
          barCategoryGap: 20,
          symbol: 'image://' + bgImg,
          symbolOffset: [-45, 8, 50, 0],
          symbolClip: false,
          symbolBoundingData: 310,
          symbolPosition: 'center',
          symbolSize: ['100%', '100%'],
          label: {
            show: false
          },
          data: [300, 300, 300, 300, 300]
        }
      ]
    }
    return option
  },
  setMapOption(data, geoJson) {
    echarts.registerMap('china', geoJson)
    // 图表配置项
    const option = {
      tooltip: {
        trigger: 'item',
        position: 'inside',
        formatter: '{b}',
        backgroundColor: '#031e559c',
        textStyle: {
          color: '#FFFFFF',
          textalign: 'center',
          fontSize: '12px'
        }
      },
      series: [
        {
          type: 'map3D',
          map: 'china',
          data: geoJson.features.map((item) => {
            return item.properties
          }),
          // 地图的颜色
          itemStyle: {
            color: '#286ECA', // 地图板块的颜色
            opacity: 1, // 图形的不透明度 [ default: 1 ]
            borderWidth: 1, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域
            borderColor: '#286ECA' // 图形描边的颜色。[ default: #333 ]
          },
          // 标签的相关设置
          label: {
            show: true, // (地图上的城市名称)是否显示标签
            formatter: function (params) {
              return params.name ? params.name : ' '
            },
            textStyle: {
              // 标签的字体样式
              color: '#5faeff', // 地图初始化区域字体颜色
              fontSize: 12 // 字体大小
            }
          },
          // 鼠标 hover 高亮时图形和标签的样式
          emphasis: {
            label: {
              // label 高亮时的配置
              show: true,
              axisLabel: {
                color: '#fff', // 高亮时标签颜色变为 白色
                fontSize: 15 // 高亮时标签字体 变大
              }
            },
            itemStyle: {
              // itemStyle 高亮时的配置
              color: '#66ffff' // 高亮时地图板块颜色改变
            }
          },
          // 将echarts设置为纹理
          shading: 'realistic',
          realisticMaterial: {
            // 引入纹理贴图
            detailTexture: wlimg,
            textureTiling: 1
          },

          viewControl: {
            panMouseButton: 'left',
            rotateMouseButton: 'right',
            rotateSensitivity: 1, // 旋转操作的灵敏度，值越大越灵敏
            panSensitivity: 1, // 平移操作的灵敏度，值越大越灵敏
            zoomSensitivity: 2, // 缩放操作的灵敏度，值越大越灵敏
            distance: 120,
            minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
            maxAlpha: 90, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
            minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
            maxBeta: 360 // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
          }
        }
      ]
    }
    return option
  }
}
