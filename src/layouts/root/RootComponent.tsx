/*
 * @Author: xsc
 * @Date: 2022-09-07 15:04:28
 * @Last Modified by: xsc
 * @Last Modified time: 2022-09-07 16:59:42
 */

import styles from './RootComponent.module.less'
import {Collapse, Row, Col} from 'antd'
import React, {Fragment, ReactNode, FunctionComponent, useEffect, useState} from 'react'
// type
import {TypeTime, TypeNode, TypeEquipment} from './type'
// config

import {CLOCK, NODES} from './config'
// api
// util
import classNames from 'classnames'
import moment from 'moment'
import 'moment/locale/zh-cn'
// store
// component

import ViewRouter from './components/viewRouter/ViewRouter'
import {pageConfig} from '../root/components/viewRouter/config'

const {Panel} = Collapse
const RootComponent: FunctionComponent<any> = props => {
  const [acitveMenu, setActiveMenu] = useState<string>('dataPanel') //当前界面
  const [time, setTime] = useState<TypeTime>({})

  const [nodes, setNodes] = useState<TypeNode[]>(NODES) //所有站线
  const [acitveNode, setActiveNode] = useState<TypeNode>({}) //当前站线
  const [activeEquipment, setActiveEquipment] = useState<TypeEquipment>({}) //当前设备
  // const [acitveMenu, setActiveMenu] = useState<string>('dataPanel') //当前界面

  const onClickMenu = (page: any) => {
    const {path} = page
    setActiveMenu(path)
    props.history.push({
      pathname: `/root/${path}`,
    })
  }

  const getTimeFunc = () => {
    moment().locale('zh-cn')
    const _day = moment().format('HH:mm:ss')
    const _year = moment().format('YYYY-MM-DD')
    const _week = moment().format('dddd')

    setTime({year: _year, day: _day, week: _week})
  }

  // useEffect(() => {
  //   console.log(time)
  // }, [time])

  // 时间
  useEffect(() => {
    const getTimeInterval = setInterval(() => getTimeFunc(), 1000)
    return () => {
      clearInterval(getTimeInterval)
    }
  }, [])

  const renderHeader = () => (
    <div className={styles['title-container']}>
      <div className={styles['logo']} />
      <section className={styles['menu']}>{renderTempRouter()}</section>
      <section className={styles['title']} />
      <section className={styles['clock']}>{renderClock()}</section>
    </div>
  )
  // 时钟
  const renderClock = () => (
    <>
      {CLOCK.map(el => (
        <span className={styles[el]} key={el}>
          {time[el]}
        </span>
      ))}
    </>
  )
  const renderTempRouter = () =>
    pageConfig.map((el: any, idx) => (
      <section className={classNames(styles['menu-item'], acitveMenu === el.path && styles['active-menu'])} key={el.id} onClick={() => onClickMenu(el)}>
        {el.name}
      </section>
    ))
  const renderAside = () => {
    return (
      <Collapse className={styles['collapse']} expandIcon={() => null} ghost>
        {nodes.map((node, idx) => (
          <Panel header={node.name} key={node.id || idx}>
            <section className={styles['panel-container']}>
              {node.equipments?.map((equipment, idx) => (
                <div className={classNames(styles['panel-item'], activeEquipment.id === equipment.id && styles['active'])} key={equipment.id || idx} onClick={() => setActiveEquipment(equipment)}>
                  {equipment.name}
                </div>
              ))}
            </section>
          </Panel>
        ))}
      </Collapse>
    )
  }
  return (
    <div className={styles['body']}>
      <header className={styles['header']}>{renderHeader()}</header>
      <Row gutter={16} className={styles['main-container']}>
        <Col span={2} className={styles['aside-container']}>
          {renderAside()}
        </Col>
        <Col span={22}>
          <ViewRouter equipment={activeEquipment} />
        </Col>
      </Row>
    </div>
  )
}

export default RootComponent
