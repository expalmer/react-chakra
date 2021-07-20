export class Storage {
  constructor(store) {
    this.store = store
  }

  get(key) {
    const value = this.store.getItem(key)
    return typeof value === 'string' ? value : undefined
  }

  set(key, value) {
    this.store.setItem(key, value)
  }

  remove(key) {
    this.store.removeItem(key)
  }
}
