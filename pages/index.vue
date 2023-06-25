<script lang="ts">
import Vue from 'vue'

import type { NewsDisplayOption } from '~/types/NewsDisplayOption'
import type { ResourceItem } from '~/types/ResourceItem'

export default Vue.extend({
  asyncData({ store, params, query }) {
    const currentPage = Number(params.page)
    store.dispatch('handleActivePage', currentPage)

    const searchFilter = query.search
    if (searchFilter) {
      store.dispatch('handleSearchFilter', searchFilter)
    }

    const resourceFilter = query.resource
    if (resourceFilter) {
      store.dispatch('handleResourceFilter', resourceFilter)
    }

    const newsDisplayOptions: NewsDisplayOption[] = store.getters.getNewsDisplayOptions
    const resourceArray: ResourceItem[] = store.getters.getResourceArray

    return {
      newsDisplayOptions,
      resourceArray
    }
  },
  computed: {
    activeNewsDisplayOption() {
      return this.$store.getters.getActiveNewsDisplayOption
    },
    newsListOnPage() {
      return this.$store.getters.getNewsListOnPage
    },
    paginationList() {
      return this.$store.getters.getNewsPagination
    }
  },
  mounted() {
    const newsDisplayOption = localStorage.getItem('newsDisplayOption')

    if (newsDisplayOption) {
      this.$store.dispatch('changeNewsDisplayOption', newsDisplayOption)
    }
  }
})
</script>

<template>
  <main class="main">
    <TheFilters :display-options="newsDisplayOptions" :resource-array="resourceArray" />
    <TheNewsList
      :news-list="newsListOnPage"
      :active-news-display-option="activeNewsDisplayOption"
    />
    <ThePagination :pagination-list="paginationList" />
  </main>
</template>

<style lang="scss" scoped>
.main {
  margin-top: 25px;

  @include desktop-xxl {
    width: 1440px;
  }

  @include desktop-xl {
    min-width: 1280px;
    width: 80%;
  }

  @include desktop {
    min-width: 1000px;
    max-height: 1440px;
    width: 90%;
  }
}
</style>
