<template>
  <svg
    width="24"
    height="24"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 12H12M16 12H12M12 12V8M12 12V16"
      :stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round" />

    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      :stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useCurrentColor } from 'utils/currentColor';

const props = defineProps<{
  notFound: boolean;
}>();

const { currentColor } = props.notFound
  ? useCurrentColor('#15AABF')
  : useCurrentColor('#adb5bd');
</script>

<style></style>
