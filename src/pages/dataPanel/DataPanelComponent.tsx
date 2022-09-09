import styles from './DataPanelComponent.module.less'
import React from 'react'
import ReactEcharts from 'echarts-for-react'
import {Row, Col} from 'antd'
// type
import type {FunctionComponent} from 'react'

import {createGaugeChartData, createBarChartData, createLineChartData} from './utils'
import classNames from 'classnames'

const DataPanelComponent: FunctionComponent<any> = props => {
  const renderPhaseLighningStroke = (data: {name: string; value: string}) => {
    const {name = '-', value = '-'} = data
    return (
      <section className={styles['phase-item']} key={name}>
        <p className={classNames(styles['phase-title'], styles[`color-${name}`])}>{`${name}相`}</p>
        <div className={styles['phase-value-container']}>
          <span className={styles['phase-value']}>{`${value}次`}</span>
        </div>
      </section>
    )
  }

  return (
    <section className={styles['container']}>
      <Row gutter={12} className={styles['row-1']}>
        {[1, 2, 4].map(el => (
          <Col span={'6'} className={styles['chart-container']} key={el}>
            <ReactEcharts style={{width: '100%', height: '100%'}} option={createGaugeChartData()} />
          </Col>
        ))}
        <Col span={'6'} className={styles['lighning-stroke-container']}>
          <div className={styles['lighning-stroke-item']} />
          <span className={styles['title']}>雷击次数</span>
          <span className={styles['count']}>4次</span>
        </Col>
      </Row>
      <Row gutter={12} className={styles['row-2']}>
        <Col span={'6'} className={styles['col-1']}>
          <span className={styles['title']}>泄露电量最新值</span>
          <ReactEcharts style={{width: '100%', height: '95%'}} option={createBarChartData()} />
        </Col>
        <Col span={'6'} className={styles['col-2']}>
          <span className={styles['title']}>雷击累计次数</span>
          <section className={styles['lighning-stroke-count-container']}>
            {[
              {name: 'A', value: '6'},
              {name: 'B', value: '3'},
              {name: 'C', value: '1'},
            ].map(el => renderPhaseLighningStroke(el))}
          </section>
        </Col>
        <Col span={'12'} className={styles['col-3']}>
          <p className={classNames(styles['left-title'], styles['base-title'])}>泄露电流历史状态(mA)</p>
          <ReactEcharts style={{width: '100%', height: '100%'}} option={createLineChartData()} />
        </Col>
      </Row>
      {/* <Row gutter={12} className={styles['row-3']}>
      <Col span={'6'} className={styles['chart-container']}>
        <ReactEcharts style={{width: '100%', height: '100%'}} option={createBarChartData()} />
      </Col>
      <Col span={'6'} className={styles['lighning-stroke-container']}>
        <div className={styles['lighning-stroke-item']} />
        <span className={styles['title']}>雷击次数</span>
        <span className={styles['count']}>4次</span>
      </Col>
    </Row> */}
    </section>
  )
}

export default DataPanelComponent
