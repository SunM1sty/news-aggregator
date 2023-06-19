<script lang="ts">
import Vue from 'vue'

import type { NewsOutputItem } from '~/types/NewsOutputItem'
import type { ResourceItem } from '~/types/ResourceItem'

export default Vue.extend({
  data() {
    return {
      selectedResource: this.$route.query.resource || null,
      resources: this.$store.state.resources as ResourceItem[],
      newsOutputTypes: this.$store.state.newsOutputTypes as NewsOutputItem[]
    }
  },
  watch: {
    $route: {
      handler(to) {
        this.selectedResource = to.query.resource || null
      },
      immediate: true
    }
  },
  methods: {
    handleResourceFilter(resource: string): void {
      const queries = this.$route.query
      this.selectedResource = resource
      this.$router.push({ query: { ...queries, resource } })
    },
    handleNewsOutputType(type: string): void {
      localStorage.setItem('NewsOutputType', type)

      window.dispatchEvent(
        new CustomEvent('news-output-type-localstorage-changed', {
          detail: {
            storage: localStorage.getItem('NewsOutputType')
          }
        })
      )
    },
    handleResourceActiveClass(resource: string) {
      if (!this.selectedResource && resource === 'all') {
        return 'active'
      }

      if (this.selectedResource === resource) {
        return 'active'
      }
      return 'default'
    }
  }
})
</script>

<template>
  <div class="filters">
    <ul class="list">
      <li
        v-for="resource in $data.resources"
        :key="resource.name"
        :class="handleResourceActiveClass(resource.resource) + ' resource-item'"
        @click="handleResourceFilter(resource.resource)"
      >
        {{ resource.name }}
      </li>
    </ul>
    <ul class="list">
      <li
        v-for="item in $data.newsOutputTypes"
        :key="item.type"
        @click="handleNewsOutputType(item.type)"
      >
        <img
          :src="item.imgName"
          :alt="`Изображения типа отображения списка ${item.type}`"
          :class="'active'"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  @include flex-h-sb-v-center;
  width: 100%;
}

.list {
  @include flex-h-sb-v-center;
  gap: 10px;
}

.resource-item {
  @include resources-font;
}

.active {
  color: $color-blue;
}
</style>
