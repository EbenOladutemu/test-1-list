import { ref } from 'vue';

export const useCurrentColor = (color: string): any => {
  const currentColor = ref(color);
  return { currentColor };
};
