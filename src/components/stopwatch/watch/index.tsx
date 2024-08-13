import React from 'react'
import style from './watch.module.scss'

interface Props {
  time: number | undefined
}

export default function Watch({ time = 0 }: Props) {

  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minutesD, minutesU] = String(minutes).padStart(2, '0')
  const [secondsD, secondsU] = String(seconds).padStart(2, '0')

  return (
    <>
        <span className={style.watchNumber}>{minutesD}</span>
        <span className={style.watchNumber}>{minutesU}</span>
        <span className={style.watchDivs}>:</span>
        <span className={style.watchNumber}>{secondsD}</span>
        <span className={style.watchNumber}>{secondsU}</span>
    </>
  )
}
