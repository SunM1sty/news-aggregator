import axios from 'axios'
import { parseString } from 'xml2js'

import type { NewsItem } from '~/types/NewsItem'

import { getFormatedDate } from '~/utils/formatDate'

export const parseXml = async (sourceUrl: string) => {
  const response = await axios.get(sourceUrl)

  const xml = response.data

  const newsArray: NewsItem[] = []

  parseString(xml, { trim: true }, (err, result) => {
    if (err) {
      console.error(err)
      return
    }

    try {
      const resource = result.rss.channel[0].link[0]

      result.rss.channel[0].item.map((item: any) => {
        const date = getFormatedDate(item.pubDate[0] as string)
        const newsItem: NewsItem = {
          id: (Date.now() + Math.random()).toString(),
          title: item.title[0],
          link: item.link[0],
          posted: date,
          resource,
          image: item.enclosure[0].$.url
        }

        if (item.description) {
          newsItem.description = item.description[0]
        }

        newsArray.push(newsItem)
      })
    } catch (error) {
      throw new Error('Failed to Parse XML')
    }
  })

  return newsArray
}
