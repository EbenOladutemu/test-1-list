<template>
  <div class="container">
    <SearchBar v-model="searchQuery" />
    <List />
  </div>
  <SortBy />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import List from './components/List.vue';
import SearchBar from './components/SearchBar.vue';
import SortBy from './components/SortBy.vue';

export default defineComponent({
  name: 'App',
  components: {
    List,
    SearchBar,
    SortBy,
  },
  setup() {
    const searchQuery = ref('');
    return {
      searchQuery,
    };
  },
});
</script>

<style lang="scss" module>
// Style
</style>
