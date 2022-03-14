<template>
  <div :class="$style.container">
    <SearchBar
      v-model="searchQuery"
      :lists="filteredList"
      @keydown="
        add($event);
        clear($event);
      ">
      <button v-if="searchQuery">
        <Cancel id="clear" @click.enter="clear($event)" />
      </button>
      <button v-if="searchQuery" :disabled="!empty">
        <Add
          id="add"
          :class="$style.add"
          :not-found="!empty"
          @click="add($event)" />
      </button>
    </SearchBar>
    <List :search-query="searchQuery" :lists="filteredList">
      <template #list="{ id }">
        <Trash :class="$style.trash" @click="deleteEntry(id)" />
      </template>
    </List>
  </div>
  <SortBy :lists="lists" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { setLists, getLists } from './utils/store';

import List from './components/List.vue';
import SearchBar from './components/SearchBar.vue';
import Add from './components/icons/Add.vue';
import Cancel from './components/icons/Cancel.vue';
import Trash from './components/icons/Trash.vue';
import SortBy from './components/SortBy.vue';

export default defineComponent({
  name: 'App',
  components: {
    List,
    SearchBar,
    Add,
    Cancel,
    Trash,
    SortBy,
  },
  setup() {
    const searchQuery = ref('');
    let lists: any = ref(getLists());

    const filteredList = computed(() => {
      return lists.value.length > 0
        ? lists.value.filter((list: any) =>
            list.name.match(new RegExp(searchQuery.value, 'i'))
          )
        : [];
    });

    const empty = computed(() => {
      return filteredList.value.length === 0 ? true : false;
    });

    const add = (e: any) => {
      if (empty.value && (e.key === 'Enter' || e.target.id === 'add')) {
        lists.value.push({
          id: Math.floor(Math.random() * 1000),
          name: searchQuery.value.trim(),
          number: lists.value.length + 1,
          time: new Date().toLocaleString(),
        });
        setLists(lists.value);
        searchQuery.value = '';
      }
    };

    const clear = (e: any) => {
      if (e.key === 'Escape' || e.target.id === 'clear') {
        searchQuery.value = '';
      }
    };

    const deleteEntry = (e: any) => {
      lists.value = lists.value?.filter((list: any) => list.id !== e);
      setLists(lists.value);
    };

    return {
      lists,
      searchQuery,
      filteredList,
      empty,
      add,
      clear,
      deleteEntry,
    };
  },
});
</script>

<style lang="scss" module>
// Style
@media screen and (min-width: 768px) {
  .container {
    width: 50%;
    margin: 0 5rem;
  }
}
.add {
  margin-left: 2rem;
}
.trash {
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.5s;
}

li {
  &:hover {
    .trash {
      opacity: 1;
    }
  }
}
</style>
