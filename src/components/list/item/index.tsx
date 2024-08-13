import React from 'react'
import style from './item.module.scss'
import { iTasks } from '../../../types/tasks'

interface Props extends iTasks {
    selectTask: (taskSelected: iTasks) => void
}

export default function Item({ tasks, time, select, complete, id, selectTask }: Props) {
    return (
        <li className={`${style.item} ${select ? style.itemSelect : ''} ${complete ? style.itemComplete : ''} `} onClick={() => !complete && selectTask({
            tasks,
            time,
            select,
            complete,
            id
        })}>
            <h3>{tasks}</h3>
            <span>{time}</span>
            {complete && <span className={style.complete} aria-label='Tarefa concluida'></span>}
        </li>
    )
}
