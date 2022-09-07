/*
 * @Author: wdy
 * @Date: 2020-05-22 16:41:45
 * @Last Modified by: xsc
 * @Last Modified time: 2022-09-06 11:16:46
 */

import React, {FunctionComponent} from 'react'
import {Switch, Route, RouteProps} from 'react-router-dom'
// types
// config
// api
// util
// store
// component
import Test from '../../../../pages/test/index'
import Test_01 from '../../../../pages/test_01/index'

const ViewRouter: FunctionComponent<any> = props => (
  <Switch>
    {/* 首页 */}
    <Route path={'/test'} exact component={Test} />
    <Route path={'/test_01'} exact component={Test_01} />
  </Switch>
)

export default ViewRouter
