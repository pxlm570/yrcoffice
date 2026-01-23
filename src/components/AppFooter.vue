<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="brand-logo">
            <img :src="logoUrl" alt="御坂网络" class="brand-logo-img" />
            <span class="brand-name">御坂网络</span>
          </div>
          <p class="brand-desc">专注于高校管理与教育行业数字化解决方案</p>
        </div>

        <!-- Links Section -->
        <div class="footer-links">
          <div class="links-column">
            <h4 class="links-title">导航</h4>
            <ul class="links-list">
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/services">服务</router-link></li>
            </ul>
          </div>
          <div class="links-column">
            <h4 class="links-title">业务</h4>
            <ul class="links-list">
              <li>小程序开发</li>
              <li>Web 应用开发</li>
              <li>管理系统</li>
            </ul>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="footer-contact">
          <h4 class="links-title">联系我们</h4>
          <router-link to="/contact" class="contact-link">
            联系合作
          </router-link>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ currentYear }} 御坂网络工作室</p>
      </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const logoUrl = 'https://cdn.micono.eu.org/icon/logo.png'
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Glass Card Footer - 毛玻璃卡片页脚 */
.footer {
  margin: 12px;
}

@media (min-width: 400px) {
  .footer {
    margin: 16px;
  }
}

@media (min-width: 640px) {
  .footer {
    margin: 20px;
  }
}

.footer-inner {
  background: linear-gradient(135deg,
    rgba(10, 10, 15, 0.95) 0%,
    rgba(18, 18, 26, 0.9) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  padding: 2.5rem 0 1.25rem;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
  overflow: hidden;
  animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* 添加顶部装饰线 */
.footer-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 15%;
  right: 15%;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    rgba(59, 130, 246, 0.3),
    transparent);
}

@media (min-width: 640px) {
  .footer-inner {
    padding: 3rem 0 1.5rem;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.footer-container {
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 12px;
  position: relative;
  z-index: 1;
}

@media (min-width: 400px) {
  .footer-container {
    padding: 0 16px;
  }
}

@media (min-width: 640px) {
  .footer-container {
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  .footer-container {
    padding: 0 32px;
  }
}

/* Main Footer */
.footer-main {
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .footer-main {
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }
}

@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
  }

  .footer-contact {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .footer-contact {
    grid-column: span 1;
  }
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  transition: all 0.25s ease;
}

.brand-logo:hover .brand-logo-img {
  transform: scale(1.08);
}

.brand-logo:hover .brand-name {
  color: rgba(255, 255, 255, 1);
}

.brand-logo-img {
  width: 40px;
  height: 40px;
  transition: transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.brand-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: -0.02em;
  transition: color 200ms ease;
}

.brand-desc {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9375rem;
  line-height: 1.6;
  max-width: 240px;
}

/* Links Section */
.footer-links {
  display: flex;
  gap: var(--space-3xl);
}

@media (max-width: 640px) {
  .footer-links {
    flex-direction: column;
    gap: var(--space-xl);
  }
}

.links-column {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.links-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.25rem;
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.links-list li,
.links-list a {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9375rem;
  text-decoration: none;
  transition: all 200ms ease;
  position: relative;
  padding: 0.25rem 0;
}

.links-list a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg,
    rgba(59, 130, 246, 0.6),
    rgba(96, 165, 250, 0.6));
  transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
}

.links-list a:hover {
  color: rgba(255, 255, 255, 0.95);
  transform: translateX(6px);
}

.links-list a:hover::after {
  width: 100%;
}

/* Contact Section */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.contact-link {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9375rem;
  text-decoration: none;
  transition: all 200ms ease;
  word-break: break-all;
  position: relative;
  padding: 0.25rem 0;
  cursor: pointer;
}

.contact-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg,
    rgba(59, 130, 246, 0.6),
    rgba(96, 165, 250, 0.6));
  transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
}

.contact-link:hover {
  color: rgba(255, 255, 255, 0.95);
  transform: translateX(6px);
}

.contact-link:hover::after {
  width: 100%;
}

/* Footer Bottom */
.footer-bottom {
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.footer-bottom::before {
  display: none;
}

.copyright {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.875rem;
  text-align: center;
  transition: color 200ms ease;
}

.footer:hover .copyright {
  color: rgba(255, 255, 255, 0.55);
}
</style>
