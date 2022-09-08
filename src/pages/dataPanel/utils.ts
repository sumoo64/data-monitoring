import {EChartsOption} from 'echarts-for-react'
import * as echarts from 'echarts'

const createGaugeChartData = (): EChartsOption => {
  const option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        radius: '120%',

        center: ['50%', '90%'],

        title: {
          color: '#FFB24D ',
          textBorderColor: 'FFB24D',
          textShadowColor: '#FFB24D',
          textShadowBlur: 10,
          offsetCenter: ['-100%', '-100%'],
        },
        detail: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {width: 1},
        },
        progress: {
          show: true,
          width: 10,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {offset: 0, color: '#18C8FF'},
              {offset: 1, color: '#5C53DE'},
            ]),
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          distance: -30,
        },
        data: [
          {
            value: 50,
            name: 'SCORE',
            itemStyle: {
              color: 'red',
            },
          },
        ],
      },
      // {
      //   type: 'gauge',
      //   startAngle: 180,
      //   endAngle: 0,

      //   center: ['50%', '90%'],
      //   radius: '75%',
      //   title: {
      //     color: '#FFB24D ',
      //     textBorderColor: 'FFB24D',
      //     textShadowColor: '#FFB24D',
      //     textShadowBlur: 10,
      //     offsetCenter: ['-100%', '-100%'],
      //   },
      //   detail: {
      //     show: false,
      //   },
      //   axisLine: {
      //     show: true,
      //     lineStyle: {width: 1},
      //   },
      //   progress: {
      //     show: true,
      //     width: 10,
      //     itemStyle: {
      //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //         {offset: 0, color: '#18C8FF'},
      //         {offset: 1, color: '#5C53DE'},
      //       ]),
      //     },
      //   },
      //   splitLine: {
      //     show: false,
      //   },
      //   axisTick: {
      //     distance: 20,
      //     splitNumber: 10,
      //     color: 'red',
      //   },
      //   data: [
      //     {
      //       value: 50,
      //       itemStyle: {
      //         color: 'transparent',
      //       },
      //     },
      //   ],
      // },
    ],
  }
  return option
}

export {createGaugeChartData}
