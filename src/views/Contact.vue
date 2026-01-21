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
                  <n-icon size="24" color="white">
                    <svg viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l.397 1.375a.58.58 0 0 1-.836.703L1.68 15.851a.58.58 0 0 1 .08-.896c.835-.596 1.636-1.293 2.207-2.067.92-.126 1.88-.226 2.854-.296C6.227 12.922 7.436 12.82 8.69 12.82c4.746 0 8.591-3.63 8.591-8.094 0-4.136-3.546-7.538-7.916-7.538zm.291 1.866c-.369.313-.778.578-1.209.784a.582.582 0 0 1-.27-.758c1.004-1.234 2.33-1.646 2.33-1.646.972 0 2.643.765 2.643.765.377 0 .723-.14.998-.41-.37-.322-.845-.496-1.305-.765a.58.58 0 0 1-.228-.77c.353-.252.848-.384 1.254-.384 1.092 0 1.563.57 1.563.57.232 0 .522-.08.69-.263-.19-.212-.46-.33-.822-.59a.592.592 0 0 1 .074-.79c.346-.197.815-.298 1.207-.298.966 0 1.795.539 1.795.865 0 .284-.116.529-.329.726-.194-.18-.43-.335-.804-.523a.589.589 0 0 1 .138-.775c.292-.147.665-.222.95-.222 1.056 0 1.527.57 1.527.57.284 0 .524-.106.717-.345-.174-.19-.388-.44-.846-.654a.591.591 0 0 1 .13-.775c.266-.118.578-.178.822-.178-.972 0-1.138 1.14-2.058 2.548-2.058.677 0 1.28.31 1.735.865.19.213.39.38.554.626.227.139.463.26.736.23a.582.582 0 0 1 .022.792c-.256.104-.528.156-.778.156-.547 0-1.347-.382-1.852-.788-.166-.134-.294-.24-.486-.338a.593.593 0 0 1 .055-.787c.216-.088.444-.132.658-.132zm6.498 1.44c-.283.242-.6.453-.951-.453-.951.356 0 1.321.226 1.321.226.27 0 .514-.1.693-.34-.16-.183-.357-.343-.783-.52a.583.583 0 0 1 .073-.79c.353-.264.85-.402 1.264-.402.947 0 1.74.536 1.74.536.297 0 .557-.11.757-.393-.18-.2-.4-.39-.87-.617a.593.593 0 0 1 .08-.79c.327-.25.78-.376 1.167-.376 1.027 0 1.893.56 1.893.56.29 0 .54-.108.738-.384-.17-.19-.383-.4-.866-.609a.591.591 0 0 1 .092-.79c.303-.247.724-.373 1.107-.376 1.092 0 2 .594 2 .594.27 0 .506-.102.69-.37-.163-.176-.364-.382-.85-.606a.591.591 0 0 1 .076-.79c.26-.21.618-.315.918-.315.996 0 1.242 1.155 2.257 2.58 2.257.294 0 .548-.103.747-.384-.173-.19-.377-.402-.846-.61a.592.592 0 0 1 .068-.79c.25-.202.59-.303.86-.303.98 0 1.292 1.2 2.34 2.68 2.34.294 0 .546-.102.746-.38z"/>
                    </svg>
                  </n-icon>
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
    type: 'number',
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
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(32px) saturate(180%);
  border: none;
  border-radius: 20px;
  padding: 44px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.25);
}

.card::before {
  display: none;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.3);
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
  background: rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(6px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.15);
}

.contact-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.4);
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
  transition: all 0.3s ease;
}

.contact-form-card :deep(.n-input__wrapper),
.contact-form-card :deep(.n-base-selection) {
  background: rgba(255, 255, 255, 0.06) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  transition: all 0.3s ease;
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
  border-color: rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.contact-form-card :deep(.n-input:focus-within .n-input__wrapper),
.contact-form-card :deep(.n-base-selection--focus .n-base-selection__border) {
  border-color: rgba(255, 255, 255, 0.3) !important;
  box-shadow:
    0 0 0 3px rgba(255, 255, 255, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.2);
}

.contact-form-card :deep(.n-button--primary) {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  font-weight: 600;
  height: 50px;
}

.contact-form-card :deep(.n-button--primary:hover) {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
  transform: translateY(-3px);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.4);
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
