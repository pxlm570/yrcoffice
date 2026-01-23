// src/composables/useScrollAnimation.js
import { onMounted, onUnmounted } from 'vue'

/**
 * Scroll animation composable - 为元素添加滚动进入动画
 *
 * 用法:
 * import { useScrollAnimation } from '@/composables/useScrollAnimation'
 *
 * const { refresh } = useScrollAnimation()
 *
 * // 在模板中为需要动画的元素添加 .animate-on-scroll 类
 * // 元素进入视口时会自动添加 .is-visible 类
 */
export function useScrollAnimation() {
  let observer = null

  const checkVisibility = () => {
    // 如果已有观察器，先断开
    if (observer) {
      observer.disconnect()
    }

    const elements = document.querySelectorAll('.animate-on-scroll')

    if (elements.length === 0) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // 动画只播放一次，完成后停止观察
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    elements.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    // 延迟执行以确保DOM已渲染
    // 100ms 延迟确保 Vue 的 DOM 更新完成
    setTimeout(checkVisibility, 100)
  })

  onUnmounted(() => {
    // 组件卸载时清理观察器，防止内存泄漏
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return {
    refresh: checkVisibility  // 提供手动刷新方法
  }
}
