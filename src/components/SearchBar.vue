<template>
  <input
    type="text"
    placeholder="Search or Add..."
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" />
  <Cancel :class="[$style.icon, $style.cancel]" />
  <Add :class="$style.icon" />
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
@use 'sass/icon';
@use 'sass/utilities';

input {
  background: utilities.$searchbar-background;
  border-radius: 6px;
  width: 100%;
  padding: 1rem;
  border: none;
  outline: none;
  color: color.$text;
  letter-spacing: 0.5px;
}

::placeholder {
  color: color.$text-secondary;
}
</style>
