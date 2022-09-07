/*
 * @Author: wdy
 * @Date: 2020-05-22 16:41:45
 * @Last Modified by: xsc
 * @Last Modified time: 2022-09-06 17:47:41
 */

import React, {FunctionComponent} from 'react'
import {Switch, Route, RouteProps} from 'react-router-dom'
// types
// config
// api
// util
// store
// component
import DataPanel from '../../../../pages/dataPanel/index'
import EquipmentDistribution from '../../../../pages/equipmentDistribution/index'
import EventStatistics from '../../../../pages/eventStatistics/index'

const ViewRouter: FunctionComponent<any> = props => (
  <Switch>
    {/* 首页 */}
    <Route path={'/root/dataPanel'} exact component={DataPanel} />
    <Route path={'/root/equipmentDistribution'} exact component={EquipmentDistribution} />
    <Route path={'/root/eventStatistics'} exact component={EventStatistics} />
  </Switch>
)

export default ViewRouter
