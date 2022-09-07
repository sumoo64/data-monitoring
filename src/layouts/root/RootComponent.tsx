import styles from './RootComponent.module.less'
import React, {Fragment, ReactNode, FunctionComponent, useEffect, useState} from 'react'
// type
// config
// api
// util
// store
// component

import UserInfo from './components/userInfo/UserInfo'
import ViewRouter from './components/viewRouter/ViewRouter'
import {stringify} from 'querystring'
import {pageConfig} from '../root/components/viewRouter/config'

const RootComponent: FunctionComponent<any> = props => {
  const renderHeader = () => <div className={styles['title']}>大理配网线路数据监测</div>

  const onClickMenu = (page: any) => {
    const {path} = page
    props.history.push({
      pathname: `/root/${path}`,
    })
  }
  const renderTempRouter = () =>
    pageConfig.map((el: any) => (
      <section className={styles['menu-item']} key={el.id} onClick={() => onClickMenu(el)}>
        {el.name}
      </section>
    ))

  return (
    <body className={styles['body']}>
      <header className={styles['header']}>{renderHeader()}</header>
      <aside className={styles['aside']}>{renderTempRouter()}</aside>
      <section className={styles['main-container']}>
        <ViewRouter />
      </section>
    </body>
  )
}

export default RootComponent
