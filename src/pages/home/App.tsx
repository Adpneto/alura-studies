import { useState } from 'react';
import Form from '../../components/form';
import List from '../../components/list';
import Stopwatch from '../../components/stopwatch';
import style from './app.module.scss'
import { iTasks } from '../../types/tasks';

function App() {

  const [tasks, setTasks] = useState<iTasks[]>([])
  const [select, setSelect] = useState<iTasks>()

  function selectTask(selected: iTasks) {
    setSelect(selected)
    setTasks(tasksOld => tasksOld.map(tasks => ({...tasks, 
      select: tasks.id === selected.id ? true : false
    })))
  }

  function fTask() {
    if (select) {
      setSelect(undefined)
      setTasks(tasksOld => tasksOld.map(tasks => {
        if(tasks.id === select.id) {
          return {
            ...tasks,
            select: false,
            complete: true
          }
        }
        return tasks
      }))
    }
  }
  return (
    <div className={style.App}>
      <Form setTasks={setTasks} />
      <Stopwatch select={select} fTask={fTask}/>
      <List tasks={tasks} selectTask={selectTask}/>
    </div>
  );
}

export default App;
