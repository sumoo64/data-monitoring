/*
 * @Author: wdy
 * @Date: 2020-05-22 16:41:45
 * @Last Modified by: xsc
 * @Last Modified time: 2022-09-06 11:08:52
 */
// import styles from './UserInfo.module.less'
// import {Menu, Dropdown, Modal, Form, Input, message} from 'antd'
// import {CaretDownOutlined} from '@ant-design/icons'
import React, {Fragment, FunctionComponent, useState} from 'react'
// type
// config
// api
// util
// store
// component

const UserInfo: FunctionComponent<any> = props => {
  // const {userInfo} = props
  // const [form] = Form.useForm()

  // const layout = {
  //   labelCol: {span: 6},
  //   wrapperCol: {span: 18},
  // }

  // const [visibleChangePswModal, setVisibleChangePswModal] = useState(false)
  // const onClickUserInfoMenu = (key: string) => {
  //   switch (key) {
  //     case 'changePsw':
  //       setVisibleChangePswModal(true)
  //       break
  //     case 'signOut':
  //       signOut()
  //       break
  //     default:
  //       break
  //   }
  // }

  // const signOut = async () => {
  //   try {
  //     const {
  //       status,
  //       data: {code, msg},
  //     } = await logoutApi({
  //       're-token': sessionStorage.getItem('re-token'),
  //     })
  //     if (status === 200 && code === '201') {
  //       props.history.push({pathname: '/login'})
  //     } else {
  //       message.error(msg)
  //     }
  //   } catch (error) {}
  // }

  // const onCancelChangePsw = () => {
  //   form && form.resetFields()
  //   setVisibleChangePswModal(false)
  // }

  // const onConfirmChangePsw = async () => {
  //   try {
  //     const values = await form.validateFields()
  //     const {currentPassword, newPassword} = values
  //     if (userInfo.id) {
  //       const {code, msg} = await updateUserPasswordApi(userInfo.id, {
  //         currentPassword: SHA256.hex(currentPassword),
  //         newPassword: SHA256.hex(newPassword),
  //       })
  //       if (code === '201') {
  //         message.success('密码修改成功！')
  //         onCancelChangePsw()
  //       } else {
  //         message.error(`密码修改失败！${msg}`)
  //       }
  //     }
  //   } catch (error) {}
  // }

  return (
    <Fragment>
      {/* <Dropdown
        trigger={['click']}
        overlay={
          <Menu onClick={({item, key, keyPath, domEvent}) => onClickUserInfoMenu(key.toString())}>
            <Menu.Item key={'changePsw'}>修改密码</Menu.Item>
            <Menu.Item key={'signOut'}>退出</Menu.Item>
          </Menu>
        }>
        <div className={styles['user-info']}>
          {userInfo.name}
          <CaretDownOutlined />
        </div>
      </Dropdown>
      {visibleChangePswModal && (
        <Modal centered visible={true} title={'修改密码'} okText={'确认'} cancelText={'取消'} onCancel={onCancelChangePsw} onOk={onConfirmChangePsw}>
          <Form form={form} {...layout} layout={'horizontal'} name={'pswForm'}>
            <Form.Item name={'currentPassword'} label={'旧密码'} rules={[{required: true, message: '请输入旧密码！'}]}>
              <Input.Password />
            </Form.Item>
            <Form.Item
              name={'newPassword'}
              label={'新密码'}
              rules={[
                {required: true, message: '请输入新密码！'},
                {min: 8, message: '密码至少需要8位'},
                {pattern: /^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/, message: '当前密码强度过低，需要是数字，大小写字母和特殊字符!@#$%^&*?的组合'},
              ]}>
              <Input.Password />
            </Form.Item>
            <Form.Item
              name={'confirm'}
              label={'确认新密码'}
              dependencies={['newPassword']}
              rules={[
                {required: true, message: '请确认新密码！'},
                ({getFieldValue}) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('两次输入的密码不相同!'))
                  },
                }),
              ]}>
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
      )} */}
    </Fragment>
  )
}

export default UserInfo
