<template>
  <div>
    <input
      type="text"
      placeholder="Search or Add..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
    <Cancel :class="[$style.icon, $style.cancel]" />
    <Add :class="[$style.icon]" />
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';

import Add from './icons/Add.vue';
import Cancel from './icons/Cancel.vue';

defineEmits(['update:modelValue']);
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" module>
@use 'sass/color';

input {
  background: color.$searchbar-background;
  border-radius: 6px;
  width: 100%;
  padding: 1rem;
  border: none;
  outline: none;
  color: color.$text;
}
.icon {
  background: color.$searchbar-background;
  float: right;
  margin-top: -2.5rem;
  z-index: 3;
  position: relative;
  margin-right: 1rem;
}
.cancel {
  margin-right: 4rem;
}
</style>
