import {EChartsOption} from 'echarts-for-react'
import * as echarts from 'echarts'

const createGaugeChartData = (): EChartsOption => {
  const axisLineColor = new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    {offset: 1, color: '#18C8FF'},
    {offset: 0, color: '#18C8FF00'},
  ])
  const ProgressColor = new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    {offset: 0, color: '#5C55E9'},
    {offset: 1, color: '#19C5FE'},
  ])
  const gradientRampWarm = new echarts.graphic.LinearGradient(1, 0, 0, 0, [
    {offset: 0, color: '#033D71'},
    {offset: 1, color: '#592F35'},
  ])
  const unit = '%'
  const generalOptions = {
    name: '',
    type: 'gauge',
    startAngle: 180,
    center: ['50%', '90%'],
    endAngle: 0,
    axisLine: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    detail: {
      show: false,
    },
  }
  const option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      // 外层刻度 图标名称 指针
      {
        z: 10,
        name: 'Pressure',
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        // 仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
        radius: '140%',

        center: ['50%', '90%'],

        title: {
          color: '#FFB24D ',
          textBorderColor: 'FFB24D',
          textShadowColor: '#FFB24D',
          textShadowBlur: 10,
          offsetCenter: ['-90%', '-100%'],
        },

        axisLine: {
          show: true,
          lineStyle: {
            color: [[1, axisLineColor]],
            width: 1,
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          distance: 0,
        },
        axisLabel: {
          distance: -10,
        },
        detail: {
          show: false,
        },

        data: [
          {
            value: '73',
            name: 'SCORE',
            itemStyle: {
              color: 'white',
            },
          },
        ],
      },
      // 内层真实数据进度 单位
      {
        ...generalOptions,
        z: 100,
        // 仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
        radius: '110%',
        title: {
          color: '#fff',
          offsetCenter: ['0%', '-75%'],
        },
        progress: {
          show: true,
          width: 8,
          itemStyle: {
            color: ProgressColor,
          },
        },
        data: [
          {
            value: '73',
            name: unit,
            itemStyle: {
              color: 'transparent',
            },
          },
        ],
      },
      // 较宽的装饰环
      {
        ...generalOptions,

        // 仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
        radius: '95%',

        progress: {
          show: true,
          width: 30,
          itemStyle: {
            color: gradientRampWarm,
          },
        },

        data: [
          {
            value: '100',
            itemStyle: {
              color: 'transparent',
            },
          },
        ],
      },
      // 最内部的装饰线
      {
        ...generalOptions,
        // 仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
        radius: '55%',

        progress: {
          show: true,
          width: 1,
          itemStyle: {
            color: gradientRampWarm,
          },
        },

        data: [
          {
            value: '100',
            itemStyle: {
              color: 'transparent',
            },
          },
        ],
      },
    ],
  }
  return option
}
const createBarChartData = (): EChartsOption => {
  const unit = '%'

  const option = {
    xAxis: {
      type: 'category',
      position: 'top',

      data: ['A相', 'B相', 'C相'],
      axisLine: {show: false},
      axisLabel: {show: true},
      axisTick: {show: false},
    },
    yAxis: {
      type: 'value',
      axisLine: {show: false},
      axisLabel: {show: false},
      splitLine: {show: false},
    },

    series: [
      {
        data: ['0.08', '0.1', '0.25'],
        type: 'bar',
        barWidth: '45',
        showBackground: true,
        label: {
          show: true,
          color: '#fff',
          fontWeight: 'bold',
          formatter: (val: any) => val.value + 'mA',

          position: 'bottom',
        },
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
          borderColor: '#A3DBEA',
          borderWidth: 1,
        },
        itemStyle: {
          color: '#A3DBEA',
          borderWidth: 1,
        },
      },
    ],
  }
  return option
}
const createLineChartData = (): EChartsOption => {
  const unit = '%'

  const option = {
    title: {
      text: 'Stacked Line',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  }
  return option
}

export {createGaugeChartData, createBarChartData, createLineChartData}
