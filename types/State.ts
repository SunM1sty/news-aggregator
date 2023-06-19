import type { NewsItem } from '~/types/NewsItem'
import type { ResourceItem } from '~/types/ResourceItem'
import type { NewsOutputItem } from '~/types/NewsOutputItem'

export type StateType = {
  news: NewsItem[]
  filteredNews: NewsItem[]
  newsPerPage: number
  resources: ResourceItem[]
  newsOutputTypes: NewsOutputItem[]
}
