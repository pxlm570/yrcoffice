<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="hero-content">
        <h1>关于我们</h1>
        <p>用技术创造价值，让数字化更简单</p>
      </div>
    </section>

    <!-- Company Info -->
    <section class="about-content">
      <div class="container">
        <div class="about-main">
          <div class="about-text">
            <h2>关于御坂网络</h2>
            <p>御坂网络工作室是一家专注于小程序开发、Web网页开发的技术服务公司。我们深耕高校管理、企业管理、教育行业等领域，致力于为客户提供专业、高效、可靠的数字化解决方案。</p>
            <p>我们的团队由经验丰富的开发人员组成，拥有多年的项目开发经验。我们始终坚持以客户需求为中心，以技术创新为驱动，为客户创造真正的商业价值。</p>
          </div>
          <div class="about-image">
            <img :src="logoUrl" alt="御坂网络" class="about-logo" />
          </div>
        </div>

        <!-- Values -->
        <div class="values-section">
          <h2 class="section-title">我们的价值观</h2>
          <n-grid x-gap="24" y-gap="24" :cols="3">
            <n-gi>
              <n-card hoverable class="value-card">
                <template #header>
                  <div class="value-icon" style="background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);">
                    <n-icon size="32" color="white">
                      <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
                      </svg>
                    </n-icon>
                  </div>
                  <h3>诚信为本</h3>
                </template>
                <p>以诚信赢得信任，以专业建立口碑，做客户值得信赖的合作伙伴</p>
              </n-card>
            </n-gi>
            <n-gi>
              <n-card hoverable class="value-card">
                <template #header>
                  <div class="value-icon" style="background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%);">
                    <n-icon size="32" color="white">
                      <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </n-icon>
                  </div>
                  <h3>追求卓越</h3>
                </template>
                <p>不断学习新技术，持续优化产品，为客户提供最优质的解决方案</p>
              </n-card>
            </n-gi>
            <n-gi>
              <n-card hoverable class="value-card">
                <template #header>
                  <div class="value-icon" style="background: linear-gradient(135deg, #2563EB 0%, #3B82F6 100%);">
                    <n-icon size="32" color="white">
                      <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </n-icon>
                  </div>
                  <h3>客户至上</h3>
                </template>
                <p>始终站在客户角度思考，为客户提供最有价值的解决方案</p>
              </n-card>
            </n-gi>
          </n-grid>
        </div>

        <!-- Advantages -->
        <div class="advantages-section">
          <h2 class="section-title">我们的优势</h2>
          <n-list hoverable clickable>
            <n-list-item>
              <n-thing title="丰富的行业经验">
                <template #description>深耕高校、企业、教育行业多年，深入理解行业痛点和需求</template>
              </n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title专业的技术团队">
                <template #description>团队成员经验丰富，技术实力扎实，能够应对各种复杂需求</template>
              </n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title="灵活的服务模式">
                <template #description>根据客户需求提供定制化服务，确保方案最适合客户的业务</template>
              </n-thing>
            </n-list-item>
            <n-list-item>
              <n-thing title="完善的售后保障">
                <template #description>提供持续的技术支持和维护服务，确保系统稳定运行</template>
              </n-thing>
            </n-list-item>
          </n-list>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { NCard, NGrid, NGi, NList, NListItem, NThing, NIcon } from 'naive-ui'

const logoUrl = 'https://cdn.micono.eu.org/icon/logo.png'
</script>

<style scoped>
.about-page {
  min-height: calc(100vh - 128px);
  background: linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
}

.page-hero {
  background: linear-gradient(135deg,
    rgba(59, 130, 246, 0.18) 0%,
    rgba(37, 99, 235, 0.12) 50%,
    rgba(96, 165, 250, 0.08) 100%);
  background-size: 200% 200%;
  animation: gradientShift 30s ease infinite;
  padding: 100px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* 添加装饰性光晕 */
.page-hero::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle,
    rgba(59, 130, 246, 0.15) 0%,
    transparent 70%);
  filter: blur(80px);
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

.page-hero::after {
  display: none;
}

.page-hero .hero-content {
  position: relative;
  z-index: 1;
}

.page-hero h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  animation: fadeInUp 0.8s ease-out;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-hero p {
  font-size: 1.25rem;
  opacity: 0.85;
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.about-content {
  padding: 80px 20px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.about-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
}

.about-text h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  padding-bottom: 1rem;
}

.about-text h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2563EB, #3B82F6, #60A5FA);
  border-radius: 2px;
}

.about-text p {
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1.25rem;
  font-size: 1.05rem;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-logo {
  width: 280px;
  height: 280px;
  border-radius: 24px;
  box-shadow:
    0 25px 50px rgba(59, 130, 246, 0.15),
    0 0 0 1px rgba(59, 130, 246, 0.1) inset;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 35px;
  object-fit: contain;
}

.about-logo:hover {
  transform: translateY(-10px) rotate(2deg);
  box-shadow:
    0 35px 60px rgba(59, 130, 246, 0.25),
    0 0 30px rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.3);
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2563EB, #3B82F6, #60A5FA);
  border-radius: 2px;
}

.values-section {
  margin-bottom: 80px;
}

.value-card {
  height: 100%;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.value-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: inherit;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.35),
    0 0 40px rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
}

.value-card:hover::before {
  transform: scaleX(1);
}

.value-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.value-card:hover .value-icon {
  transform: scale(1.15) rotate(-8deg);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.15) inset;
}

.value-card h3 {
  text-align: center;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.2rem;
}

.value-card p {
  text-align: center;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;
}

.advantages-section {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(10px);
  padding: 50px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
}

.advantages-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
}

.advantages-section :deep(.n-list) {
  background: transparent;
}

.advantages-section :deep(.n-list-item) {
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 1rem;
}

.advantages-section :deep(.n-list-item:hover) {
  background: rgba(59, 130, 246, 0.08);
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.15);
}

.advantages-section :deep(.n-thing__title) {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.1rem;
}

.advantages-section :deep(.n-thing__description) {
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
}

@media (max-width: 960px) {
  .about-main {
    gap: 50px;
  }
}

@media (max-width: 768px) {
  .about-main {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .about-text h2::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .about-logo {
    width: 220px;
    height: 220px;
  }

  .advantages-section {
    padding: 30px;
  }

  .page-hero h1 {
    font-size: 2.2rem;
  }

  .about-content {
    padding: 60px 20px;
  }
}

@media (max-width: 480px) {
  .page-hero h1 {
    font-size: 1.8rem;
  }

  .about-logo {
    width: 180px;
    height: 180px;
  }
}
</style>
