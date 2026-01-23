<template>
  <div class="services-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="hero-container">
        <h1 class="hero-title">服务内容</h1>
        <p class="hero-subtitle">专业的技术解决方案，满足您的业务需求</p>
      </div>
    </section>

    <!-- Services Detail -->
    <section class="section services-detail">
      <div class="container">
        <!-- Tabs -->
        <div class="tabs">
          <button
            v-for="(tab, index) in tabs"
            :key="tab.id"
            class="tab-item"
            :class="{ 'is-active': activeTab === index }"
            @click="activeTab = index"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="tab-content">
          <div class="service-intro">
            <div class="intro-icon">
              <component :is="currentTab.icon" />
            </div>
            <h2 class="intro-title">{{ currentTab.title }}</h2>
            <p class="intro-desc">{{ currentTab.description }}</p>
          </div>

          <div class="service-items">
            <div
              v-for="item in currentTab.items"
              :key="item.name"
              class="service-item-card"
            >
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-desc">{{ item.description }}</p>
              <ul class="item-features" v-if="item.features">
                <li v-for="feature in item.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">需要定制化解决方案？</h2>
          <p class="cta-desc">告诉我们您的具体需求，我们提供专业的技术咨询</p>
          <a href="mailto:contact@micono.eu.org" class="cta-button">
            联系咨询
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { h } from 'vue'

const activeTab = ref(0)

// Icons
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

const tabs = [
  {
    id: 'miniprogram',
    label: '小程序开发',
    icon: DeviceIcon,
    title: '小程序开发服务',
    description: '提供微信、支付宝、抖音等多平台小程序开发服务，打造轻量级、易传播的应用体验',
    items: [
      {
        name: '电商小程序',
        description: '完整的商城功能，包括商品展示、购物车、订单管理、支付系统等',
        features: ['商品管理', '购物车系统', '订单管理', '支付接口']
      },
      {
        name: '预约小程序',
        description: '在线预约、时间选择、服务分类、预约管理等预约场景解决方案',
        features: ['在线预约', '日历选择', '服务分类', '预约提醒']
      },
      {
        name: '教育小程序',
        description: '在线课程、题库练习、学习记录、成绩查询等教育场景功能',
        features: ['课程学习', '题库练习', '学习记录', '成绩查询']
      },
      {
        name: '工具类小程序',
        description: '实用工具、信息查询、数据统计等轻量级工具类应用',
        features: ['信息查询', '数据统计', '实用工具', '数据同步']
      }
    ]
  },
  {
    id: 'web',
    label: 'Web 应用开发',
    icon: CodeIcon,
    title: 'Web 应用开发服务',
    description: '现代化网站开发，响应式设计，确保在所有设备上都有优秀的用户体验',
    items: [
      {
        name: '企业官网',
        description: '品牌展示、产品介绍、新闻动态、客户案例等企业官方网站',
        features: ['品牌展示', '产品介绍', '新闻动态', 'SEO 优化']
      },
      {
        name: '营销落地页',
        description: '活动推广、产品发布、营销转化等高转化率落地页设计',
        features: ['活动推广', '产品发布', '营销转化', '数据分析']
      },
      {
        name: 'H5 活动页面',
        description: '节日活动、互动营销、游戏化体验等移动端 H5 页面',
        features: ['互动活动', '游戏化体验', '社交分享', '移动适配']
      },
      {
        name: 'Web 应用系统',
        description: '基于 Web 的完整应用系统，支持复杂的业务逻辑和数据处理',
        features: ['复杂业务逻辑', '数据处理', '权限管理', '系统集成']
      }
    ]
  },
  {
    id: 'management',
    label: '管理系统',
    icon: ServerIcon,
    title: '管理系统开发',
    description: '针对高校、企业、教育行业的专业管理系统，提升组织运营效率',
    items: [
      {
        name: '高校教务管理',
        description: '课程排课、成绩管理、选课系统、考勤管理等教务全流程管理',
        features: ['课程排课', '成绩管理', '选课系统', '考勤管理']
      },
      {
        name: '学生信息管理',
        description: '学生档案、奖惩记录、毕业跟踪、宿舍管理等学生全生命周期管理',
        features: ['学生档案', '奖惩记录', '毕业跟踪', '宿舍管理']
      },
      {
        name: '企业人事管理',
        description: '员工档案、考勤管理、薪资核算、绩效考核等人力资源管理系统',
        features: ['员工档案', '考勤管理', '薪资核算', '绩效考核']
      },
      {
        name: '项目管理',
        description: '项目进度、任务分配、团队协作、工时记录等项目管理工具',
        features: ['项目进度', '任务分配', '团队协作', '工时记录']
      },
      {
        name: '在线学习平台',
        description: '课程管理、学习进度、作业批改、在线考试等教育场景解决方案',
        features: ['课程管理', '学习进度', '作业批改', '在线考试']
      },
      {
        name: '题库系统',
        description: '题目管理、智能组卷、答题练习、成绩分析等题库功能',
        features: ['题目管理', '智能组卷', '答题练习', '成绩分析']
      }
    ]
  }
]

const currentTab = computed(() => tabs[activeTab.value])
</script>

<style scoped>
/* Page Hero */
.services-page {
  background: linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
}

.page-hero {
  padding: 100px 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle,
    rgba(59, 130, 246, 0.15) 0%,
    transparent 70%);
  filter: blur(100px);
  animation: pulse 10s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translateX(-50%) scale(1.1);
  }
}

.hero-container {
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .hero-container {
    padding: 0 1rem;
  }

  .page-hero {
    padding: 88px 0 3rem;
  }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.55);
  max-width: 540px;
  margin: 0 auto;
}

/* Services Detail */
.services-detail {
  position: relative;
}

/* Tabs */
.tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
  padding: 0.5rem;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

@media (max-width: 640px) {
  .tabs {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.tab-item {
  padding: 0.75rem 1.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  background: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  white-space: nowrap;
  position: relative;
}

.tab-item:hover {
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.05);
}

.tab-item.is-active {
  color: rgba(255, 255, 255, 0.95);
  background: linear-gradient(135deg,
    rgba(59, 130, 246, 0.25) 0%,
    rgba(37, 99, 235, 0.15) 100%);
  border: 1px solid rgba(59, 130, 246, 0.35);
  box-shadow:
    0 4px 16px rgba(59, 130, 246, 0.25),
    0 0 0 1px rgba(59, 130, 246, 0.1) inset;
}

/* Tab Content */
.tab-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.service-intro {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  position: relative;
}

.service-intro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  border-radius: 2px;
}

.intro-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 14px;
  color: var(--color-accent);
}

.intro-icon svg {
  width: 36px;
  height: 36px;
}

.intro-title {
  font-size: 1.875rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
}

.intro-desc {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.75;
}

/* Service Items */
.service-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .service-items {
    grid-template-columns: 1fr;
  }
}

.service-item-card {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 1.75rem;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.service-item-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg,
    transparent,
    rgba(59, 130, 246, 0.6),
    transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-item-card:hover {
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-6px);
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(59, 130, 246, 0.15);
}

.service-item-card:hover::before {
  opacity: 1;
}

.item-name {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
}

.item-desc {
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 1.25rem;
  line-height: 1.65;
}

.item-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.item-features li {
  padding: 0.35rem 0.85rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  font-size: 0.8125rem;
  color: rgba(96, 165, 250, 0.9);
  font-weight: 500;
  transition: all 0.2s ease;
}

.service-item-card:hover .item-features li {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

/* CTA Section */
.cta-section {
  position: relative;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 3rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.cta-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent);
}

.cta-content::after {
  content: '';
  position: absolute;
  bottom: -50%;
  right: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  filter: blur(60px);
}

.cta-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.cta-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 2rem;
  line-height: 1.65;
  position: relative;
  z-index: 1;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--color-accent) 0%, #2563EB 100%);
  color: var(--color-text-primary);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
  position: relative;
  z-index: 1;
}

.cta-button:hover {
  background: linear-gradient(135deg, #60A5FA 0%, var(--color-accent) 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(59, 130, 246, 0.4);
}
</style>
