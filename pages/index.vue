<template>
  <HelloWorld />
</template>

<script lang="ts">
import Vue from 'vue'

import HelloWorld from '~/components/HelloWorld.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HelloWorld
  }
})
</script>
