import { useEffect, useState } from 'react'
import { taskService } from '../../../services/TaskService'

export const useTodo = () => {
  const [todo, setTodo] = useState({
    view: 1,
    items: [],
    reverse: true,
  })

  const getTasks = async () => {
    const { view, reverse, items } = await taskService.getData()
    setTodo({
      view,
      reverse,
      items,
    })
  }

  useEffect(() => {
    getTasks()
  }, [])

  const addTask = async task => {
    await taskService.add(task)
    getTasks()
  }

  const removeTask = async taskId => {
    await taskService.remove(taskId)
    getTasks()
  }

  const toggleDoneTask = async taskId => {
    await taskService.toggleDone(taskId)
    getTasks()
  }

  return {
    view: todo.view,
    reverse: todo.reverse,
    items: todo.items,
    addTask,
    removeTask,
    toggleDoneTask,
  }
}
