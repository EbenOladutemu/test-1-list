<template>
  <div class="container">
    <!-- Html -->
    <SearchBar v-model="searchQuery" />
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import List from './components/List.vue';
import SearchBar from './components/SearchBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    List,
    SearchBar,
  },
  setup() {
    // Setup
    const searchQuery = ref('');

    return {
      searchQuery,
    };
  },
  updated() {
    console.log(this.searchQuery);
  },
});
</script>

<style lang="scss" module>
// Style
</style>
