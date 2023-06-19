<script lang="ts">
import Vue from 'vue'

import type { NewsItem } from '~/types/NewsItem'

type NewsArrayIndexes = {
  start: number
  end: number
}

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'tiles'
    }
  },
  data() {
    return {
      currentPage: Number(this.$route.params.page) as number,
      perPage: this.$store.state.newsPerPage as number
    }
  },
  computed: {
    news(): NewsItem[] {
      const start: number = (this.currentPage - 1) * this.perPage
      const end: number = start + this.perPage
      const indexes: NewsArrayIndexes = { start, end }

      return this.$store.getters.getNewsOnPage(indexes)
    }
  },
  created() {
    this.$store.subscribe(action => {
      if (action.type === 'handleFilteredNews') {
        const start: number = (this.currentPage - 1) * this.perPage
        const end: number = start + this.perPage
        const indexes: NewsArrayIndexes = { start, end }
        this.news = this.$store.getters.getNewsOnPage(indexes)
      }
    })
  }
})
</script>

<template>
  <ul v-if="news.length" :class="type === 'list' ? 'news-list' : 'news-tiles'">
    <li v-for="item in news" :key="item.id" class="news-item">
      <NewsItem :type="type" :news-item="item" />
    </li>
  </ul>
  <p v-else class="text-warning">На этой странице новостей нет</p>
</template>

<style lang="scss" scoped>
.news-tiles {
  display: grid;
  grid-template-columns: repeat(2, 6fr);
  gap: 20px;

  width: 100%;

  margin-top: 25px;

  @include mobile {
    grid-template-columns: repeat(1, 6fr);
  }
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

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
  @include flex-h-center;
  @include h3-font;
  margin-top: 25px;
}
</style>
