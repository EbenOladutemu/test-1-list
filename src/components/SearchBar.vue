<template>
  <div class="d-flex-align-center">
    <input
      type="text"
      placeholder="Search or Add..."
      :value="modelValue"
      @input="enterValue($event)" />
    <div :class="$style.icon">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';

const emits = defineEmits(['update:modelValue']);

defineProps<{
  modelValue: string;
}>();

const enterValue = (e: any) => {
  emits('update:modelValue', e.target.value);
};
</script>

<style lang="scss" module>
@use 'sass/color';
@use 'sass/icon';
@use 'sass/utils';

input {
  background: utils.$searchbar-background;
  border-radius: utils.$border-radius;
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
