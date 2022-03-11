<template>
  <ul>
    <li
      v-for="list in lists"
      :key="list.id"
      class="d-flex-align-center"
      @click="getList(list)">
      <div>
        <p :class="$style.name">{{ list.name }}</p>
        <small :class="$style['serial-no']">#{{ list.id }}</small>
      </div>
      <div class="d-flex-align-center">
        <span :class="$style.time">{{ list.time }} minutes ago</span>
        <Trash :class="$style.trash" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

import Trash from './icons/Trash.vue';

const props = defineProps<{
  lists?: any[];
}>();

const getList = (e: any) => {
  console.log(e);
};
</script>

<style lang="scss" module>
@use 'sass/color';
@use 'sass/icon';
@use 'sass/utilities';

ul {
  padding-left: 0;
}

li {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  list-style: none;
  justify-content: space-between;
  border-bottom: 1px solid color.$border-color;
  border-radius: utilities.$border-radius;
  background: transparent;
  transition: background 0.5s;
  cursor: pointer;

  &:hover {
    background: color.$text-white 0% 0% no-repeat padding-box;
    box-shadow: utilities.$list-box-shadow;
    transition: background 0.5s;
    .time {
      margin-right: 2rem;
      transition: margin-right 0.5s;
    }
    .trash {
      opacity: 1;
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
}
.time {
  font-size: 13px;
  margin-right: -1rem;
  transition: margin-right 0.5s;
}
</style>
