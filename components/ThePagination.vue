<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    paginationList: {
      type: Array,
      required: true
    } as PropOptions<(string | number)[]>
  }
})
</script>

<template>
  <ul v-if="paginationList" class="pagination-list">
    <li v-for="(page, index) in paginationList" :key="page + index" class="pagination-item">
      <NuxtLink
        v-if="typeof page === 'number'"
        :to="{ params: { page }, query: { ...$route.query } }"
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
