import jwt from 'jsonwebtoken'

import * as fakedata from '../../clients/fake'
import { LocalStorageStore } from '../../clients/storage'

class UserService {
  constructor(fake, storage) {
    this.fake = fake
    this.storage = storage
    this.storageKey = 'token'
  }

  async getUserByEmailAndPass(email, pass) {
    const users = await this.fake.getUsers()

    return users.find(user => user.email === email && user.pass === pass)
  }

  async login(email, pass) {
    const user = await this.getUserByEmailAndPass(email, pass)
    if (!user) {
      throw new Error('Invalid credentials')
    }
    const { id, username } = user
    const token = jwt.sign({ id, username, email }, 'shhhhh')

    this.storage.set(this.storageKey, token)

    return user
  }

  async logout() {
    this.storage.remove(this.storageKey)
  }

  getCachedUser() {
    const token = this.storage.get(this.storageKey)
    try {
      return token ? jwt.decode(token) : undefined
    } catch (err) {
      throw Error(err.message)
    }
  }
}

export const userService = new UserService(fakedata, new LocalStorageStore())
