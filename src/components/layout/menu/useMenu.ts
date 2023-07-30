import { Computer, Like, PlayTwo } from '@icon-park/vue-next'
import { Icon } from '@icon-park/vue-next/lib/runtime'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface IMenu {
  name: string
  key: string
  icon: Icon
  theme: 'outline' | 'filled' | 'two-tone' | 'multi-color'
}

interface IMenus {
  name: string
  menus: IMenu[]
}

export function useMenu() {
  const menus: IMenus[] = [
    {
      name: '我的音乐',
      menus: [
        {
          name: '我喜欢',
          key: 'love',
          icon: Like,
          theme: 'outline'
        },
        {
          name: '本地歌曲',
          key: 'local',
          icon: Computer,
          theme: 'outline'
        },
        {
          name: '最近播放',
          key: 'recently',
          icon: PlayTwo,
          theme: 'outline'
        }
      ]
    }
  ]

  const route = useRoute()

  const current = ref(route.meta.menu)

  const router = useRouter()

  watch(
    () => route.meta.menu,
    (menu) => {
      current.value = menu
    }
  )

  const click = async (menu: IMenu) => {
    await router.push({ name: menu.key, replace: true })
  }

  return {
    menus,
    click,
    current
  }
}
