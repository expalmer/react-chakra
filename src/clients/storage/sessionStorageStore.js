import { Storage } from './storage'

export class SessionStorageStore extends Storage {
  constructor() {
    super(window.sessionStorage)
  }
}
