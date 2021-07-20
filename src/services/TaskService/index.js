import { SessionStorageStore } from '../../clients/storage'

class TaskService {
  constructor(session) {
    this.session = session
    this.sessionKey = 'tasks'
  }

  setSession(value) {
    this.session.set(this.sessionKey, JSON.stringify(value))
  }

  getSession() {
    const value = this.session.get(this.sessionKey)
    return value ? JSON.parse(value) : undefined
  }

  async getData() {
    const { view, reverse, items } = this.getSession() || {
      view: 'all',
      reverse: true,
      items: [],
    }

    return { view, reverse, items }
  }

  async add(task) {
    const data = await this.getData()

    const nextItems = [
      ...data.items,
      {
        id: Date.now(),
        task,
        done: false,
      },
    ]

    this.setSession({ ...data, items: nextItems })
  }

  async toggleDone(taskId) {
    const data = await this.getData()

    const nextItems = data.items.map(item => {
      if (String(item.id) === String(taskId)) {
        return { ...item, done: !item.done }
      }
      return item
    })

    this.setSession({ ...data, items: nextItems })
  }

  async remove(taskId) {
    const data = await this.getData()

    const nextItems = data.items.filter(
      item => String(item.id) !== String(taskId)
    )

    this.setSession({ ...data, items: nextItems })
  }
}

export const taskService = new TaskService(new SessionStorageStore())
