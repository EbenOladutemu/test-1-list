<template>
  <div :class="$style['sort-by']">
    <p :class="$style['sort-by-inner']">
      <span>Sort by </span>
      <span>Value</span>
      <span>•</span>
    </p>
    <p :class="$style['sort-by-inner']">
      <span>Sort by </span>
      <span>Added Date</span>
      <span>•</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@use 'sass/color';
.sort-by {
  height: fit-content;
  margin-top: 2rem;
}
.sort-by-inner {
  padding: 1rem;
  border-radius: 6px;
  background-color: color.$text-white;
  width: 13rem;
  cursor: pointer;

  &:hover {
    background-color: color.$text-off-white;
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
</style>
