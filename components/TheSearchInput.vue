<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      debounceTimeout: 500,
      debounceTimer: null as NodeJS.Timeout | null
    }
  },
  computed: {
    searchFilterValue: {
      get() {
        return this.$store.getters.getSearchFilter
      },
      set(value: string) {
        if (value === '') this.$store.dispatch('handleSearchFilter', null)
        if (value.trim()) this.$store.dispatch('handleSearchFilter', value.trim())
      }
    },
    resourceFilterValue() {
      return this.$store.getters.getResourceFilter
    }
  },
  methods: {
    onInputSearchFilter() {
      this.debounceTimer && clearTimeout(this.debounceTimer)

      this.debounceTimer = setTimeout(this.pushSearchQueryParam, this.debounceTimeout)
    },
    pushSearchQueryParam() {
      if (this.searchFilterValue === null) {
        if (this.resourceFilterValue) {
          this.$router.push({
            params: { page: '1' },
            query: { resource: this.resourceFilterValue }
          })
        } else {
          this.$router.push({
            params: { page: '1' }
          })
        }
      }

      if (this.searchFilterValue !== null && this.searchFilterValue.trim()) {
        if (this.resourceFilterValue) {
          this.$router.push({
            params: { page: '1' },
            query: { resource: this.resourceFilterValue, search: this.searchFilterValue.trim() }
          })
        } else {
          this.$router.push({
            params: { page: '1' },
            query: { search: this.searchFilterValue.trim() }
          })
        }
      }
    }
  }
})
</script>

<template>
  <div class="search-block">
    <input v-model="searchFilterValue" type="text" class="input" @input="onInputSearchFilter" />
    <button class="button" @click="pushSearchQueryParam">
      <img src="~static/search-icon.svg" class="icon" width="20" height="20" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search-block {
  @include flex-v-center;

  width: 320px;

  @include mobile {
    width: 100%;
  }
}

.input {
  @include reset-input;

  height: 40px;
  width: 100%;

  padding: 5px 45px 5px 20px;

  border-radius: $default-border;
  box-shadow: $default-box-shadow;
}

.button {
  @include reset-button;
  cursor: pointer;

  margin-left: -40px;
}
</style>
