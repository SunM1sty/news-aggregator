import { GetterTree, ActionTree, MutationTree } from 'vuex'

import type { NewsItem } from '~/types/NewsItem'
import type { ResourceItem } from '~/types/ResourceItem'
import type { NewsOutputItem } from '~/types/NewsOutputItem'
import type { StateType } from '~/types/State'

import { parseXml } from '~/utils/parseXml'

export const state = (): StateType => ({
  news: [] as NewsItem[],
  filteredNews: [] as NewsItem[],
  newsPerPage: 4 as number,
  resources: [
    {
      name: 'All',
      resource: 'all',
      link: null
    },
    {
      name: 'Lenta.ru',
      resource: 'lenta.ru',
      link: 'https://lenta.ru/rss/news'
    },
    {
      name: 'Mos.ru',
      resource: 'mos.ru',
      link: 'https://www.mos.ru/rss'
    }
  ] as ResourceItem[],
  newsOutputTypes: [
    {
      type: 'list',
      imgName: 'list-type-icon.svg'
    },
    {
      type: 'tiles',
      imgName: 'tile-type-icon.svg'
    }
  ] as NewsOutputItem[]
})

export type RootState = StateType

export const getters: GetterTree<StateType, RootState> = {
  getNewsOnPage: state => (payload: { start: number; end: number }) =>
    state.filteredNews.slice(payload.start, payload.end)
}

export const mutations: MutationTree<RootState> = {
  setNews: (state, payload: NewsItem[]) => (state.news = payload),
  setFilteredNews: (state, payload: { resource?: string; search?: string }) => {
    let filteredNews: NewsItem[] = JSON.parse(JSON.stringify(state.news))

    if (!payload) {
      return (state.filteredNews = filteredNews)
    }

    if (payload?.resource && filteredNews.length && payload.resource !== 'all') {
      filteredNews = filteredNews.filter(
        (item: NewsItem) => payload.resource && item.resource.includes(payload?.resource)
      )
    }

    if (payload?.search && filteredNews.length) {
      const filter = payload.search.toLowerCase()
      filteredNews = filteredNews.filter(
        item =>
          item.title.toLowerCase().includes(filter) ||
          item.description?.toLowerCase().includes(filter)
      )
    }

    state.filteredNews = filteredNews
  }
}

export const actions: ActionTree<StateType, RootState> = {
  fetchNews: async ({ commit, state }) => {
    const news: NewsItem[] = []

    for (const resource of state.resources) {
      if (resource.link) {
        const returnedArray = await parseXml(resource.link)
        news.push(...returnedArray)
      }
    }

    commit('setNews', news)
  },
  handleNewsOnPage: ({ commit }, payload) => {
    commit('setNewsOnPage', payload)
  },
  handleFilteredNews: ({ commit }, payload = null) => {
    commit('setFilteredNews', payload)
  }
}
