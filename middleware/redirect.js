export default function ({ redirect, route, store }) {
  const openingPage = Number(route.params.page)

  if (!openingPage || openingPage < 1) {
    return redirect('/1', route.query)
  }

  const pagination = store.getters.getNewsPagination
  const paginationItemKeys = Object.keys(pagination)
  const lastKey = paginationItemKeys[paginationItemKeys.length - 1]
  const lastNewsPage = pagination[lastKey]

  if (openingPage > lastNewsPage) {
    return redirect(`/${lastNewsPage}`, route.query)
  }
}
