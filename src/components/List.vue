<template>
  <ul>
    <li>
      <div>
        <p :class="$style.name">John Smith</p>
        <small :class="$style['serial-no']">#2</small>
      </div>
      <span :class="$style.time">2 minutes ago</span>
    </li>
  </ul>
</template>

<script></script>

<style lang="scss" module>
@use 'sass/color';

ul {
  padding-left: 0;
}

li {
  padding: 0 1.5rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name {
  margin-bottom: 0.125rem;
}
.serial-no {
  font-size: 12px;
  color: color.$text-tertiary;
}
.time {
  font-size: 13px;
}
</style>
