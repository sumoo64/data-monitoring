import styles from './RootComponent.module.less'
import {Menu, Layout, Button, message} from 'antd'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import React, {Fragment, ReactNode, FunctionComponent, useEffect, useState} from 'react'
// type
// config
// api
// util
// store
// component

import UserInfo from './components/userInfo/UserInfo'
import ViewRouter from './components/viewRouter/ViewRouter'

const {Header, Content, Sider, Footer} = Layout
const {SubMenu} = Menu

const RootComponent: FunctionComponent<any> = props => {
  const renderHeader = () => <div className={styles['title']}>大理配网线路数据监测</div>

  return (
    <body className={styles['body']}>
      <header className={styles['header']}>{renderHeader()}</header>
      <aside className={styles['aside']}></aside>
    </body>
  )
}

export default RootComponent
