import { Storage } from './storage'

export class LocalStorageStore extends Storage {
  constructor() {
    super(window.localStorage)
  }
}
