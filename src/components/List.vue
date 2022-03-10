<template>
  <ul>
    <Trash :class="[$style.icon, $style.trash]" />
    <li class="d-flex-align-center">
      <div>
        <p :class="$style.name">John Smith</p>
        <small :class="$style['serial-no']">#2</small>
      </div>
      <span :class="$style.time">2 minutes ago</span>
    </li>
    <li class="d-flex-align-center">
      <div>
        <p :class="$style.name">John Smith</p>
        <small :class="$style['serial-no']">#2</small>
      </div>
      <span :class="$style.time">2 minutes ago</span>
    </li>
    <li class="d-flex-align-center">
      <div>
        <p :class="$style.name">John Smith</p>
        <small :class="$style['serial-no']">#2</small>
      </div>
      <span :class="$style.time">2 minutes ago</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import Trash from './icons/Trash.vue';
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
  cursor: pointer;

  &:hover {
    background: color.$text-white 0% 0% no-repeat padding-box;
    box-shadow: utilities.$list-box-shadow;
    .time {
      margin-right: 4rem;
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
}
.time {
  font-size: 13px;
  transition: margin-right 0.5s;
}
</style>
