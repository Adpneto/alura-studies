import React, { Component } from 'react'
import Button from '../button'
import style from './form.module.scss'
import { iTasks } from '../../types/tasks'
import { v4 as uuidv4} from 'uuid'

export class Form extends Component<{
  setTasks: React.Dispatch<React.SetStateAction<iTasks[]>>
}> {
  state = {
    tasks: "",
    time: "00:00"
  }

  addTask(e: React.FormEvent) {
    e.preventDefault()
    this.props.setTasks(tasksOld =>
      [
        ...tasksOld,
        {
          ...this.state,
          select: false,
          complete: false,
          id: uuidv4()
        }
      ])
    this.setState({
      task: "",
      time: "00:00"
    })
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor='task'>Adicione um novo estudo</label>
          <input type="text" name='task' value={this.state.tasks} onChange={event => this.setState({ ...this.state, tasks: event.target.value })} id="task" placeholder='O que você quer estudar?' required />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input type="time" step='1' name='time' value={this.state.time} onChange={event => this.setState({ ...this.state, time: event.target.value })} id='time' min='00:00:00' max='01:30:00' required />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    )
  }
}

export default Form;