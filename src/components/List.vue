<template>
  <ul>
    <li v-for="list in lists" :key="list.id" class="d-flex-align-center">
      <div class="d-flex-align-center">
        <Check v-show="exactMatch" :class="$style.check" />
        <div>
          <p :class="$style.name">{{ list.name }}</p>
          <small :class="$style['serial-no']">
            <span v-show="exactMatch">Exact match</span>
            <span v-show="exactMatch">,</span>
            #{{ list.number }}
          </small>
        </div>
      </div>
      <div class="d-flex-align-center">
        <span :class="$style.time">
          {{ formatDistanceToNow(new Date(list.time), { addSuffix: true }) }}
        </span>
        <slot name="list" v-bind="list" />
      </div>
    </li>
    <!-- <li v-if="lists.length === 0" :class="$style['text-center']">
      No item in list. Click add icon to add an item
    </li> -->
  </ul>
</template>

<script lang="ts" setup>
import { defineProps, ref, computed, watch } from 'vue';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Check from './icons/Check.vue';

const props = defineProps<{
  searchQuery: string;
  lists: any[];
}>();

const listArray = ref(props.lists);

const names: any = ref([]);
const getNames = () => {
  listArray.value.forEach((list) => {
    names.value.push(list.name.toLowerCase());
  });
};

const exactMatch = computed(() => {
  return names.value.includes(props.searchQuery.toLowerCase());
});

watch(
  // Watch for list additions and update array with new values
  () => props.lists,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      listArray.value = newVal;
      getNames();
    }
  }
);
</script>

<style lang="scss" module>
@use 'sass/color';
@use 'sass/icon';
@use 'sass/utils';

ul {
  padding-left: 0;
}

li {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  list-style: none;
  justify-content: space-between;
  border-bottom: 1px solid color.$border-color;
  border-radius: utils.$border-radius;
  background: transparent;
  transition: background 0.5s;
  cursor: pointer;

  &:hover {
    background: color.$text-white 0% 0% no-repeat padding-box;
    box-shadow: utils.$list-box-shadow;
    transition: background 0.5s;
    .time {
      margin-right: 2rem;
      transition: margin-right 0.5s;
    }
  }
}
.name {
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.serial-no {
  font-size: 12px;
  color: color.$text-tertiary;

  span:first-child {
    color: color.$text-success;
  }
}
.time {
  font-size: 13px;
  margin-right: -1rem;
  transition: margin-right 0.5s;
}

.text-center {
  text-align: center;
}
</style>
