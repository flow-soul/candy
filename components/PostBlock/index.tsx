import classNames from 'classnames'
import { useStore } from 'common/store'
import { observer } from 'utils/mobx'

import Router from 'next/router'
import React, { FC } from 'react'
import removeMd from 'remove-markdown'
import { parseDate } from 'utils/time'
import styles from './index.module.scss'

interface Props {
  date: Date | string
  title: string
  text: string
  slug: string
  map?: Map<string, string>
}

export const PostBlock: FC<Props> = observer((props) => {
  const {
    appStore: { viewport },
  } = useStore()
  const { date, title, text, slug } = props
  const parsedTime = viewport?.mobile
    ? parseDate(date, 'MM-DD ddd')
    : parseDate(date, 'YYYY-MM-DD ddd')
  const [d, week] = parsedTime.split(' ')

  const goToPost = () => {
    Router.push('/posts/[slug]', `/posts/${slug}`)
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <h1 className={styles.head}>
        {d}
        <small>（{week}）</small>
        {!viewport?.mobile && (
          <div className={styles.title} onClick={goToPost}>
            {title}
          </div>
        )}
      </h1>
      <div className={classNames('note-item', styles.text)}>
        {viewport?.mobile && (
          <h2 className={styles.title} onClick={goToPost}>
            {title}
          </h2>
        )}
        <article className="note-content">
          {removeMd(text).slice(0, 250) + '..'}
        </article>
        <section className={styles.navigator}>
          <button className={styles.btn} onClick={goToPost}>
            查看原文
          </button>
        </section>
      </div>
    </>
  )
})
