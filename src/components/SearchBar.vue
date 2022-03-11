<template>
  <div class="d-flex-align-center">
    <input
      type="text"
      placeholder="Search or Add..."
      :value="modelValue"
      @input="enterValue($event)"
      @keydown="clear($event)" />
    <div :class="$style.icon">
      <Cancel id="clear" data-test="clear" @click.enter="clear($event)" />
      <Add :class="$style.add" :match="foundMatch" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref } from 'vue';

import Add from './icons/Add.vue';
import Cancel from './icons/Cancel.vue';

const emits = defineEmits(['update:modelValue']);
const props = defineProps<{
  modelValue: string;
}>();

const foundMatch = ref(false);

const enterValue = (e: any) => {
  emits('update:modelValue', e.target.value);
};

const clear = (e: any) => {
  if (e.key === 'Escape' || e.target.id === 'clear') {
    console.log('Clear input');
    emits('update:modelValue', '');
  }
};
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
