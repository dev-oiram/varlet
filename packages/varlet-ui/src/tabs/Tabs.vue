<template>
  <component :is="sticky ? 'var-sticky' : Transition" :offset-top="sticky ? offsetTop : null">
    <div
      class="var-tabs var--box"
      :class="[
        `var-tabs--item-${itemDirection}`,
        `var-tabs--layout-${layoutDirection}-padding`,
        elevation ? `var-elevation--4` : null,
        fixedBottom ? 'var-tabs--fixed-bottom' : null,
      ]"
      :style="{ background: color }"
      v-bind="$attrs"
    >
      <div
        class="var-tabs__tab-wrap"
        ref="scrollerEl"
        :class="[
          scrollable ? `var-tabs--layout-${layoutDirection}-scrollable` : null,
          `var-tabs--layout-${layoutDirection}`,
        ]"
      >
        <slot />

        <div
          class="var-tabs__indicator"
          :class="[`var-tabs--layout-${layoutDirection}-indicator`]"
          :style="{
            width: layoutDirection === 'horizontal' ? indicatorWidth : toSizeUnit(indicatorSize),
            height: layoutDirection === 'horizontal' ? toSizeUnit(indicatorSize) : indicatorHeight,
            transform: layoutDirection === 'horizontal' ? `translateX(${indicatorX})` : `translateY(${indicatorY})`,
            background: indicatorColor || activeColor,
          }"
        ></div>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import VarSticky from '../sticky'
import { defineComponent, watch, ref, computed, Transition, nextTick, onMounted, onUnmounted } from 'vue'
import { props } from './props'
import { useTabList } from './provide'
import { isNumber, linear } from '../utils/shared'
import { toSizeUnit, scrollTo } from '../utils/elements'
import type { Ref, ComputedRef } from 'vue'
import type { TabsProvider } from './provide'
import type { TabProvider } from '../tab/provide'

export default defineComponent({
  name: 'VarTabs',
  components: { VarSticky },
  inheritAttrs: false,
  props,
  setup(props) {
    const indicatorWidth: Ref<string> = ref('0px')
    const indicatorHeight: Ref<string> = ref('0px')
    const indicatorX: Ref<string> = ref('0px')
    const indicatorY: Ref<string> = ref('0px')
    const scrollable: Ref<boolean> = ref(false)
    const scrollerEl: Ref<HTMLElement | null> = ref(null)
    const active: ComputedRef<number | string> = computed(() => props.active)
    const activeColor: ComputedRef<string | undefined> = computed(() => props.activeColor)
    const inactiveColor: ComputedRef<string | undefined> = computed(() => props.inactiveColor)
    const disabledColor: ComputedRef<string | undefined> = computed(() => props.disabledColor)
    const itemDirection: ComputedRef<string> = computed(() => props.itemDirection)
    const { tabList, bindTabList, length } = useTabList()

    const onTabClick = (tab: TabProvider) => {
      const currentActive = tab.name.value ?? tab.index.value
      const { active, onChange, onClick } = props

      props['onUpdate:active']?.(currentActive)
      onClick?.(currentActive)
      currentActive !== active && onChange?.(currentActive)
    }

    const matchName = (): TabProvider | undefined => {
      return tabList.find(({ name }: TabProvider) => props.active === name.value)
    }

    const matchIndex = (): TabProvider | undefined => {
      return tabList.find(({ index }: TabProvider) => props.active === index.value)
    }

    const matchBoundary = (): TabProvider | undefined => {
      if (length.value === 0) {
        return
      }

      const { active } = props

      isNumber(active)
        ? active > length.value - 1
          ? props['onUpdate:active']?.(length.value - 1)
          : props['onUpdate:active']?.(0)
        : null

      return matchIndex()
    }

    const watchScrollable = () => {
      scrollable.value = tabList.length >= 5
    }

    const moveIndicator = ({ element }: TabProvider) => {
      const el = element.value

      if (props.layoutDirection === 'horizontal') {
        indicatorWidth.value = `${el?.offsetWidth}px`
        indicatorX.value = `${el?.offsetLeft}px`
      } else {
        indicatorHeight.value = `${el?.offsetHeight}px`
        indicatorY.value = `${el?.offsetTop}px`
      }
    }

    const scrollToCenter = ({ element }: TabProvider) => {
      if (!scrollable.value) {
        return
      }

      const scroller: HTMLElement = scrollerEl.value as HTMLElement
      const el = element.value as HTMLElement

      if (props.layoutDirection === 'horizontal') {
        const left: number = el.offsetLeft + el.offsetWidth / 2 - scroller.offsetWidth / 2
        scrollTo(scroller, {
          left,
          animation: linear,
        })
      } else {
        const top: number = el.offsetTop + el.offsetHeight / 2 - scroller.offsetHeight / 2
        scrollTo(scroller, {
          top,
          animation: linear,
        })
      }
    }

    // expose
    const resize = () => {
      const tab: TabProvider | undefined = matchName() || matchIndex() || matchBoundary()
      if (!tab || tab.disabled.value) {
        return
      }

      watchScrollable()
      moveIndicator(tab)
      scrollToCenter(tab)
    }

    const tabsProvider: TabsProvider = {
      active,
      activeColor,
      inactiveColor,
      disabledColor,
      itemDirection,
      resize,
      onTabClick,
    }

    bindTabList(tabsProvider)

    watch(
      () => length.value,
      () => nextTick().then(resize)
    )

    watch(() => props.active, resize)

    onMounted(() => window.addEventListener('resize', resize))
    onUnmounted(() => window.removeEventListener('resize', resize))

    return {
      indicatorWidth,
      indicatorHeight,
      indicatorX,
      indicatorY,
      scrollable,
      scrollerEl,
      Transition,
      toSizeUnit,
      resize,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../sticky/sticky';
@import './tabs';
</style>
