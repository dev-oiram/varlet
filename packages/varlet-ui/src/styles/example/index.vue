<template>
  <div class="list">
    <div class="list__item" :class="`var-elevation--${e}`" v-for="e in elevations" :key="e">
      {{ e }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RippleExample',
  setup() {
    const elevations = Array.from({ length: 25 }).map((_, index) => index)

    return {
      elevations,
    }
  },
}
</script>

<style scoped lang="less">
@import '../../styles/elevation';

.list {
  display: flex;
  flex-wrap: wrap;
  padding: 2vw;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 25vw;
    color: #888;
    margin: 2vw;
  }
}
</style>
