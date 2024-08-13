import { iTasks } from '../../types/tasks'
import Item from './item'
import style from './list.module.scss'

interface Props {
    tasks: iTasks[],
    selectTask: (taskSelected: iTasks) => void
}

export default function List({ tasks, selectTask }: Props) {

    return (
        <aside className={style.taskList}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tasks.map((task) => (
                    <Item selectTask={selectTask} key={task.id} {...task} />
                ))}
            </ul>
        </aside>
    )
}