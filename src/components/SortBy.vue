<template>
  <div :class="$style['sort-by']">
    <p
      v-for="sortBy in sortByArray"
      :key="sortBy.id"
      :class="[
        $style['sort-by-inner'],
        { [$style['bg-white']]: sortBy.by === selectedMethod },
      ]"
      @click="sortByMethod(sortBy.by)">
      <span>Sort by </span>
      <span>{{ sortBy.by }}</span>
      <span v-show="sortBy.by === selectedMethod">•</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch } from 'vue';
import { setLists, setSortMethod, getSortMethod } from './../utils/store';

const props = defineProps<{
  lists: any[];
}>();

const sortByArray = ref([
  {
    id: 1,
    by: 'Value',
  },
  {
    id: 2,
    by: 'Added Date',
  },
]);

const sortedLists = ref(props.lists);

const selectedMethod = ref(getSortMethod());

const sortByMethod = (method: any) => {
  selectedMethod.value = method;
  setSortMethod(method);

  if (selectedMethod.value === 'Value') {
    sortedLists.value.sort((a, b) => {
      const first = a.name.toLowerCase(),
        second = b.name.toLowerCase();
      return first < second ? -1 : 0;
    });

    setLists(sortedLists.value);
  } else {
    sortedLists.value.sort((a, b) => {
      const first = new Date(a.time),
        second = new Date(b.time);
      return second.valueOf() - first.valueOf();
    });

    setLists(sortedLists.value);
  }
};

watch(
  () => props.lists,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      sortedLists.value = newVal;
    }
  }
);
</script>

<style lang="scss" module>
@use 'sass/color';
@use 'sass/utils';
.sort-by {
  height: fit-content;
  margin-top: 2rem;
}
.sort-by-inner {
  padding: 1rem;
  border-radius: utils.$border-radius;
  width: 13rem;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: color.$text-white;
  }

  &:active {
    background: color.$border-color;
  }

  span:first-child {
    color: color.$text-tertiary;
  }

  span:nth-child(2) {
    color: color.$text;
  }

  span:last-child {
    color: color.$text-success;
    float: right;
  }
}

.bg-white {
  background-color: color.$text-white;
}
</style>
