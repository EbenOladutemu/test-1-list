<template>
  <div class="container">
    <SearchBar v-model="searchQuery" />
    <List :lists="filteredList" />
  </div>
  <SortBy />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

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
    const lists = ref([
      {
        id: 1,
        name: 'John Smith',
        time: '10',
      },
      {
        id: 2,
        name: 'Mary Ann',
        time: '5',
      },
      {
        id: 3,
        name: 'Doughnut Fluffy',
        time: '2',
      },
    ]);

    const filteredList = computed(() => {
      return lists.value.filter((list) =>
        list.name.match(new RegExp(searchQuery.value, 'i'))
      );
    });

    return {
      searchQuery,
      filteredList,
    };
  },
});
</script>

<style lang="scss" module>
// Style
</style>
