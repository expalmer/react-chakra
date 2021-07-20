import { Api } from '../../clients/api'

class RickAndMortyService {
  constructor() {
    this.api = new Api({
      baseURL: 'https://rickandmortyapi.com/api',
    })
  }

  async getCharacters({ page }) {
    const { data } = await this.api.get(`/character?page=${page}`)

    return data.results
  }
}

export const rickAndMortyService = new RickAndMortyService()
