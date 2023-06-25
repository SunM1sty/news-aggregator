<script lang="ts">
import Vue, { PropOptions } from 'vue'

import type { NewsItem } from '~/types/NewsItem'

export default Vue.extend({
  props: {
    newsList: {
      type: Array,
      required: true
    } as PropOptions<Array<NewsItem>>,
    activeNewsDisplayOption: {
      type: String,
      required: true
    } as PropOptions<string>
  }
})
</script>

<template>
  <ul
    v-if="newsList.length"
    :class="activeNewsDisplayOption === 'list' ? 'news-list' : 'news-tiles'"
  >
    <li v-for="item in newsList" :key="item.id" class="news-item">
      <NewsItem :news-item="item" :display-type="activeNewsDisplayOption" />
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
