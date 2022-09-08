/*
 * @Author: wdy
 * @Date: 2020-05-22 16:41:45
 * @Last Modified by: xsc
 * @Last Modified time: 2022-09-07 10:27:55
 */

import React, {FunctionComponent} from 'react'
import {Switch, Route, RouteProps} from 'react-router-dom'
// types
import {TypeEquipment} from '../../type'
// config
// api
// util
// store
// component
import DataPanel from 'src/pages/dataPanel/index'
import EquipmentDistribution from 'src/pages/equipmentDistribution/index'
import EventStatistics from 'src/pages/eventStatistics/index'

type TypeProps = Partial<{
  equipment: TypeEquipment
}>

const ViewRouter: FunctionComponent<TypeProps> = props => {
  const {equipment} = props
  return (
    <Switch>
      {/* 首页 */}
      <Route path={'/root/dataPanel'} exact component={DataPanel} />
      <Route path={'/root/equipmentDistribution'} exact component={EquipmentDistribution} />
      <Route path={'/root/eventStatistics'} exact component={EventStatistics} />
    </Switch>
  )
}

export default ViewRouter
