<template>
  <div class="var--box var-loading">
    <div class="var-loading__circle" v-if="type === 'circle'">
      <span
        class="var-loading__circle-block"
        :style="{
          width: toNumber(radius) * 2 + 'px',
          height: toNumber(radius) * 2 + 'px',
        }"
      >
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </span>
    </div>

    <template v-for="(nums, key) in loadingTypeDict" :key="key">
      <div :class="`var-loading__${key} var-loading__${key}-${size}`" v-if="type === key">
        <div
          v-for="num in nums"
          :key="num + key"
          :style="{ backgroundColor: color }"
          :class="`var-loading__${key}-item var-loading__${key}-item-${size}`"
        ></div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import { toNumber } from '../utils/shared'

export default defineComponent({
  name: 'VarLoading',
  props,
  setup() {
    const loadingTypeDict = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3,
    }

    return {
      loadingTypeDict,
      toNumber,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './loading';
</style>
