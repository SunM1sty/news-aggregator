import type { NewsItem } from '~/types/NewsItem'
import type { ResourceItem } from '~/types/ResourceItem'
import type { NewsDisplayOption } from '~/types/NewsDisplayOption'

export type StateType = {
  news: NewsItem[]
  newsPerPage: number
  resources: ResourceItem[]
  newsDisplayOptions: NewsDisplayOption[]
  filters: {
    search: string | null
    resource: string | null
  }
  activeNewsDisplayOption: string
  activePage: number
}
