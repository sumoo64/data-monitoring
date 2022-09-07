import styles from './LoginComponent.module.less'
import React from 'react'
// type
import type {FunctionComponent} from 'react'

console.log(styles)

const LoginComponent: FunctionComponent<any> = props => <section className={styles['login-container']}>loginnnn</section>

export default LoginComponent
