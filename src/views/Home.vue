<template>
  <div class="home">
    <!-- Background Decoration -->
    <div class="bg-decoration">
      <div class="bg-glow bg-glow--primary"></div>
      <div class="bg-glow bg-glow--secondary"></div>
      <div class="grid-bg"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-title">
            <h1 class="title-line">数字化解决方案</h1>
            <h1 class="title-line title-accent">赋能教育与企业</h1>
          </div>
          <p class="hero-subtitle">
            专注高校管理、企业管理及教育行业数字化产品开发
          </p>
          <div class="hero-actions">
            <router-link to="/contact" class="button-primary">
              开始合作
            </router-link>
            <router-link to="/services" class="button-secondary">
              了解服务
            </router-link>
          </div>
        </div>
        <div class="hero-visual">
          <div class="rotating-bubbles">
            <div class="bubble bubble-top">
              <svg class="bubble-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>
            <div class="bubble bubble-left">
              <svg class="bubble-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M16 18l6-6-6-6" />
                <path d="M8 6l-6 6 6 6" />
                <path d="M14 4l-4 16" />
              </svg>
            </div>
            <div class="bubble bubble-right">
              <svg class="bubble-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <path d="M6 6h.01" />
                <path d="M6 18h.01" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心服务</h2>
          <p class="section-subtitle">从需求到交付，提供完整的技术解决方案</p>
        </div>

        <div class="services-grid">
          <div
            v-for="service in services"
            :key="service.title"
            class="service-card"
          >
            <div class="service-icon">
              <component :is="service.icon" />
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-desc">{{ service.description }}</p>
          </div>
        </div>

        <!-- Stats within Services Section -->
        <div class="services-stats">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="service-stat-item"
          >
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Study Section -->
    <section class="section case-study">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">技术案例解析</h2>
          <p class="section-subtitle">深入展示我们如何解决复杂技术挑战</p>
        </div>

        <div class="case-study-content">
          <!-- Left: Data Cards -->
          <div class="case-data">
            <div class="case-intro">
              <h3 class="case-title">在线考试系统 - 技术解析</h3>
              <p class="case-desc">支撑 10万+ 学生同时在线的考试平台</p>
            </div>

            <div class="data-cards">
              <div class="data-card">
                <div class="data-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M20 7h-9m9 10h-9M4 7h.01M4 17h.01M4 12h16" />
                  </svg>
                </div>
                <div class="data-value">10万+</div>
                <div class="data-label">同时在线用户</div>
                <div class="data-detail">考试高峰期 QPS 5000+</div>
              </div>

              <div class="data-card">
                <div class="data-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                </div>
                <div class="data-value">500万+</div>
                <div class="data-label">考试记录处理</div>
                <div class="data-detail">实时统计分析 &lt; 3秒</div>
              </div>

              <div class="data-card">
                <div class="data-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div class="data-value">300ms</div>
                <div class="data-label">平均响应时间</div>
                <div class="data-detail">首屏加载优化 60%</div>
              </div>
            </div>
          </div>

          <!-- Right: Tech Highlights -->
          <div class="tech-highlights">
            <div
              v-for="(highlight, index) in techHighlights"
              :key="index"
              class="tech-card"
              @click="openModal(highlight)"
            >
              <div class="tech-header">
                <h4 class="tech-title">{{ highlight.title }}</h4>
                <div class="tech-expand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
              <p class="tech-desc">{{ highlight.desc }}</p>
              <div class="tech-tags">
                <span v-for="tag in highlight.tags" :key="tag" class="tech-tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Case CTA button temporarily disabled -->
        <!-- <div class="case-study-cta">
          <a href="mailto:contact@micono.eu.org" class="case-cta-link">
            查看完整技术案例
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div> -->
      </div>
    </section>

    <!-- Modal for expanded content -->
    <Teleport to="body">
      <div v-if="activeModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <h3 class="modal-title">{{ activeModal.title }}</h3>
          <div class="modal-tags">
            <span v-for="tag in activeModal.tags" :key="tag" class="modal-tag">
              {{ tag }}
            </span>
          </div>
          <p class="modal-desc">{{ activeModal.fullDesc }}</p>
          <div class="modal-details">
            <h4>技术实现</h4>
            <p>{{ activeModal.implementation }}</p>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Solutions Section -->
    <section class="section solutions">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">行业解决方案</h2>
          <p class="section-subtitle">深耕垂直领域，解决行业痛点</p>
        </div>

        <div class="solutions-list">
          <div
            v-for="solution in solutions"
            :key="solution.title"
            class="solution-item"
          >
            <div class="solution-number">0{{ solution.id }}</div>
            <div class="solution-content">
              <h3 class="solution-title">{{ solution.title }}</h3>
              <p class="solution-desc">{{ solution.description }}</p>
              <ul class="solution-features">
                <li v-for="feature in solution.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">准备好开始您的项目了吗？</h2>
          <p class="cta-desc">告诉我们您的需求，我们提供专业的技术咨询和方案设计</p>
          <router-link to="/contact" class="cta-button">
            联系咨询
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { h, ref, onMounted, onUnmounted } from 'vue'

// Icons as components
const CodeIcon = {
  render: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 1.5,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('path', { d: 'M16 18l6-6-6-6' }),
    h('path', { d: 'M8 6l-6 6 6 6' }),
    h('path', { d: 'M14 4l-4 16' })
  ])
}

const DeviceIcon = {
  render: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 1.5,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
    h('line', { x1: '12', y1: '18', x2: '12.01', y2: '18' })
  ])
}

const ServerIcon = {
  render: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 1.5,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, [
    h('rect', { x: '2', y: '2', width: '20', height: '8', rx: '2', ry: '2' }),
    h('rect', { x: '2', y: '14', width: '20', height: '8', rx: '2', ry: '2' }),
    h('line', { x1: '6', y1: '6', x2: '6.01', y2: '6' }),
    h('line', { x1: '6', y1: '18', x2: '6.01', y2: '18' })
  ])
}

const services = [
  {
    title: '小程序开发',
    description: '微信、支付宝等多平台小程序，轻量高效的用户触达方案',
    icon: DeviceIcon
  },
  {
    title: 'Web 应用开发',
    description: '现代化响应式网站与 Web 应用，适配全终端设备',
    icon: CodeIcon
  },
  {
    title: '管理系统定制',
    description: '针对高校与企业的专业管理系统，提升运营效率',
    icon: ServerIcon
  }
]

const solutions = [
  {
    id: 1,
    title: '高校管理',
    description: '为高等院校提供一站式信息化管理解决方案',
    features: ['教务管理系统', '学生信息管理', '宿舍管理系统', '课程排课系统']
  },
  {
    id: 2,
    title: '企业管理',
    description: '助力企业实现数字化管理转型升级',
    features: ['人力资源管理', '项目管理系统', '客户关系管理', '数据统计分析']
  },
  {
    id: 3,
    title: '教育行业',
    description: '专为教育机构打造的数字化教学平台',
    features: ['在线学习平台', '题库考试系统', '作业批改系统', '学习进度跟踪']
  }
]

const stats = [
  { value: '50+', label: '成功项目' },
  { value: '30+', label: '合作客户' },
  { value: '99%', label: '客户满意度' }
]

// Tech highlights for case study
const techHighlights = [
  {
    title: '高并发处理架构',
    desc: '通过 Redis 缓存热点数据、消息队列削峰填谷、数据库读写分离，实现考试高峰期平稳运行',
    tags: ['Redis', '负载均衡', '消息队列', '数据库连接池'],
    fullDesc: '针对考试高峰期的高并发场景，我们设计了一套完整的高可用架构。通过 Redis 缓存热点数据，减少 80% 的数据库查询压力；使用 RabbitMQ 消息队列进行削峰填谷，确保系统稳定性；数据库采用主从读写分离架构，显著提升并发处理能力。',
    implementation: '• Redis 集群缓存热点试题数据，TTL 设置合理避免缓存穿透\n• Nginx 负载均衡 + 多节点部署，支持水平扩展\n• RabbitMQ 异步处理考试提交，削峰填谷\n• MySQL 主从复制，读写分离，从库配置多个节点'
  },
  {
    title: '数据可视化大屏',
    desc: '实时统计考试参与率、正确率分布、成绩趋势，管理员可实时监控考试进度',
    tags: ['ECharts', 'WebSocket', '实时推送', '数据聚合'],
    fullDesc: '为满足考试管理员的实时监控需求，我们构建了数据可视化大屏系统。管理员可以实时查看考试参与人数、提交进度、成绩分布等关键指标。数据通过 WebSocket 实时推送，延迟低至毫秒级。',
    implementation: '• WebSocket 长连接实现实时数据推送，延迟 < 100ms\n• ECharts 可视化图表，支持动态刷新和交互\n• 后端数据预聚合策略，减少实时计算压力\n• 支持多考场同时监控，数据隔离确保安全性'
  },
  {
    title: '前端性能优化',
    desc: '组件懒加载、路由预加载、资源压缩、CDN 分发，首屏加载时间优化 60%',
    tags: ['Vue 3', 'Vite', '懒加载', 'CDN加速', 'SSR'],
    fullDesc: '通过系统的性能优化手段，我们将首屏加载时间从 800ms 降低到 300ms，用户体验显著提升。采用组件懒加载减少初始加载体积，路由预加载提升页面切换速度，配合 CDN 和资源压缩实现最佳性能。',
    implementation: '• Vue 3 组件懒加载 + 路由懒加载，减少初始包体积 60%\n• Vite 构建优化，代码分割和 tree-shaking\n• 静态资源 CDN 分发，开启 Gzip/Brotli 压缩\n• 图片懒加载 + WebP 格式，显著减少资源大小\n• 关键渲染路径优化，首屏渲染时间减少 60%'
  }
]

// Modal state
const activeModal = ref(null)

const openModal = (highlight) => {
  activeModal.value = highlight
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  activeModal.value = null
  document.body.style.overflow = ''
}

// Close modal on ESC key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && activeModal.value) {
      closeModal()
    }
  }
  window.addEventListener('keydown', handleEscape)

  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
/* Hero Section */
.home {
  background: linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
  position: relative;
  overflow: hidden;
}

/* 添加微妙的背景渐变 */
.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at top right,
    var(--color-blue-subtle) 0%,
    transparent 50%);
  pointer-events: none;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  display: none;
}

.hero::after {
  display: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 0 var(--space-md);
  }

  .hero-visual {
    display: none;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.title-line {
  display: block;
  color: var(--color-text-primary);
  animation: fadeInUp 0.8s ease-out;
  margin: 0;
  line-height: 1.1;
}

.title-line:nth-child(2) {
  animation-delay: 0.2s;
}

.title-accent {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 480px;
  line-height: 1.7;
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
}

@media (max-width: 1024px) {
  .hero-subtitle {
    max-width: 100%;
  }
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  animation: fadeInUp 0.8s ease-out 0.6s backwards;
}

.button-primary,
.button-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md) var(--space-xl);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.button-primary {
  background: linear-gradient(135deg, #5B8CFF 0%, #2563EB 50%, #1E4FCC 100%);
  color: #ffffff;
  border: 1px solid rgba(91, 140, 255, 0.4);
  box-shadow: 0 6px 20px hsla(217, 91%, 60%, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  position: relative;
  overflow: hidden;
}

.button-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
  transition: left 0.6s ease;
}

.button-primary:hover {
  background: linear-gradient(135deg, #7AA7FF 0%, #3B82F6 50%, #2563EB 100%);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px hsla(217, 91%, 60%, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
  border-color: rgba(91, 140, 255, 0.6);
}

.button-primary:hover::before {
  left: 100%;
}

.button-primary:active {
  transform: translateY(0);
  box-shadow: 0 4px 16px hsla(217, 91%, 60%, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.button-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-primary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* backdrop-filter: blur(10px); */
}

.button-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.rotating-bubbles {
  position: relative;
  width: 100%;
  max-width: 580px;
  aspect-ratio: 1;
  animation: rotateBubbles 30s linear infinite;
}

@keyframes rotateBubbles {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.bubble {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    var(--color-blue-subtle) 100%
  );
  /* backdrop-filter: blur(10px); */
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 2px 8px rgba(255, 255, 255, 0.2),
    inset 0 -2px 8px rgba(0, 0, 0, 0.1),
    var(--shadow-glow);
}

.bubble::before {
  content: '';
  position: absolute;
  top: 10%;
  left: 20%;
  width: 40%;
  height: 30%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-radius: 50%;
  filter: blur(2px);
}

.bubble::after {
  content: '';
  position: absolute;
  bottom: 15%;
  right: 20%;
  width: 25%;
  height: 20%;
  background: radial-gradient(
    circle,
    var(--color-blue-soft) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(4px);
}

.bubble-icon {
  width: 80px;
  height: 80px;
  position: relative;
  z-index: 1;
  color: var(--color-accent);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

/* "品" formation - top bubble */
.bubble-top {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateY(-160px);
  animation-delay: 0s;
}

/* "品" formation - bottom left bubble */
.bubble-left {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(120deg) translateY(-160px) rotate(-120deg);
  animation-delay: 0s;
}

/* "品" formation - bottom right bubble */
.bubble-right {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(240deg) translateY(-160px) rotate(-240deg);
  animation-delay: 0s;
}

@keyframes bubbleFloat {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.02);
  }
}

/* Counter-rotate icons to keep them upright */
.bubble-top .bubble-icon,
.bubble-left .bubble-icon,
.bubble-right .bubble-icon {
  animation: counterRotate 30s linear infinite;
}

@keyframes counterRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

/* Services Section */
.services {
  position: relative;
  padding: 5rem 0;
}

@media (max-width: 768px) {
  .services {
    padding: 3.5rem 0;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.55);
  max-width: 540px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}

.service-card {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 100%);
  /* backdrop-filter: blur(20px); */
  /* -webkit-backdrop-filter: blur(20px); */
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg,
    transparent,
    var(--color-blue-medium),
    transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover {
  border-color: var(--color-blue-medium);
  transform: translateY(-8px);
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.3),
    var(--shadow-glow);
}

.service-card:hover::before {
  opacity: 1;
}

.service-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-blue-soft) 0%, var(--color-blue-subtle) 100%);
  border: 1px solid var(--color-blue-soft);
  border-radius: 12px;
  color: var(--color-accent);
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(-5deg);
  background: linear-gradient(135deg,
    var(--color-blue-medium) 0%,
    var(--color-blue-soft) 100%);
  box-shadow: 0 12px 28px var(--color-blue-soft);
}

.service-icon svg {
  width: 26px;
  height: 26px;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
}

.service-desc {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
}

/* Services Stats */
.services-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .services-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.service-stat-item {
  text-align: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
  /* backdrop-filter: blur(10px); */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-stat-item:hover {
  border-color: var(--color-blue-soft);
  transform: translateY(-3px);
  box-shadow: 0 12px 28px hsla(217, 91%, 60%, 0.12);
}

.service-stat-item .stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.service-stat-item .stat-label {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 500;
}

/* Solutions Section */
.solutions {
  position: relative;
  padding: 4.5rem 0;
}

@media (max-width: 768px) {
  .solutions {
    padding: 3rem 0;
  }
}

.solutions-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.solution-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: start;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  transition: all 0.3s ease;
}

.solution-item:hover {
  border-color: var(--color-blue-soft);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
}

@media (max-width: 640px) {
  .solution-item {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.25rem;
  }
}

.solution-number {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.3;
  line-height: 1;
}

@media (max-width: 640px) {
  .solution-number {
    font-size: 2rem;
  }
}

.solution-title {
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
}

.solution-desc {
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 1rem;
}

.solution-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.solution-features li {
  padding: 0.35rem 0.9rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;
}

.solution-item:hover .solution-features li {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
}

/* CTA Section */
.cta-content {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
  padding: 4.5rem 3.5rem;
  background: linear-gradient(135deg,
    var(--color-blue-soft) 0%,
    var(--color-blue-subtle) 100%);
  /* backdrop-filter: blur(20px); */
  /* -webkit-backdrop-filter: blur(20px); */
  border: 1px solid var(--color-blue-soft);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    var(--shadow-glow);
}

/* 添加顶部光效 */
.cta-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg,
    transparent,
    hsla(217, 80%, 70%, 0.8),
    transparent);
}

/* 添加内部光晕 */
.cta-content::after {
  content: '';
  position: absolute;
  bottom: -30%;
  right: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle,
    var(--color-blue-soft) 0%,
    transparent 70%);
  filter: blur(60px);
  animation: floatSlow 15s ease-in-out infinite;
}

.cta-title {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
}

.cta-desc {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #5B8CFF 0%, #2563EB 50%, #1E4FCC 100%);
  color: #ffffff;
  border: 1px solid rgba(91, 140, 255, 0.4);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 4px 16px hsla(217, 91%, 60%, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  transition: left 0.6s ease;
}

.cta-button:hover {
  background: linear-gradient(135deg, #7AA7FF 0%, #3B82F6 50%, #2563EB 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px hsla(217, 91%, 60%, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
  border-color: rgba(91, 140, 255, 0.6);
}

.cta-button:hover::before {
  left: 100%;
}

/* Case Study Section */
.case-study {
  position: relative;
  padding: 5rem 0;
}

@media (max-width: 768px) {
  .case-study {
    padding: 3.5rem 0;
  }
}

.case-study-content {
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  gap: 3rem;
  margin-bottom: 1rem;
}

@media (max-width: 1024px) {
  .case-study-content {
    grid-template-columns: 1fr;
  }
}

/* Case Data (Left) */
.case-data {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
}

.case-intro {
  text-align: left;
}

.case-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.95);
}

.case-desc {
  color: rgba(255, 255, 255, 0.55);
  font-size: 1rem;
}

.data-cards {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.data-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  /* backdrop-filter: blur(10px); */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.data-card:hover {
  border-color: var(--color-blue-medium);
  transform: translateY(-3px);
  box-shadow: 0 12px 28px hsla(217, 91%, 60%, 0.15);
}

.data-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-blue-soft) 0%, var(--color-blue-subtle) 100%);
  border: 1px solid var(--color-blue-soft);
  border-radius: 12px;
  color: var(--color-accent);
  flex-shrink: 0;
}

.data-icon svg {
  width: 24px;
  height: 24px;
}

.data-value {
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.data-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.15rem;
}

.data-detail {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
}

/* Tech Highlights (Right) */
.tech-highlights {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.tech-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  /* backdrop-filter: blur(10px); */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
}

.tech-card::after {
  content: '点击查看详情';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--color-blue-medium) 0%, var(--color-blue-soft) 100%);
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  box-shadow: 0 4px 16px hsla(217, 91%, 60%, 0.3);
  border: 1px solid rgba(91, 140, 255, 0.4);
  z-index: 10;
}

.tech-card::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  border: 6px solid transparent;
  border-top-color: var(--color-blue-medium);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 10;
}

.tech-card:hover::after {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-12px);
}

.tech-card:hover::before {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(8px);
}

.tech-card:hover {
  border-color: var(--color-blue-medium);
  transform: translateY(-3px);
  box-shadow: 0 12px 28px hsla(217, 91%, 60%, 0.15);
}

.tech-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.tech-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.tech-expand {
  color: var(--color-accent);
  transition: transform var(--transition-fast);
}

.tech-card:hover .tech-expand {
  transform: translateX(4px);
}

.tech-expand svg {
  width: 20px;
  height: 20px;
}

.tech-desc {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
  line-height: 1.6;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, var(--color-blue-subtle) 0%, hsla(217, 91%, 60%, 0.08) 100%);
  border: 1px solid hsla(217, 91%, 60%, 0.25);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  color: hsla(217, 80%, 70%, 0.95);
  transition: all 0.2s ease;
}

.tech-card:hover .tech-tag {
  background: linear-gradient(135deg, var(--color-blue-medium) 0%, var(--color-blue-soft) 100%);
  border-color: var(--color-blue-medium);
}

/* Case Study CTA */
.case-study-cta {
  text-align: center;
}

.case-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 2rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid rgba(91, 140, 255, 0.35);
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  background: linear-gradient(135deg, #4A7FE8 0%, #1E4FCC 100%);
  color: #ffffff;
  box-shadow: 0 3px 14px hsla(217, 91%, 60%, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.08) inset;
  position: relative;
  overflow: hidden;
}

.case-cta-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.case-cta-link:hover {
  background: linear-gradient(135deg, #6B9FFF 0%, #3B82F6 100%);
  color: #ffffff;
  border-color: rgba(91, 140, 255, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px hsla(217, 91%, 60%, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.15) inset;
}

.case-cta-link:hover::before {
  left: 100%;
}

.case-cta-link:hover svg {
  transform: translateX(4px);
}

.case-cta-link svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  /* backdrop-filter: blur(12px); */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1.5rem;
  animation: fadeIn 0.2s ease-out;
}

.modal-content {
  background: linear-gradient(135deg, rgba(18, 18, 26, 0.95) 0%, rgba(10, 10, 15, 0.98) 100%);
  /* backdrop-filter: blur(20px); */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: modalSlideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
  transform: rotate(90deg);
}

.modal-close svg {
  width: 22px;
  height: 22px;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
  padding-right: 2.5rem;
  font-weight: 600;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.modal-tag {
  padding: 0.3rem 0.85rem;
  background: linear-gradient(135deg, var(--color-blue-subtle) 0%, hsla(217, 91%, 60%, 0.08) 100%);
  border: 1px solid hsla(217, 91%, 60%, 0.25);
  border-radius: 20px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: hsla(217, 80%, 70%, 0.95);
}

.modal-desc {
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  margin-bottom: 2rem;
}

.modal-details h4 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.modal-details p {
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.85;
  white-space: pre-line;
}

/* Responsive Design for Case Study */
@media (max-width: 768px) {
  .case-title {
    font-size: 1.25rem;
  }

  .data-card {
    padding: var(--space-md);
  }

  .data-icon {
    width: 40px;
    height: 40px;
  }

  .data-icon svg {
    width: 20px;
    height: 20px;
  }

  .data-value {
    font-size: 1.5rem;
  }

  .tech-card {
    padding: var(--space-lg);
  }

  .modal-content {
    padding: var(--space-xl);
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .cta-content {
    padding: 3rem 2rem;
  }
}

/* Background Decoration Styles */
.bg-decoration {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: floatSlow 20s ease-in-out infinite;
}

.bg-glow--primary {
  top: -10%;
  right: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle,
    var(--color-blue-soft) 0%,
    transparent 70%);
  animation-delay: 0s;
}

.bg-glow--secondary {
  bottom: -10%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle,
    rgba(139, 92, 246, 0.25) 0%,
    transparent 70%);
  animation-delay: -10s;
}

.grid-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(hsla(217, 91%, 60%, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, hsla(217, 91%, 60%, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  opacity: 0.5;
}

@keyframes floatSlow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.05);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.95);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
