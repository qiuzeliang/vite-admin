<template>
  <ElScrollbar>
    <div v-for="item in menus" :key="item.name" class="mt-10 pl-6 pr-6 space-y-1.5">
      <div class="menu-title text-main">{{ item.name }}</div>
      <div
        v-for="menu in item.menus"
        :key="menu.key"
        class="menu-item hover-bg-main text-main"
        :class="{ active: current === menu.key }"
        @click="click(menu)"
      >
        <IconPark :icon="menu.icon" size="18" :theme="menu.theme" />
        <span class="ml-1">{{ menu.name }}</span>
      </div>
    </div>
  </ElScrollbar>
</template>

<script setup lang="ts">
import { useMenu } from './useMenu'
import IconPark from '../../common/IconPark.vue'
import { ElScrollbar } from 'element-plus/lib/components/index.js'

const { menus, current, click } = useMenu()
</script>

<style lang="postcss" scoped>
.menu-title {
  @apply text-xs pl-4 pr-4 pb-2;
}
.menu-item {
  @apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
}
.active {
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
</style>
