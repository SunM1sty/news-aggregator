<script lang="ts">
import Vue from 'vue'

import { buildUrl } from '~/utils/buildUrl'
import type { NewsItem } from '~/types/NewsItem'

export default Vue.extend({
  data() {
    return {
      currentPage: Number(this.$route.params.page),
      perPage: this.$store.state.newsPerPage as number,
      currentQueryParams: this.$route.query,
      filteredNews: this.$store.state.filteredNews as NewsItem[]
    }
  },
  computed: {
    paginationList(): (number | string)[] {
      const pageList: (number | string)[] = []
      const pageCount = 3

      const totalPages: number = Math.ceil(this.$store.state.filteredNews.length / this.perPage)
      const startPage: number = Math.max(this.currentPage - pageCount, 1)
      const endPage: number = Math.min(this.currentPage + pageCount, totalPages)

      if (endPage === 0) {
        return pageList
      }

      if (startPage > 1) {
        pageList.push(1)

        if (startPage > 2) {
          pageList.push('...')
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageList.push(i)
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageList.push('...')
        }
        pageList.push(totalPages)
      }

      return pageList
    }
  },
  watch: {
    $route: {
      handler(to) {
        this.currentQueryParams = to.query
      },
      immediate: true
    }
  },
  beforeMount() {
    if (!this.$route.params.page) {
      const url = buildUrl(1, this.currentQueryParams)
      this.$router.push(url)
    }
  }
})
</script>

<template>
  <ul v-if="paginationList" class="pagination-list">
    <li v-for="(page, index) in paginationList" :key="page + index" class="pagination-item">
      <NuxtLink
        v-if="typeof page === 'number'"
        :to="{ params: { page }, query: { ...$data.currentQueryParams } }"
        class="pagination-link"
        exact
      >
        {{ page }}
      </NuxtLink>
      <p v-else class="pagination-link">{{ page }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.main_content {
  @include flex-v-center;
  flex-direction: column;
  margin-top: 25px;
}

.pagination-list {
  margin-top: 20px;
  @include flex-h-center;
  gap: 10px;
}

.pagination-link {
  @include h3-font;
  @include without-select;
}

.active-link {
  color: $color-blue;
}

.text-warning {
  @include h3-font;
}
</style>
