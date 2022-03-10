import { ref } from 'vue';

// Having this as a TypeScript file was throwing the error  An import path cannot end with a '.ts' extension. Consider importing... .js
// It's a TypeScript issue https://github.com/Microsoft/TypeScript/issues/27481
export function useCurrentColor(color) {
  const currentColor = ref(color);
  return { currentColor };
}
