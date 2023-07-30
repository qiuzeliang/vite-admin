import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Banner } from '@/model/banner'
import { useBanner } from '@/apis/api'

export const useBannerStore = defineStore('banner', () => {
  const banners = ref<Banner[]>([])

  const getBanners = async () => {
    if (banners.value.length) {
      return
    }
    banners.value = await useBanner()
  }

  return {
    banners,
    getBanners
  }
})
