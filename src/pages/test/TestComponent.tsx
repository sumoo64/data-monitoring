import styles from './TestComponent.module.less'
import React from 'react'
// type
import type {FunctionComponent} from 'react'

const TestComponent: FunctionComponent<any> = props => <section className={styles['login-container']}>tset ...</section>

export default TestComponent
