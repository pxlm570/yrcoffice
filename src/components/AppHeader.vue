<template>
  <header class="header" :class="{ 'is-scrolled': isScrolled }">
    <div class="header-inner">
      <div class="header-container">
        <!-- Logo -->
        <router-link to="/" class="logo group">
          <img :src="logoUrl" alt="御坂网络" class="logo-icon" />
          <span class="logo-text">御坂网络</span>
        </router-link>

        <!-- Navigation -->
        <nav class="nav">
          <router-link
            v-for="item in navItems"
            :key="item.key"
            :to="item.key"
            class="nav-item"
            :class="{ 'is-active': isActive(item.key) }"
          >
            {{ item.label }}
          </router-link>
        </nav>

        <!-- CTA Button -->
        <router-link to="/contact" class="cta-button">
          <span>开始合作</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)

const logoUrl = 'https://cdn.micono.eu.org/icon/logo.png'

const navItems = [
  { label: '首页', key: '/' },
  { label: '服务', key: '/services' }
]

const isActive = (path) => {
  return route.path === path
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Glass Card Nav - 毛玻璃悬浮导航 */
.header {
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header-inner {
  background: linear-gradient(135deg, rgba(10, 10, 15, 0.85) 0%, rgba(18, 18, 26, 0.8) 100%);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: slideDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-inner::before {
  display: none;
}

.header.is-scrolled .header-inner {
  background: linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(18, 18, 26, 0.92) 100%);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.header-container {
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 32px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

@media (min-width: 400px) {
  .header-container {
    padding: 0 40px;
    height: 60px;
  }
}

@media (min-width: 640px) {
  .header-container {
    padding: 0 48px;
    height: 64px;
    gap: 64px;
  }
}

@media (min-width: 1024px) {
  .header-container {
    padding: 0 60px;
    gap: 80px;
  }
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
}

@media (min-width: 400px) {
  .logo {
    gap: 16px;
  }
}

@media (min-width: 640px) {
  .logo {
    gap: 18px;
  }
}

.logo-icon {
  width: 26px;
  height: 26px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

@media (min-width: 400px) {
  .logo-icon {
    width: 30px;
    height: 30px;
  }
}

@media (min-width: 640px) {
  .logo-icon {
    width: 32px;
    height: 32px;
  }
}

.logo-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.9375rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: -0.02em;
  transition: color 200ms ease, text-shadow 250ms ease;
  text-shadow: 0 0 0 rgba(59, 130, 246, 0);
}

@media (min-width: 400px) {
  .logo-text {
    font-size: 1rem;
  }
}

@media (min-width: 640px) {
  .logo-text {
    font-size: 1.125rem;
  }
}

@media (max-width: 380px) {
  .logo-text {
    display: none;
  }
}

/* Logo hover effect */
.logo:hover .logo-text {
  color: rgba(255, 255, 255, 1);
}

.logo:hover .logo-icon {
  transform: scale(1.08);
}

.logo-icon {
  filter: none;
}

.logo:hover .logo-icon {
  filter: none;
}

/* Navigation */
.nav {
  display: none;
  align-items: center;
  gap: 2.5rem;
}

@media (min-width: 640px) {
  .nav {
    gap: 3rem;
  }
}

@media (min-width: 768px) {
  .nav {
    display: flex;
  }
}

.nav-item {
  padding: 0.25rem 0;
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 200ms ease;
  position: relative;
}

@media (min-width: 640px) {
  .nav-item {
    font-size: 1rem;
  }
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  transform: translateX(-50%);
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.nav-item:hover {
  color: rgba(255, 255, 255, 0.95);
}

.nav-item:hover::after {
  width: 100%;
}

.nav-item.is-active {
  color: rgba(255, 255, 255, 0.95);
}

.nav-item.is-active::after {
  width: 100%;
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 18px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.cta-button:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.cta-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

@media (min-width: 400px) {
  .cta-button {
    padding: 10px 20px;
    font-size: 1rem;
  }
}

.cta-button:hover::before {
  left: 100%;
}

@media (max-width: 640px) {
  .cta-button {
    padding: 8px 14px;
    font-size: 0.9375rem;
  }

  .cta-button span {
    display: none;
  }

  .cta-button::after {
    content: '合作';
  }
}
</style>
