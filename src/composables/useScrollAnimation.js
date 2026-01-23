// src/composables/useScrollAnimation.js
import { onMounted, onUnmounted } from 'vue'

/**
 * Scroll animation composable - 为元素添加滚动进入动画
 *
 * 用法:
 * import { useScrollAnimation } from '@/composables/useScrollAnimation'
 *
 * const { isVisible } = useScrollAnimation()
 *
 * // 在模板中为需要动画的元素添加 .animate-on-scroll 类
 * // 元素进入视口时会自动添加 .is-visible 类
 */
export function useScrollAnimation() {
  // 使用 ref 存储可见性状态（可选，如果需要在组件中使用）
  // 主要通过 IntersectionObserver 直接操作 DOM

  const checkVisibility = () => {
    const elements = document.querySelectorAll('.animate-on-scroll')

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
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
    setTimeout(checkVisibility, 100)
  })

  // 返回空对象，因为这个 composable 主要通过 CSS 类工作
  return {
    isVisible: false // 占位值，实际功能通过观察器实现
  }
}
