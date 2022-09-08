import styles from './DataPanelComponent.module.less'
import React from 'react'
import ReactEcharts from 'echarts-for-react'
import {Row, Col} from 'antd'
// type
import type {FunctionComponent} from 'react'

import {createGaugeChartData} from './utils'

const DataPanelComponent: FunctionComponent<any> = props => (
  <section className={styles['container']}>
    <Row gutter={12} className={styles['row-1']}>
      {[1, 2, 4].map(el => (
        <Col span={'6'} className={styles['chart-container']} key={el}>
          <ReactEcharts style={{width: '100%', height: '100%'}} option={createGaugeChartData()} />
        </Col>
      ))}

      <Col span={'6'}></Col>
    </Row>
  </section>
)

export default DataPanelComponent
