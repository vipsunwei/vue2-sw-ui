<template>
  <button class="sw-button" :class="{[`sw-button-${type}`]: true}" type="button" v-on:click="click">
    <slot></slot>
  </button>
</template>

<script>
import { oneOf } from 'utils/utils.js'
export default {
  name: 'sw-button',
  props: {
    type: {
      type: String,
      default: 'default',
      Validator (value) {
        return oneOf(value, ['default', 'primary', 'info', 'warning', 'error', 'success'])
      }
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.sw-button {
  display: inline-block;
  height: 40px;
  width: 200px;
  border-radius: 5px;
  border: none;
  outline: none;
  &:active,
  &:hover {
    outline: none;
    border: none;
  }
  &-default {
    background-color: aqua;
    color: azure;
  }
  &-error {
    background-color: brown;
    color: #ffffff;
  }
}
</style>
