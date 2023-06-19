export const buildUrl = (page: number, queryParams: Object): string => {
  const buildURLQuery = (obj: Object) => {
    return Object.entries(obj)
      .map(pair => pair.map(encodeURIComponent).join('='))
      .join('&')
  }

  const urlParams = buildURLQuery(queryParams)

  const url = `/${page}?${urlParams}`
  return url
}
