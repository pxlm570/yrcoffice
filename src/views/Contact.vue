<template>
  <div class="contact-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="hero-container">
        <h1 class="hero-title">联系合作</h1>
        <p class="hero-subtitle">期待与您的合作，共创美好未来</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="content-container">
        <div class="contact-grid">
          <!-- Left Card - Contact Info -->
          <div class="contact-info-card card">
            <h2 class="card-title">联系方式</h2>

            <!-- Email -->
            <div class="contact-item">
              <div class="contact-icon">
                <n-icon size="24" color="white">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </n-icon>
              </div>
              <div class="contact-details">
                <h3>电子邮箱</h3>
                <a href="mailto:contact@micono.eu.org" class="contact-link">contact@micono.eu.org</a>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="contact-item">
              <div class="contact-icon">
                <n-icon size="24" color="white">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </n-icon>
              </div>
              <div class="contact-details">
                <h3>工作时间</h3>
                <p>周一至周五 9:00-18:00</p>
              </div>
            </div>

            <!-- WeChat -->
            <div class="contact-item">
              <div class="contact-icon">
                <n-icon size="24" color="white">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </n-icon>
              </div>
              <div class="contact-details">
                <h3>微信号</h3>
                <p>YusakaNetwork</p>
              </div>
            </div>

            <!-- Social Media -->
            <div class="social-section">
              <h3>关注我们</h3>
              <div class="social-buttons">
                <!-- WeChat -->
                <a href="javascript:void(0)" class="social-button" title="微信: YusakaNetwork">
                  <img src="/wechat.svg" alt="微信" width="24" height="24">
                </a>
                <!-- GitHub -->
                <a href="https://github.com/yusaka" target="_blank" class="social-button">
                  <n-icon size="24" color="white">
                    <svg viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </n-icon>
                </a>
              </div>
            </div>
          </div>

          <!-- Right Card - Form -->
          <div class="contact-form-card card">
            <h2 class="card-title">在线留言</h2>
            <p class="card-subtitle">请填写以下信息，我们会尽快与您联系</p>

            <n-form ref="formRef" :model="formValue" :rules="rules" label-placement="top">
              <n-form-item label="姓名" path="name">
                <n-input
                  v-model:value="formValue.name"
                  placeholder="请输入您的姓名"
                  size="large"
                />
              </n-form-item>

              <n-form-item label="电话" path="phone">
                <n-input
                  v-model:value="formValue.phone"
                  placeholder="请输入您的联系电话"
                  size="large"
                />
              </n-form-item>

              <n-form-item label="邮箱" path="email">
                <n-input
                  v-model:value="formValue.email"
                  placeholder="请输入您的邮箱地址"
                  size="large"
                />
              </n-form-item>

              <n-form-item label="微信号" path="wechat">
                <n-input
                  v-model:value="formValue.wechat"
                  placeholder="请输入您的微信号（可选）"
                  size="large"
                />
              </n-form-item>

              <n-form-item label="期望合作的服务类型" path="service">
                <n-select
                  v-model:value="formValue.service"
                  placeholder="请选择您需要的服务"
                  :options="serviceOptions"
                  size="large"
                />
              </n-form-item>

              <n-form-item label="留言内容" path="message">
                <n-input
                  v-model:value="formValue.message"
                  type="textarea"
                  placeholder="请简要描述您的需求，包括项目背景、期望功能、预算范围等信息，以便我们更好地为您服务"
                  :rows="6"
                  size="large"
                />
              </n-form-item>

              <n-form-item>
                <n-button
                  type="primary"
                  size="large"
                  block
                  @click="handleSubmit"
                  :loading="loading"
                >
                  提交留言
                </n-button>
              </n-form-item>
            </n-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  NForm,
  NFormItem,
  NInput,
  NSelect,
  NButton,
  NIcon,
  useMessage
} from 'naive-ui'

const message = useMessage()
const formRef = ref(null)
const loading = ref(false) // Form loading state

const formValue = ref({
  name: '',
  phone: '',
  email: '',
  wechat: '',
  service: null,
  message: ''
})

const serviceOptions = [
  { label: '小程序开发', value: 'miniprogram' },
  { label: 'Web 应用开发', value: 'web' },
  { label: '管理系统', value: 'management' },
  { label: '其他', value: 'other' }
]

const rules = {
  name: {
    required: true,
    message: '请输入您的姓名',
    trigger: 'blur'
  },
  phone: {
    required: true,
    message: '请输入您的联系电话',
    trigger: 'blur',
    validator: (rule, value) => {
      if (!value) {
        return new Error('请输入联系电话')
      }
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return new Error('请输入正确的手机号码')
      }
      return true
    }
  },
  email: {
    required: true,
    message: '请输入您的邮箱',
    trigger: 'blur',
    type: 'email'
  },
  service: {
    required: true,
    message: '请选择服务类型',
    trigger: 'change'
  },
  message: {
    required: true,
    message: '请输入留言内容',
    trigger: 'blur'
  }
}

const handleSubmit = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      loading.value = true

      // Simulate processing
      setTimeout(() => {
        // Generate mailto link
        const subject = `[御坂网络] 合作咨询 - ${formValue.value.name}`
        const body = `姓名：${formValue.value.name}
电话：${formValue.value.phone}
邮箱：${formValue.value.email}
微信号：${formValue.value.wechat || '无'}
服务类型：${getServiceLabel(formValue.value.service)}
留言内容：
${formValue.value.message}`

        const mailtoLink = `mailto:contact@micono.eu.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        // Show success message
        message.success('感谢您的留言！我们会尽快与您联系。')

        // Open mailto link
        window.open(mailtoLink, '_blank')

        // Reset form
        formValue.value = {
          name: '',
          phone: '',
          email: '',
          wechat: '',
          service: null,
          message: ''
        }

        loading.value = false
      }, 1500)
    } else {
      message.error('请填写完整信息')
    }
  })
}

const getServiceLabel = (value) => {
  const option = serviceOptions.find(opt => opt.value === value)
  return option ? option.label : value
}
</script>

<style scoped>
.contact-page {
  min-height: calc(100vh - 128px);
  background: linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
}

/* Hero Section */
.page-hero {
  padding: 100px 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  display: none;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  50% {
    opacity: 0.8;
    transform: translateX(-50%) scale(1.08) translateY(-10px);
  }
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  animation: fadeInUp 0.8s ease-out;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.55);
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
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

/* Content Section */
.contact-content {
  padding: 4rem 0;
}

.content-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 48px;
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
  position: relative;
}

/* Card Styles */
.card {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 44px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    rgba(255, 255, 255, 0.15),
    transparent);
  opacity: 0.5;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.35),
    var(--shadow-glow);
  border-color: hsla(217, 91%, 60%, 0.2);
}

/* Card Title */
.card-title {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 700;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: none;
  position: relative;
}

.card-title::after {
  display: none;
}

@keyframes shimmer {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.card-subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9375rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Left Card - Contact Info */
.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding: 18px;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.02) 100%);
  border-radius: 14px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.contact-item:hover {
  background: linear-gradient(135deg,
    var(--color-blue-subtle) 0%,
    hsla(217, 91%, 50%, 0.06) 100%);
  transform: translateX(8px);
  box-shadow: 0 8px 20px hsla(217, 91%, 60%, 0.15);
  border-color: var(--color-blue-soft);
}

.contact-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.08) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.contact-item:hover .contact-icon {
  transform: scale(1.1);
  background: linear-gradient(135deg,
    var(--color-blue-soft) 0%,
    var(--color-blue-subtle) 100%);
  border-color: var(--color-blue-medium);
}

.contact-details h3 {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  margin-bottom: 4px;
}

.contact-details p,
.contact-details .contact-link {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  word-break: break-all;
}

.contact-link:hover {
  color: rgba(255, 255, 255, 1);
}

/* Social Section */
.social-section {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-section h3 {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  font-weight: 600;
}

.social-buttons {
  display: flex;
  gap: 16px;
}

.social-button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.3);
}

.social-button:hover {
  transform: scale(1.15);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.3);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
}

/* Right Card - Form */
.contact-form-card :deep(.n-form-item-label) {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9375rem;
}

.contact-form-card :deep(.n-input),
.contact-form-card :deep(.n-select) {
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.contact-form-card :deep(.n-input__wrapper),
.contact-form-card :deep(.n-base-selection) {
  background: rgba(255, 255, 255, 0.06) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.contact-form-card :deep(.n-input__input-el),
.contact-form-card :deep(.n-input__textarea-el) {
  font-size: 1rem;
  background: transparent !important;
  color: rgba(255, 255, 255, 0.95);
}

.contact-form-card :deep(.n-input__placeholder),
.contact-form-card :deep(.n-base-selection__placeholder) {
  color: rgba(255, 255, 255, 0.35) !important;
}

.contact-form-card :deep(.n-input:hover .n-input__wrapper),
.contact-form-card :deep(.n-base-selection:hover) {
  background: rgba(255, 255, 255, 0.08) !important;
  border-color: var(--color-blue-soft) !important;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.15),
    var(--shadow-glow);
}

.contact-form-card :deep(.n-input:focus-within .n-input__wrapper),
.contact-form-card :deep(.n-base-selection--focus .n-base-selection__border) {
  border-color: var(--color-blue-medium) !important;
  box-shadow:
    0 0 0 3px hsla(217, 91%, 60%, 0.15),
    0 4px 16px hsla(217, 91%, 60%, 0.2);
}

.contact-form-card :deep(.n-button--primary) {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(220, 220, 240, 0.85) 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--color-bg-primary);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  font-size: 1rem;
  font-weight: 600;
  height: 50px;
  position: relative;
  overflow: hidden;
}

.contact-form-card :deep(.n-button--primary::before) {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent);
  transition: left 0.5s ease;
}

.contact-form-card :deep(.n-button--primary:hover) {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(230, 230, 250, 0.9) 100%);
  transform: translateY(-3px);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.15) inset;
  border-color: rgba(255, 255, 255, 0.5);
}

.contact-form-card :deep(.n-button--primary:hover::before) {
  left: 100%;
}

.contact-form-card :deep(.n-button--primary:active) {
  transform: scale(0.96) translateY(-1px);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.35);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container,
  .content-container {
    padding: 0 24px;
  }

  .contact-grid {
    grid-template-columns: 4fr 6fr;
    gap: 32px;
  }

  .card {
    padding: 36px;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 80px 0 3rem;
  }

  .hero-container,
  .content-container {
    padding: 0 16px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .card {
    padding: 28px;
  }

  .hero-title {
    font-size: 2.2rem;
  }

}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
