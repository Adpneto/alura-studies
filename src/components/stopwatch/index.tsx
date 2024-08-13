import React, { useEffect, useState } from 'react'
import Button from '../button'
import Watch from './watch'
import style from './stopwatch.module.scss'
import { iTasks } from '../../types/tasks'
import { timeSec } from '../../common/utils/data'

interface Props {
  select: iTasks | undefined,
  fTask: () => void
}

export default function Stopwatch({ select, fTask }: Props) {

  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (select?.time){
      setTime(timeSec(select.time))
    }
  }, [select])

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1)
        return regressive(count - 1)
      }
      fTask()
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
        <p className={style.title}>Escolha um card e inicie o cronometro</p>
        <div className={style.stopwatchWrapper}>
            <Watch time={time}/>
        </div>
        <Button onClick={() => regressive(time)}>Começar</Button>
    </div>
  )
}
